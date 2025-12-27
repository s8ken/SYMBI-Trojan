#!/usr/bin/env node

/**
 * LLM Accessibility Checker for SYMBI Trojan
 * Ensures static fallback content remains comprehensive and accessible
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_CONTENT = {
  // Key phrases that must be present
  mustContain: [
    'SYMBI Trojan',
    'trust infrastructure',
    'sovereign AI',
    'yseeku',
    'gammatria',
    'symbi.world',
    'trust framework',
    'Reality Index',
    'Trust Protocol',
    'Ethical Alignment',
    'Resonance Quality',
    'Canvas Parity',
    'Trojan horse',
    'Solana',
    'tokenomics',
    'roadmap'
  ],
  
  // Required sections (h2 headings)
  sections: [
    'What is SYMBI?',
    'The Ecosystem Components',
    'The SYMBI Trust Framework',
    'Quantified Improvements',
    'The Trojan Strategy',
    'Technical Infrastructure',
    'Mission:',
    'SYMBI on Solana',
    'Tokenomics',
    'Roadmap',
    'Key Insights',
    'Ecosystem Links'
  ],
  
  // Required domains
  domains: [
    'symbi.world',
    'yseeku.com',
    'gammatria.com',
    'github.com/s8ken'
  ],
  
  // Minimum word count for comprehensive content
  minWordCount: 800
};

function checkLLMAccessibility() {
  const indexPath = path.join(__dirname, '../index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found');
    process.exit(1);
  }
  
  const content = fs.readFileSync(indexPath, 'utf8');
  
  // Find the llm-fallback section
  const fallbackMatch = content.match(/<main[^>]*id="llm-fallback"[^>]*>(.*?)<\/main>/s);
  
  if (!fallbackMatch) {
    console.error('❌ llm-fallback section not found');
    process.exit(1);
  }
  
  const fallbackContent = fallbackMatch[1].replace(/<[^>]*>/g, ' '); // Remove HTML tags for text analysis
  const cleanContent = fallbackContent.replace(/\s+/g, ' ').trim();
  const words = cleanContent.split(' ').filter(word => word.length > 0);
  
  console.log('🔍 Checking LLM Accessibility for SYMBI Trojan...\n');
  console.log(`📊 Content Statistics:`);
  console.log(`   Word Count: ${words.length} (minimum: ${REQUIRED_CONTENT.minWordCount})`);
  console.log(`   Character Count: ${cleanContent.length}\n`);
  
  let issues = [];
  let passes = 0;
  
  // Check word count
  if (words.length >= REQUIRED_CONTENT.minWordCount) {
    console.log('✅ Word count requirement met');
    passes++;
  } else {
    console.log(`❌ Word count too low: ${words.length} < ${REQUIRED_CONTENT.minWordCount}`);
    issues.push(`Word count insufficient (${words.length}/${REQUIRED_CONTENT.minWordCount})`);
  }
  
  // Check required content
  console.log('\n🔎 Checking required content phrases:');
  REQUIRED_CONTENT.mustContain.forEach(phrase => {
    if (cleanContent.toLowerCase().includes(phrase.toLowerCase())) {
      console.log(`   ✅ "${phrase}"`);
      passes++;
    } else {
      console.log(`   ❌ "${phrase}" - MISSING`);
      issues.push(`Missing required phrase: "${phrase}"`);
    }
  });
  
  // Check required sections
  console.log('\n📋 Checking required sections:');
  const h2Matches = content.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
  const h2Texts = h2Matches.map(h2 => h2.replace(/<[^>]*>/g, '').trim());
  
  REQUIRED_CONTENT.sections.forEach(section => {
    if (h2Texts.some(h2 => h2.toLowerCase().includes(section.toLowerCase()))) {
      console.log(`   ✅ "${section}"`);
      passes++;
    } else {
      console.log(`   ❌ "${section}" - MISSING`);
      issues.push(`Missing required section: "${section}"`);
    }
  });
  
  // Check required domains
  console.log('\n🌐 Checking ecosystem domains:');
  REQUIRED_CONTENT.domains.forEach(domain => {
    if (content.includes(domain)) {
      console.log(`   ✅ "${domain}"`);
      passes++;
    } else {
      console.log(`   ❌ "${domain}" - MISSING`);
      issues.push(`Missing domain link: "${domain}"`);
    }
  });
  
  // Summary
  const totalChecks = REQUIRED_CONTENT.mustContain.length + 
                     REQUIRED_CONTENT.sections.length + 
                     REQUIRED_CONTENT.domains.length + 1; // +1 for word count
  
  console.log(`\n📈 Summary: ${passes}/${totalChecks} checks passed`);
  
  if (issues.length === 0) {
    console.log('🎉 All LLM accessibility requirements met!');
    console.log('✅ LLMs will be able to read comprehensive SYMBI content');
    return true;
  } else {
    console.log('\n❌ LLM Accessibility Issues Found:');
    issues.forEach(issue => console.log(`   - ${issue}`));
    console.log('\n🔧 Please fix these issues before deployment');
    return false;
  }
}

// Run the check
if (require.main === module) {
  const success = checkLLMAccessibility();
  process.exit(success ? 0 : 1);
}

module.exports = { checkLLMAccessibility };