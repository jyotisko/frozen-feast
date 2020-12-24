class CartView {
  _parentContainer = document.querySelector('.cart-part__2');
  _totalPriceEl = document.querySelector('.total-price');

  generateMarkup(items) {
    if (items.length === 0) {
      this._totalPriceEl.textContent = '$0';
      return this._parentContainer.innerHTML = '';
    };

    this._parentContainer.innerHTML = '';

    items.forEach(item => {
      const markup = `
      <figure class="cart-item">
        <div class="img">
          <img src="${item.imgSrc}" alt="${item.name}">
        </div>
        <div class="info">
          <h3 class="name">${item.name}</h3>
          <h4 class="price" data-total="${item.price}">${item.price}</h4>
        </div>
        <div class="counters">
          <button class="decrease-btn">-</button> <span class="quantity">1</span> <button class="increase-btn">+</button>
        </div>
      </figure>
      `;
      this._parentContainer.insertAdjacentHTML('beforeend', markup);
    });

    this._setTotalPrice();
    this._setupQuantityHandlers();
  }

  _setTotalPrice() {
    const figures = this._parentContainer.querySelectorAll('figure.cart-item');
    let totalPrice = 0;

    if (figures.length === 0) return;

    figures.forEach(figure => {
      const price = Number(figure.querySelector('.price').dataset.total.replace('$', ''));
      totalPrice += price;
    });

    this._totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;
  }

  _setupQuantityHandlers() {
    this._increaseQuantityHandler();
    this._decreaseQuantityHandler();
  }

  _increaseQuantityHandler() {
    const figures = this._parentContainer.querySelectorAll('figure.cart-item');
    figures.forEach(figure => {
      const increaseBtn = figure.querySelector('.increase-btn');
      increaseBtn.addEventListener('click', () => {
        const priceEl = figure.querySelector('.price');
        const quantityEl = figure.querySelector('.quantity');

        const price = Number(priceEl.dataset.total.replace('$', ''));

        quantityEl.textContent = (Number(quantityEl.textContent) + 1);

        priceEl.dataset.total = price + Number(priceEl.textContent.replace('$', ''));

        this._setTotalPrice();
      })
    });
  }

  _decreaseQuantityHandler() {
    const figures = this._parentContainer.querySelectorAll('figure.cart-item');
    figures.forEach(figure => {
      const increaseBtn = figure.querySelector('.decrease-btn');
      increaseBtn.addEventListener('click', () => {
        const priceEl = figure.querySelector('.price');
        const quantityEl = figure.querySelector('.quantity');

        const price = Number(priceEl.dataset.total.replace('$', ''));

        if (quantityEl.textContent === '1') return;

        quantityEl.textContent = (Number(quantityEl.textContent) - 1);

        priceEl.dataset.total = price - Number(priceEl.textContent.replace('$', ''));

        this._setTotalPrice();
      })
    });
  }
};

export default new CartView();



