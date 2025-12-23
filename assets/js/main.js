
const productList = document.getElementById("productList");

function renderProducts() {
  productList.innerHTML = "";

  const products = JSON.parse(localStorage.getItem("products")) || [];

  if (products.length === 0) return;

  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3 product-card-wrapper";
    col.setAttribute("data-aos", "fade-up");

    col.innerHTML = `
      <div class="card product-card h-70">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="mb-2 text-muted">Available now</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <strong class="price">₦${product.price}</strong>
            <a href="checkout.html" class="btn btn-primary btn-sm">Buy</a>
          </div>
        </div>
      </div>
    `;

    productList.appendChild(col);
  });

  AOS.refresh();
}

renderProducts();

window.addEventListener("storage", function(e) {
  if (e.key === "products") {
    renderProducts();
  }
});
