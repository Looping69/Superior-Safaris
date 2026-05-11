import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('site.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const sections = document.querySelectorAll('section');
sections.forEach((sec, i) => {
  console.log(`\n--- SECTION ${i} ---`);
  
  // Try to find background images
  const style = sec.getAttribute('style') || '';
  const bgMatch = style.match(/url\((.*?)\)/);
  if (bgMatch) console.log(`Background: ${bgMatch[1]}`);
  
  const bgOverlay = sec.querySelector('.elementor-background-overlay');
  if (bgOverlay) {
    const overlayStyle = bgOverlay.getAttribute('style') || '';
    const overlayMatch = overlayStyle.match(/url\((.*?)\)/);
    if (overlayMatch) console.log(`Overlay Background: ${overlayMatch[1]}`);
  }

  // Extract text content
  const headings = sec.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach(h => console.log(`Heading (${h.tagName}): ${h.textContent.trim()}`));
  
  const paragraphs = sec.querySelectorAll('p');
  paragraphs.forEach(p => console.log(`Paragraph: ${p.textContent.trim()}`));
  
  const images = sec.querySelectorAll('img');
  images.forEach(img => console.log(`Image: ${img.src}`));
  
  const buttons = sec.querySelectorAll('a.elementor-button, a.elementor-button-link');
  buttons.forEach(btn => console.log(`Button: ${btn.textContent.trim()} -> ${btn.href}`));
});
