#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const games = require(path.join(__dirname, '..', 'src', 'data', 'games.js')).games || require(path.join(__dirname, '..', 'src', 'data', 'games.js')).default;

const results = { total: 0, uniqueTitles: 0, uniqueDescs: 0, validJsonLd: 0, faqMatch: 0, brokenLinks: 0, withRelatedGames: 0, withRelatedGuides: 0, issues: [] };

for (const game of games) {
  const htmlPath = path.join(distDir, `${game.slug}.html`);
  if (!fs.existsSync(htmlPath)) {
    results.issues.push(`${game.slug}: HTML NOT FOUND`);
    continue;
  }
  results.total++;
  const html = fs.readFileSync(htmlPath, 'utf-8');

  // Check title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';

  // Check meta description
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  const desc = descMatch ? descMatch[1] : '';

  // Check canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : '';

  // Check JSON-LD
  const jsonLdMatch = html.match(/application\/ld\+json">([\s\S]*?)<\/script>/);
  let jsonLd = null;
  let jsonLdValid = false;
  if (jsonLdMatch) {
    try { jsonLd = JSON.parse(jsonLdMatch[1].trim()); jsonLdValid = true; } catch(e) {
      results.issues.push(`${game.slug}: JSON-LD parse error: ${e.message.substring(0, 80)}`);
    }
  } else {
    results.issues.push(`${game.slug}: no JSON-LD script tag found`);
  }

  // Check FAQ JSON-LD vs visible
  let faqJsonLd = [];
  let faqVisible = [];
  if (jsonLd && jsonLd['@graph']) {
    const faqPage = jsonLd['@graph'].find(i => i['@type'] === 'FAQPage');
    if (faqPage && faqPage.mainEntity) {
      faqJsonLd = faqPage.mainEntity.map(q => q.name);
    }
  } else if (jsonLd && jsonLd['@type'] === 'FAQPage') {
    faqJsonLd = jsonLd.mainEntity.map(q => q.name);
  }
  const faqDetailsMatch = html.match(/game-faq[\s\S]*?<\/section>/);
  if (faqDetailsMatch) {
    const summaryMatches = faqDetailsMatch[0].matchAll(/<summary[^>]*>([^<]+)<\/summary>/g);
    for (const m of summaryMatches) faqVisible.push(m[1]);
  }

  // Check related games
  const relatedGameLinks = html.match(/related-card[\s\S]*?<\/a>/g) || [];
  const hasRelatedGames = relatedGameLinks.length >= 2;

  // Check related guides
  const hasRelatedGuides = html.includes('game-guides') || html.includes('Related Guides');

  // Check for self-links in related
  const relatedSlugs = [];
  for (const link of relatedGameLinks) {
    const hrefMatch = link.match(/href="\/([^"]+)"/);
    if (hrefMatch) relatedSlugs.push(hrefMatch[1]);
  }
  const hasSelfLink = relatedSlugs.includes(game.slug);
  const hasDuplicateLinks = relatedSlugs.length !== new Set(relatedSlugs).size;

  // Track
  if (title) results.uniqueTitles++;
  if (desc) results.uniqueDescs++;
  if (jsonLdValid) results.validJsonLd++;
  if (hasRelatedGames) results.withRelatedGames++;
  if (hasRelatedGuides) results.withRelatedGuides++;

  // FAQ match check
  if (faqJsonLd.length > 0 && faqVisible.length > 0) {
    const match = faqJsonLd.length === faqVisible.length && faqJsonLd.every((q, i) => q === faqVisible[i]);
    if (match) results.faqMatch++;
  } else if (faqJsonLd.length === 0 && faqVisible.length === 0) {
    results.faqMatch++; // No FAQ = no mismatch
  }

  // Issues
  if (hasSelfLink) results.issues.push(`${game.slug}: self-link in related games`);
  if (hasDuplicateLinks) results.issues.push(`${game.slug}: duplicate links in related games`);
  if (!jsonLdValid) results.issues.push(`${game.slug}: invalid JSON-LD`);
  if (faqJsonLd.length > 0 && faqVisible.length > 0 && faqJsonLd.length !== faqVisible.length) {
    results.issues.push(`${game.slug}: FAQ mismatch (${faqJsonLd.length} JSON-LD vs ${faqVisible.length} visible)`);
  }
  if (!hasRelatedGames) results.issues.push(`${game.slug}: missing related games`);
  if (!hasRelatedGuides) results.issues.push(`${game.slug}: missing related guides`);
}

// Check description uniqueness
const allDescs = [];
for (const game of games) {
  const htmlPath = path.join(distDir, `${game.slug}.html`);
  if (!fs.existsSync(htmlPath)) continue;
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  if (descMatch) allDescs.push({ slug: game.slug, desc: descMatch[1] });
}
const uniqueDescs = new Set(allDescs.map(d => d.desc));
const duplicateDescs = allDescs.filter(d => allDescs.filter(x => x.desc === d.desc).length > 1);
if (duplicateDescs.length > 0) {
  for (const d of duplicateDescs) {
    results.issues.push(`DUPLICATE DESC: ${d.slug} shares description with ${allDescs.filter(x => x.desc === d.desc && x.slug !== d.slug).map(x => x.slug).join(', ')}`);
  }
}

console.log(JSON.stringify({ ...results, uniqueDescsCount: uniqueDescs.size, totalDescs: allDescs.length }, null, 2));
