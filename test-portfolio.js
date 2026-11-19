import { projects, CATEGORIES } from './src/data/projects.js';
import { profileData } from './src/data/profile.js';
import fs from 'fs';
import path from 'path';

console.log('🧪 RUNNING PORTFOLIO VERIFICATION SUITE...\n');

let errors = [];

// 1. Check Categories
const categoryIds = CATEGORIES.map(c => c.id);
console.log(`✓ Categories loaded: [${categoryIds.join(', ')}]`);
if (!categoryIds.includes('all') || !categoryIds.includes('posters') || !categoryIds.includes('branding') || !categoryIds.includes('social') || !categoryIds.includes('uiux')) {
  errors.push('Missing required category IDs');
}

// 2. Validate Projects
console.log(`✓ Total projects defined: ${projects.length}`);

projects.forEach((p, idx) => {
  const requiredKeys = ['id', 'title', 'category', 'description', 'image', 'tools', 'year', 'featured', 'process'];
  for (const key of requiredKeys) {
    if (p[key] === undefined || p[key] === null) {
      errors.push(`Project index ${idx} ("${p.title || 'Untitled'}") is missing required key "${key}"`);
    }
  }

  // Check category validity
  if (!['posters', 'branding', 'social', 'uiux'].includes(p.category)) {
    errors.push(`Project "${p.title}" has invalid category "${p.category}"`);
  }

  // Check tools is an array
  if (!Array.isArray(p.tools) || p.tools.length === 0) {
    errors.push(`Project "${p.title}" tools should be a non-empty array`);
  }

  // Check image file exists
  if (p.image) {
    const cleanPath = p.image.startsWith('/') ? p.image.slice(1) : p.image;
    const fullPath = path.resolve('./public', cleanPath);
    if (!fs.existsSync(fullPath)) {
      errors.push(`Image file not found for project "${p.title}": ${fullPath}`);
    }
  }

  // Check multi-images if specified
  if (p.images && Array.isArray(p.images)) {
    p.images.forEach((img) => {
      const cleanImgPath = img.startsWith('/') ? img.slice(1) : img;
      const fullImgPath = path.resolve('./public', cleanImgPath);
      if (!fs.existsSync(fullImgPath)) {
        errors.push(`Multi-image file not found for project "${p.title}": ${fullImgPath}`);
      }
    });
  }
});

// 3. Category distribution
const counts = {};
CATEGORIES.forEach(c => {
  if (c.id === 'all') counts.all = projects.length;
  else counts[c.id] = projects.filter(p => p.category === c.id).length;
});
console.log('\n📊 Category Distribution:');
for (const [cat, count] of Object.entries(counts)) {
  console.log(`   - ${cat.padEnd(10)}: ${count} projects`);
  if (count === 0 && cat !== 'all') {
    errors.push(`Category "${cat}" has 0 projects!`);
  }
}

// 4. Validate Profile Data
console.log('\n👤 Checking Designer Profile Data:');
if (profileData.name !== 'ANMOL') {
  errors.push(`Expected name "ANMOL", found "${profileData.name}"`);
}
console.log(`   - Name: ${profileData.name}`);
console.log(`   - Title: ${profileData.role}`);
console.log(`   - Tagline: ${profileData.tagline}`);
console.log(`   - Tools: ${profileData.tools.map(t => t.name).join(', ')}`);
console.log(`   - Email: ${profileData.contact.email}`);

if (errors.length > 0) {
  console.error('\n❌ VALIDATION FAILED WITH ERRORS:');
  errors.forEach(e => console.error(`   - ${e}`));
  process.exit(1);
} else {
  console.log('\n✅ ALL VERIFICATION CHECKS PASSED PERFECTLY!\n');
}
