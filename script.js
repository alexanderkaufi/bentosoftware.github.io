document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".project-card").forEach((card) => {
  const link = card.querySelector("a");
  if (!link) {
    card.style.display = "none";
    return;
  }

  const href = link.getAttribute("href")?.trim();
  if (!href || href === "#" || href.toLowerCase() === "javascript:void(0)") {
    card.style.display = "none";
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
