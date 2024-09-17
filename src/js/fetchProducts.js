import { renderProducts } from './renderProducts.js';
import { downloadListeners } from './downloadListeners.js';

export function fetchProducts() {
  fetch('https://veryfast.io/t/front_test_api.php')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const productsContainer = document.getElementById('supply-list');
      renderProducts(data.result.elements, productsContainer);
      downloadListeners();
    })
    .catch(error => console.error('Error fetching products:', error));
}
