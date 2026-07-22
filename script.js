document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const filterItems = document.querySelectorAll(".filter-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
      this.classList.add("active-filter");

      const filterValue = this.getAttribute("data-filter");

      filterItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || itemCategory === filterValue) {
          item.classList.remove("d-none");
          setTimeout(() => {
            item.classList.remove("hide-item");
          }, 20);
        } else {
          item.classList.add("hide-item");
          setTimeout(() => {
            item.classList.add("d-none");
          }, 400);
        }
      });
    });
  });
});

const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    backToTopBtn.classList.add("show");
    backToTopBtn.style.pointerEvents = "auto";
  } else {
    backToTopBtn.classList.remove("show");
    backToTopBtn.style.pointerEvents = "none";
  }
});

backToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("priceRange");

  const maxInput = document.getElementById("maxInput");

  function updateSliderAndInput() {
    if (!rangeInput || !maxInput) return;

    const min = rangeInput.min || 0;
    const max = rangeInput.max || 1000;
    const value = rangeInput.value;
    const percentage = ((value - min) / (max - min)) * 100;
    rangeInput.style.backgroundSize = `${percentage}% 100%`;

    maxInput.value = value;
  }

  if (rangeInput && maxInput) {
    updateSliderAndInput();
    rangeInput.addEventListener("input", updateSliderAndInput);
  }
});

const element232 = document.getElementById("counter-232");
const element521 = document.getElementById("counter-521");
const element1453 = document.getElementById("counter-1453");
const element32 = document.getElementById("counter-32");

const target232 = 232;
const target521 = 521;
const target1453 = 1453;
const target32 = 32;

const duration = 1500;
const startTime = performance.now();

function updateCounter232(currentTime) {
  if (!element32) return;

  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  element232.textContent = Math.floor(progress * target232);

  if (progress < 1) {
    requestAnimationFrame(updateCounter232);
  }
}

function updateCounter521(currentTime) {
  if (!element521) return;
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  element521.textContent = Math.floor(progress * target521);

  if (progress < 1) {
    requestAnimationFrame(updateCounter521);
  }
}

function updateCounter1453(currentTime) {
  if (!element1453) return;
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  element1453.textContent = Math.floor(progress * target1453);

  if (progress < 1) {
    requestAnimationFrame(updateCounter1453);
  }
}

function updateCounter32(currentTime) {
  if (!element32) return;
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  element32.textContent = Math.floor(progress * target32);

  if (progress < 1) {
    requestAnimationFrame(updateCounter32);
  }
}

requestAnimationFrame(updateCounter232);
requestAnimationFrame(updateCounter521);
requestAnimationFrame(updateCounter1453);
requestAnimationFrame(updateCounter32);

const container = document.getElementById("magnifierContainer");
const mainImage = document.getElementById("mainImage");

function updateBackground() {
  if (!container || !mainImage) return;
  container.style.backgroundImage = `url('${mainImage.src}')`;
}
updateBackground();

