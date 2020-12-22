import startTimer from './views/timerView.js';
import { OFFER_TIMEOUT_MINUTES } from './config.js';
import { stickyNavAnimation, mobileNavToggle } from './views/animationView.js';

const init = () => {
  startTimer(OFFER_TIMEOUT_MINUTES);
  stickyNavAnimation();
  mobileNavToggle();
};

init();
