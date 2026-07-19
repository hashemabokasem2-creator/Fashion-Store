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

  updateSliderAndInput();

  rangeInput.addEventListener("input", updateSliderAndInput);
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
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  element232.textContent = Math.floor(progress * target232);

  if (progress < 1) {
    requestAnimationFrame(updateCounter232);
  }
}

function updateCounter521(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  element521.textContent = Math.floor(progress * target521);

  if (progress < 1) {
    requestAnimationFrame(updateCounter521);
  }
}

function updateCounter1453(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  element1453.textContent = Math.floor(progress * target1453);

  if (progress < 1) {
    requestAnimationFrame(updateCounter1453);
  }
}

function updateCounter32(currentTime) {
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
  container.style.backgroundImage = `url('${mainImage.src}')`;
}
updateBackground();

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

  btnIncrease.addEventListener("click", function () {
    let currentValue = parseInt(input.value) || 1;
    input.value = currentValue + 1;
  });

  btnDecrease.addEventListener("click", function () {
    let currentValue = parseInt(input.value) || 1;
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
  });
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

  const container = document.querySelector(".star-rating-container");
  container.addEventListener("mouseleave", function () {
    highlightStars(selectedRating);
  });

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
