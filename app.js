"use strict";

// 1. 여행지 필터
const filterButtons = document.querySelectorAll("[data-filter]");
const destinationCards = document.querySelectorAll(
  ".destination-list [data-category]",
);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    destinationCards.forEach((card) => {
      const category = card.dataset.category;

      card.hidden = selectedCategory !== "all" && category !== selectedCategory;
    });

    filterButtons.forEach((item) => {
      item.setAttribute("aria-pressed", "false");
    });

    button.setAttribute("aria-pressed", "true");
  });
});

// 2. FAQ 열기 / 닫기
const faqButtons = document.querySelectorAll(".faq-item button");

faqButtons.forEach((button) => {
  const answer = button.closest(".faq-item").querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
  });
});
document.querySelectorAll(".detail-button").forEach((button) => {
  button.addEventListener("click", () => {
    const detail = button.nextElementSibling;
    const isOpen = !detail.hidden;

    detail.hidden = isOpen;
    button.textContent = isOpen ? "자세히 보기" : "접기";
    button.setAttribute("aria-expanded", String(!isOpen));
  });
});
