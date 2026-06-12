const header = document.querySelector("[data-scroll-header]");
const revealItems = document.querySelectorAll(".reveal");
const reserveForm = document.querySelector(".reserve-form");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  },
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 180)}ms`;
  revealObserver.observe(item);
});

reserveForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = reserveForm.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Opening requested";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    reserveForm.reset();
  }, 2800);
});

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
