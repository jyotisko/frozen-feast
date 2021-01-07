class CartBtnView {

  _cartBtns = document.querySelectorAll('.cart-btn');
  _figures = document.querySelectorAll('figure.item-container');
  _activeClass = '';

  setupEventListeners(handler) {
    this._cartBtns.forEach(btn => btn.addEventListener('click', e => {
      const figure = e.target.closest('figure');
      const name = figure.querySelector('.name').textContent;
      const price = figure.querySelector('.now-price').textContent;
      const img = figure.querySelector('img').src;
      handler(name, price, img);
      e.target.classList.toggle('active');
      if (e.target.classList.contains('active')) {
        e.target.style.backgroundColor = '#f55045';
        e.target.style.color = '#fff';
      } else {
        e.target.style.backgroundColor = 'rgb(255,198,0)';
        e.target.style.color = '#000';
      }
    }));
  }

  setBtnColorFromLocalStorage(itemsArr) {
    if (itemsArr.length === 0) return;
    this._figures.forEach(fig => {
      const name = fig.querySelector('.name').textContent;
      if (!itemsArr.some(n => n == name)) return;
      const btn = fig.querySelector('.cart-btn');
      btn.classList.add('active');
      btn.style.backgroundColor = '#f55045';
      btn.style.color = '#fff';
    })
  }

  removeBtnColor(itemName) {
    this._figures.forEach(fig => {
      const name = fig.querySelector('.name').textContent;
      if (name !== itemName) return;
      const btn = fig.querySelector('.cart-btn');
      btn.classList.remove('active');
      btn.style.backgroundColor = 'rgb(255,198,0)';
      btn.style.color = '#000';
    })
  }

};

export default new CartBtnView();

