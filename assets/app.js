/* Progressive enhancement: all documentary content is readable without JavaScript. */
'use strict';
document.querySelectorAll('.print-button').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => window.print());
});
const indexLinks = [...document.querySelectorAll('.contents nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;
    const current = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id;
    indexLinks.forEach((link) => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-100px 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('.document-section').forEach((section) => observer.observe(section));
}
