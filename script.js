const cards = Array.from(document.querySelectorAll("[data-card]"));
const openButton = document.querySelector("[data-open-letter]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const progress = document.querySelector("[data-progress]");
const pageCurrent = document.querySelector("[data-page-current]");
const pageTotal = document.querySelector("[data-page-total]");
const letterSection = document.querySelector("#carta");
let currentCard = 0;

pageTotal.textContent = cards.length;

function showCard(index) {
  currentCard = Math.min(Math.max(index, 0), cards.length - 1);

  cards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === currentCard);
  });

  pageCurrent.textContent = currentCard + 1;
  prevButton.disabled = currentCard === 0;
  nextButton.textContent = currentCard === cards.length - 1 ? "Reler" : "Pr\u00f3ximo";
  progress.style.width = `${((currentCard + 1) / cards.length) * 100}%`;
}

function floatHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), 900);
}

function celebrate(button) {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let index = 0; index < 5; index += 1) {
    window.setTimeout(() => {
      floatHeart(centerX + (index - 2) * 18, centerY - index * 4);
    }, index * 55);
  }
}

openButton.addEventListener("click", () => {
  letterSection.scrollIntoView({ behavior: "smooth" });
  celebrate(openButton);
});

prevButton.addEventListener("click", () => {
  showCard(currentCard - 1);
});

nextButton.addEventListener("click", () => {
  celebrate(nextButton);

  if (currentCard === cards.length - 1) {
    showCard(0);
    letterSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  showCard(currentCard + 1);
});

showCard(0);
