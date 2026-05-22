const cards = Array.from(document.querySelectorAll("[data-card]"));
const openButton = document.querySelector("[data-open-letter]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const progress = document.querySelector("[data-progress]");
let currentCard = 0;

function showCard(index) {
  currentCard = Math.min(Math.max(index, 0), cards.length - 1);

  cards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === currentCard);
  });

  prevButton.disabled = currentCard === 0;
  nextButton.textContent = currentCard === cards.length - 1 ? "Reler" : "Próximo";
  progress.style.width = `${((currentCard + 1) / cards.length) * 100}%`;
}

openButton.addEventListener("click", () => {
  document.querySelector("#carta").scrollIntoView({ behavior: "smooth" });
});

prevButton.addEventListener("click", () => {
  showCard(currentCard - 1);
});

nextButton.addEventListener("click", () => {
  if (currentCard === cards.length - 1) {
    showCard(0);
    document.querySelector("#carta").scrollIntoView({ behavior: "smooth" });
    return;
  }

  showCard(currentCard + 1);
});

showCard(0);
