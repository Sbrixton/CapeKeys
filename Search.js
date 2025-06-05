document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.getElementById('searchIcon');
  const mobileSearchIcon = document.getElementById('mobileSearchIcon');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Toggle overlay visibility
  const showOverlay = () => {
    searchOverlay.style.display = 'flex';
    searchInput.focus();
  };

  const hideOverlay = () => {
    searchOverlay.style.display = 'none';
    searchInput.value = '';
    searchResults.innerHTML = '';
  };

  if (searchIcon) {
    searchIcon.addEventListener('click', showOverlay);
  }

  if (mobileSearchIcon) {
    mobileSearchIcon.addEventListener('click', showOverlay);
  }

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      hideOverlay();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideOverlay();
    }
  });

  // Load products from localStorage
  const products = JSON.parse(localStorage.getItem('products')) || [];

  const renderResults = (results) => {
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No matching products found.</p>';
      return;
    }

    searchResults.innerHTML = results.map(product => {
      const imgSrc = product.image.startsWith('/') ? product.image : '/CapeKeys/' + product.image;
      const pageHref = product.page.startsWith('/') ? product.page : '/CapeKeys/' + product.page;

      return `
        <div class="search-item">
          <a href="${pageHref}">
            <img src="${imgSrc}" alt="${product.name}">
          </a>
          <div class="search-info">
            <a href="${pageHref}">
              <h4>${product.name}</h4>
            </a>
            <p>R${product.price.toLocaleString()}</p>
          </div>
        </div>
      `;
    }).join('');
  };

  // Live search
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = products.filter(product => product.name.toLowerCase().includes(query));
    renderResults(filtered);
  });
});

// Optional cart redirect (if still used)
function redirectToCart(name, price) {
  const url = `Cart.html?product=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
  window.location.href = url;
}
