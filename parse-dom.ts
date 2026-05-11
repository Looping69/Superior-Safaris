import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('site.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Extract header
const header = document.querySelector('header');
if (header) {
  console.log("--- HEADER ---");
  console.log(header.outerHTML.substring(0, 1000));
}

// Extract first section (hero)
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
  console.log("--- HERO SECTION ---");
  console.log(sections[0].outerHTML.substring(0, 1000));
  
  console.log("--- SECOND SECTION ---");
  console.log(sections[1].outerHTML.substring(0, 1000));
}

