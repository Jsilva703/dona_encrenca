const particles = document.querySelector(".particles");

for (let index = 0; index < 54; index += 1) {
  const particle = document.createElement("span");
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDelay = `${Math.random() * -18}s`;
  particle.style.animationDuration = `${14 + Math.random() * 18}s`;
  particle.style.setProperty("--x-drift", `${-44 + Math.random() * 88}px`);
  particles.appendChild(particle);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

function floatHeart(button) {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let index = 0; index < 7; index += 1) {
    window.setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "heart";
      heart.style.left = `${centerX + (index - 3) * 18}px`;
      heart.style.top = `${centerY - index * 4}px`;
      document.body.appendChild(heart);
      window.setTimeout(() => heart.remove(), 900);
    }, index * 48);
  }
}

document.querySelector("[data-scroll-letter]").addEventListener("click", (event) => {
  floatHeart(event.currentTarget);
  document.querySelector("#cartinha").scrollIntoView({ behavior: "smooth" });
});
