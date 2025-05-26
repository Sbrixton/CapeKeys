document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Load products from localStorage
  const products = JSON.parse(localStorage.getItem('products')) || [];

  // Function to render search results
  function renderResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No matching products found.</p>';
      return;
    }

    searchResults.innerHTML = results.map(product => `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" width="150">
        <h4>${product.name}</h4>
        <p>R${product.price.toLocaleString()}</p>
      </div>
    `).join('');
  }

  // Live search as user types
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      searchResults.innerHTML = ''; // Clear if empty
      return;
    }

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );

    renderResults(filtered);
  });

  // Optional: also search on button click
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );

    renderResults(filtered);
  });
});
