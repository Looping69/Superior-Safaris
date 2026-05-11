import fs from 'fs';

const html = fs.readFileSync('site.html', 'utf8');

// Extract all image sources
const imgRegex = /<img[^>]+src="([^">]+)"/g;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}
console.log("IMAGES:", [...new Set(images)].filter(src => src.includes('superiorsafaris')));

// Extract some basic structure (h1, h2, h3)
const headingRegex = /<h[1-3][^>]*>(.*?)<\/h[1-3]>/g;
const headings = [];
while ((match = headingRegex.exec(html)) !== null) {
  headings.push(match[1].replace(/<[^>]+>/g, '').trim());
}
console.log("HEADINGS:", headings);

// Extract colors from inline styles or specific classes if possible
const colorRegex = /color:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))/g;
const colors = [];
while ((match = colorRegex.exec(html)) !== null) {
  colors.push(match[1]);
}
console.log("COLORS:", [...new Set(colors)]);

// Extract background colors
const bgRegex = /background-color:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))/g;
const bgs = [];
while ((match = bgRegex.exec(html)) !== null) {
  bgs.push(match[1]);
}
console.log("BACKGROUNDS:", [...new Set(bgs)]);