if (container) {
  container.addEventListener("mousemove", function (e) {
    if (e.target.closest(".nav-btn")) {
      container.style.backgroundSize = "100%";
      mainImage.style.opacity = "1";
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    container.style.backgroundSize = "250%";
    container.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    mainImage.style.opacity = "0";
  });

  container.addEventListener("mouseleave", function () {
    container.style.backgroundSize = "100%";
    mainImage.style.opacity = "1";
  });
}

function changeImage(imgElement) {
  mainImage.src = imgElement.src;

  updateBackground();
  container.style.backgroundSize = "100%";
  mainImage.style.opacity = "1";

  document.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  imgElement.classList.add("active");
}
function nextImage(e) {
  e.stopPropagation();
  const thumbs = Array.from(document.querySelectorAll(".thumb"));
  const activeIndex = thumbs.findIndex((thumb) =>
    thumb.classList.contains("active"),
  );

  let nextIndex = activeIndex + 1;
  if (nextIndex >= thumbs.length) {
    nextIndex = 0;
  }

  changeImage(thumbs[nextIndex]);
}

function prevImage(e) {
  e.stopPropagation();
  const thumbs = Array.from(document.querySelectorAll(".thumb"));
  const activeIndex = thumbs.findIndex((thumb) =>
    thumb.classList.contains("active"),
  );

  let prevIndex = activeIndex - 1;
  if (prevIndex < 0) {
    prevIndex = thumbs.length - 1;
  }

  changeImage(thumbs[prevIndex]);
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("quantity-input");
  const btnDecrease = document.getElementById("btn-decrease");
  const btnIncrease = document.getElementById("btn-increase");

  if (btnIncrease) {
    btnIncrease.addEventListener("click", function () {
      let currentValue = parseInt(input.value) || 1;
      input.value = currentValue + 1;
    });
  }

  if (btnDecrease) {
    btnDecrease.addEventListener("click", function () {
      let currentValue = parseInt(input.value) || 1;
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(
    ".star-rating-container .custom-star-icon",
  );
  let selectedRating = 0;

  stars.forEach((star) => {
    star.addEventListener("mouseenter", function () {
      const currentHoverValue = parseInt(this.getAttribute("data-value"));
      hoverStars(currentHoverValue);
    });
  });

  if (container) {
    const container = document.querySelector(".star-rating-container");
    container.addEventListener("mouseleave", function () {
      highlightStars(selectedRating);
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      selectedRating = parseInt(this.getAttribute("data-value"));
      highlightStars(selectedRating);
    });
  });

  function highlightStars(count) {
    stars.forEach((star) => {
      const starValue = parseInt(star.getAttribute("data-value"));
      if (starValue <= count) {
        star.classList.remove("bi-star");
        star.classList.add("bi-star-fill");
      } else {
        star.classList.remove("bi-star-fill");
        star.classList.add("bi-star");
      }
    });
  }

  function hoverStars(hoverCount) {
    stars.forEach((star) => {
      const starValue = parseInt(star.getAttribute("data-value"));
      if (starValue <= selectedRating) {
        return;
      }
      if (starValue <= hoverCount) {
        star.classList.remove("bi-star");
        star.classList.add("bi-star-fill");
      } else {
        star.classList.remove("bi-star-fill");
        star.classList.add("bi-star");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cart-item").forEach((item) => {
    const minusBtn = item.querySelector(".btn-minus");
    const plusBtn = item.querySelector(".btn-plus");
    const quantityInput = item.querySelector(".quantity-input");
    const totalSpan = item.querySelector(".item-total");
    const price = parseFloat(item.getAttribute("data-price"));

    function updateTotal(quantity) {
      const total = price * quantity;
      totalSpan.textContent = `$${total.toFixed(2)}`;
    }

    minusBtn.addEventListener("click", () => {
      let currentQty = parseInt(quantityInput.value);
      if (currentQty > 1) {
        currentQty--;
        quantityInput.value = currentQty;
        updateTotal(currentQty);
      }
    });

    plusBtn.addEventListener("click", () => {
      let currentQty = parseInt(quantityInput.value);
      currentQty++;
      quantityInput.value = currentQty;
      updateTotal(currentQty);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 700,
    once: true,
    offset: 100,
  });
});

// بداية أكواد سلة المنتجات

let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function saveCartToStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function updateCartUI() {
  const cartContainer = document.getElementById("cart-items-container");

  const emptyCartView = document.getElementById("empty-cart-view");

  if (cart.length === 0) {
    if (cartContainer) cartContainer.innerHTML = "";

    if (emptyCartView) emptyCartView.classList.remove("d-none");

    const subtotalEl = document.getElementById("cart-subtotal");
    if (subtotalEl) subtotalEl.innerText = "$0.00";

    const taxEl = document.getElementById("cart-tax");
    if (taxEl) taxEl.innerText = "$0.00";

    const totalEl = document.getElementById("cart-total");
    if (totalEl) totalEl.innerText = "$0.00";

    return;
  }

  if (emptyCartView) emptyCartView.classList.add("d-none");

  let itemsHTML = "";
  let subtotal = 0;

  cart.forEach((product) => {
    const itemTotal = product.price * product.quantity;
    subtotal += itemTotal;

    itemsHTML += `
      <div class="cart-item row align-items-center gx-1 py-3 border-bottom mb-3" data-id="${product.id}">
        <div class="col-md-4 col-12 d-flex align-items-center px-3 mb-2 mb-md-0">
          <img src="${product.image}" alt="${product.title}" class="img-fluid rounded me-2 cart-item-img" style="max-width: 60px;" />
          <div class="text-truncate">
            <h6 class="mb-0 text-truncate product-title small fw-bold">${product.title}</h6>
            <p class="text-muted small mb-0" style="font-size: 0.75rem;">Color: ${product.color} &nbsp; Size: ${product.size}</p>
          </div>
        </div>
        <div class="col-md-2 col-3 text-md-center">
          <span class="d-md-none text-muted small d-block" style="font-size: 0.7rem;">Price:</span>
          <span class="product-price fw-bold small">$${product.price.toFixed(2)}</span>
        </div>
        <div class="col-md-2 col-4 d-flex mx-3 justify-content-center">
          <div class="input-group quantity-group rounded input-group-sm">
            <button class="btn btn-minus px-2" type="button" onclick="decreaseQuantity(${product.id})">-</button>
            <input type="text" class="form-control text-center quantity-input px-1" value="${product.quantity}" readonly />
            <button class="btn btn-plus px-2" type="button" onclick="increaseQuantity(${product.id})">+</button>
          </div>
        </div>
        <div class="col-md-2 col-3 text-md-center text-center">
          <span class="d-md-none text-muted small d-block" style="font-size: 0.7rem;">Total:</span>
          <span class="item-total fw-bold small">$${itemTotal.toFixed(2)}</span>
        </div>
        <div class="col-md-1 col-2 text-end">
          <button class="btn btn-link p-0 text-danger btn-remove ms-auto" type="button" onclick="removeItem(${product.id})">
            <i class="bi bi-trash fs-6"></i>
          </button>
        </div>
      </div>
    `;
  });

  if (cartContainer) cartContainer.innerHTML = itemsHTML;

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const subtotalEl = document.getElementById("cart-subtotal");
  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;

  const taxEl = document.getElementById("cart-tax");
  if (taxEl) taxEl.innerText = `$${tax.toFixed(2)}`;

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;

  // document.getElementById("cart-subtotal").innerText =
  //   `$${subtotal.toFixed(2)}`;
  // document.getElementById("cart-tax").innerText = `$${tax.toFixed(2)}`;
  // document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
});

function increaseQuantity(id) {
  const item = cart.find((product) => product.id === id);
  if (item) {
    item.quantity++;
    saveAndReloadUI();
  }
  updateNavCartUI();
}

function decreaseQuantity(id) {
  const item = cart.find((product) => product.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
    saveAndReloadUI();
  }
  updateNavCartUI();
}

function removeItem(id) {
  cart = cart.filter((product) => product.id !== id);
  saveAndReloadUI();
  updateNavCartUI();
}

function clearAllCart() {
  cart = [];
  saveAndReloadUI();
  const modalElement = document.getElementById("clearCartModal");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
  updateNavCartUI();
}

function saveAndReloadUI() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  updateCartUI();
}

const clearCartBtn = document.querySelector(".btn-clear");
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    if (cart.length > 0) {
      const clearModal = new bootstrap.Modal(
        document.getElementById("clearCartModal"),
      );
      clearModal.show();
    }
  });
}

const confirmClearBtn = document.getElementById("confirm-clear-cart");
if (confirmClearBtn) {
  confirmClearBtn.addEventListener("click", clearAllCart);
}

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const btn = event.currentTarget;
    const productData = {
      id: Number(btn.dataset.id),
      title: btn.dataset.title,
      price: parseFloat(btn.dataset.price),
      image: btn.dataset.image,
      color: btn.dataset.color || "Default",
      size: btn.dataset.size || "Standard",
      quantity: 1,
    };

    addProductToCart(productData);
  });
});

