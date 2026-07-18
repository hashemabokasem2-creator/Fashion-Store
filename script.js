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
