document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('shopContainer');
  const products = JSON.parse(localStorage.getItem('products')) || [];

  container.innerHTML = products.map(product => `
    <div class="pro">
      <img src="${product.image}" alt="${product.name}">
      <div class="des">
        <span>${product.name}</span>
        <h4>R${product.price.toLocaleString()}</h4>
        <button class="normal" onclick="redirectToCart('${product.name}', ${product.price})">Checkout</button>
      </div>
    </div>
  `).join('');
});

// Redirect function
function redirectToCart(name, price) {
  const url = `/CapeKeys/Cart.html?product=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
  window.location.href = url;
}
