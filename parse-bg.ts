import fs from 'fs';
const html = fs.readFileSync('site.html', 'utf8');
const matches = html.match(/background-image:\s*url\(([^)]+)\)/g);
if (matches) {
  console.log(matches.slice(0, 5));
}
