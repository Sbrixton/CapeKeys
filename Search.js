document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.getElementById('searchIcon');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Toggle overlay
  searchIcon.addEventListener('click', () => {
    searchOverlay.style.display = 'flex';
    searchInput.focus();
  });

  // Close overlay on outside click or Escape
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.style.display = 'none';
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchOverlay.style.display = 'none';
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  });

  const products = JSON.parse(localStorage.getItem('products')) || [];

function renderResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = '<p>No matching products found.</p>';
    return;
  }

  searchResults.innerHTML = results.map(product => `
    <div class="search-item">
      <a href="${product.page}">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="search-info">
        <a href="${product.page}">
          <h4>${product.name}</h4>
        </a>
        <p>R${product.price.toLocaleString()}</p>
      </div>
    </div>
  `).join('');
}



  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderResults(filtered);
  });
});

// Reuse this from shopDisplay.js
function redirectToCart(name, price) {
  const url = `Cart.html?product=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const desktopSearchIcon = document.getElementById('searchIcon');
  const mobileSearchIcon = document.getElementById('mobileSearchIcon');
  const overlay = document.getElementById('searchOverlay');

  const showSearchOverlay = () => {
    overlay.style.display = 'block';
    document.getElementById('searchInput').focus();
  };

  if (desktopSearchIcon) {
    desktopSearchIcon.addEventListener('click', (e) => {
      e.preventDefault();
      showSearchOverlay();
    });
  }

  if (mobileSearchIcon) {
    mobileSearchIcon.addEventListener('click', (e) => {
      e.preventDefault();
      showSearchOverlay();
    });
  }
});
