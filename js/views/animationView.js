// Sticky Nav Bar Animation
export const stickyNavAnimation = () => {
  const timerEl = document.querySelector('#timer'); // when user reaches the {timer} element, the nav should become sticky
  const nav = document.querySelector('#nav-section');

  document.addEventListener('scroll', () => {
    if (!window.scrollY >= timerEl.getBoundingClientRect().top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  });
};

// Humberger Toggle
export const mobileNavToggle = () => {
  const humbergerContainer = document.querySelector('.humberger');
  const mobileNavContainer = document.querySelector('#mobile-nav');
  const closeNavBtn = document.querySelector('.cross');

  humbergerContainer.addEventListener('click', e => {
    if (e.target === humbergerContainer) return;
    mobileNavContainer.classList.add('open');
  });
  closeNavBtn.addEventListener('click', () => mobileNavContainer.classList.remove('open'));
};

// Cart slide animation
export const cartAnimation = () => {
  const cartBtn = document.querySelectorAll('.cart-icon');
  const closeCartBtn = document.querySelector('.close-cart');
  const cartSection = document.querySelector('#cart');

  cartBtn.forEach(btn => btn.addEventListener('click', () => cartSection.classList.toggle('open')));
  closeCartBtn.addEventListener('click', () => cartSection.classList.toggle('open'));
};


