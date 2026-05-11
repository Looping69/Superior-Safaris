import fs from 'fs';

async function fetchSite() {
  const res = await fetch('https://www.superiorsafaris.co.za/');
  const html = await res.text();
  fs.writeFileSync('site.html', html);
  console.log('Saved site.html');
}

fetchSite();