function addProductToCart(newProduct) {
  const existingProduct = cart.find((item) => item.id === newProduct.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(newProduct);
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));

  updateNavCartUI();

  if (typeof updateCartUI === "function") {
    updateCartUI();
  }
  showAddToCartToast();
}

function showAddToCartToast() {
  const toastElement = document.getElementById("addToCartToast");
  let toastInstance = bootstrap.Toast.getInstance(toastElement);
  if (toastElement) {
    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();
  } else {
    console.log("لم نجد عنصر الـ HTML الخاص بالـ Toast في هذه الصفحة!");
  }
}

function updateNavCartUI() {
  const badgeEl = document.getElementById("nav-cart-badge");
  const titleEl = document.getElementById("nav-cart-title");
  const itemsContainer = document.getElementById("nav-cart-items");
  const totalEl = document.getElementById("nav-cart-total");

  if (!itemsContainer) return;

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (badgeEl) badgeEl.innerText = totalCount;
  if (titleEl) titleEl.innerText = `Shopping Cart (${totalCount})`;
  if (totalEl) totalEl.innerText = `$${totalPrice.toFixed(2)}`;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="text-center py-3 text-muted">
        <i class="bi bi-cart-x fs-3 d-block mb-1"></i>
        <span class="small">Your cart is empty</span>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="d-flex align-items-center gap-3">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="rounded-3 cart-item-img border p-1"
          style="width: 50px; height: 50px; object-fit: cover"
        />
        <div>
          <h6 class="mb-1 small cart-title">${item.title}</h6>
          <span class="text-muted small">${item.quantity} × $${Number(item.price).toFixed(2)}</span>
        </div>
      </div>
    `,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavCartUI();
});

function updateCheckoutUI() {
  const container = document.getElementById("checkout-products-list");
  const subtotalEl = document.getElementById("checkout-subtotal");
  const totalEl = document.getElementById("checkout-total");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 text-muted">
        <i class="bi bi-cart-x fs-2 d-block mb-2"></i>
        <p class="mb-0 fw-medium">Your cart is empty</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "$0.00";
    if (totalEl) totalEl.textContent = "$0.00";
    return;
  }

  const shippingPrice = 9.99;
  const taxPrice = 21.0;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + shippingPrice + taxPrice;

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="d-flex align-items-center mb-3">
      <img
        src="${item.image}"
        alt="${item.title}"
        class="rounded me-3 checkout-product-img"
      />
      <div>
        <h6 class="mb-1 checkout-summary-title">
          ${item.title}
        </h6>
        ${
          item.color || item.size
            ? `
          <small class="text-muted d-block mb-1">
            ${item.color ? `Color: ${item.color}` : ""} 
            ${item.color && item.size ? " | " : ""} 
            ${item.size ? `Size: ${item.size}` : ""}
          </small>
        `
            : ""
        }
        <span class="small fw-bold text-muted">${item.quantity} × </span>
        <span class="small fw-bold checkout-summary-title">$${Number(item.price).toFixed(2)}</span>
      </div>
    </div>
  `,
    )
    .join("");

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavCartUI();

  if (typeof updateCheckoutUI === "function") {
    updateCheckoutUI();
  }
});
