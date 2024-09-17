export function createProductMarkup(product) {
  let specialClass = 'supply-list-item-amount-wrap';
  const productName = product.name_display.split(' ').slice(0, 3).join(' ');

  if (product.is_best) {
    specialClass += ' supply-list-item__best';
  }

  if (product.price_key === '50%') {
    specialClass += ' supply-list-item__product_sale';
  }

  return `
      <li class="supply-list-item">
      <div class="${specialClass}">
      <p class="supply-list-item-amount">$${product.amount}<span class="amount-wrap">/per year</span></p>
      </div>
      <p class="supply-list-item-product">${productName}</p>
      <p class="supply-list-item-license">${product.license_name}</p>
      <button class="download-btn" data-link="${product.link}">Download
      <div class="svg-wrapper">
      <svg class="svg-icon" width="18" height="18" aria-label="icon-download">
      <use href="./img/sprite.svg#icon-download"/>
      </svg>
      </div>
      </button>
      </li>
  `;
}

export function renderProducts(products, productsContainer) {
  const productMarkup = products
    .map(product => createProductMarkup(product))
    .join('');
  productsContainer.innerHTML = productMarkup;
}
