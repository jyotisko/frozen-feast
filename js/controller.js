import startTimer from './views/timerView.js';
import { OFFER_TIMEOUT_MINUTES } from './config.js';
import { stickyNavAnimation, mobileNavToggle, cartAnimation } from './views/animationView.js';
import cartBtnView from './views/cartBtnView.js';
import cartView from './views/cartView.js';
import * as model from './model.js';

const manageCartBtns = (name, price, img) => {
  model.addItemToLocalStorage(name, price, img);
  cartView.generateMarkup(model.items.bookmarks);
};

const getAndSetDataFromLocalStorage = () => {
  model.getDataFromLocalStorage();
  cartView.generateMarkup(model.items.bookmarks);
};

const handleDelete = name => {
  model.removeItem(name);
  cartView.generateMarkup(model.items.bookmarks);
  cartBtnView.removeBtnColor(name);
};

const init = () => {
  startTimer(OFFER_TIMEOUT_MINUTES);
  cartAnimation();
  stickyNavAnimation();
  mobileNavToggle();
  getAndSetDataFromLocalStorage();
  cartView.handleDelete(handleDelete);
  cartBtnView.setupEventListeners(manageCartBtns);
  cartBtnView.setBtnColorFromLocalStorage(model.items.bookmarks.length > 0 ? model.items.bookmarks.map(i => i.name) : '');
};

init();
