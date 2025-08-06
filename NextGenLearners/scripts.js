// BACKGROUND SLIDESHOW
const hero = document.querySelector('.hero');
const bgImages = [
  'Assests/bg.jpg',
  'Assests/bg1.jpg',
  'Assests/back2.jpg',
  'Assests/back3.jpg',
  'Assests/back5.jpg'
];
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % bgImages.length;
  hero.style.backgroundImage = `url('${bgImages[idx]}')`;
}, 4000);

// MOBILE MENU TOGGLE
const mobileMenu = document.querySelector('.mobile-menu');
document.querySelector('.hamburger').addEventListener('click', () => {
  mobileMenu.classList.add('active');
});
document.querySelector('.close-btn').addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});



document.addEventListener('DOMContentLoaded', () => {
  // 1) Create the custom cursor “head”
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  // 2) Move it & spawn trails on mousemove
  window.addEventListener('mousemove', e => {
    cursor.style.top  = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    trail.style.top  = `${e.clientY}px`;
    trail.style.left = `${e.clientX}px`;
    document.body.appendChild(trail);

    // remove the trail node once its animation ends
    trail.addEventListener('animationend', () => trail.remove());
  });

  // 3) Grow/shrink on hoverable elements
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
});