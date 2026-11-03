(() => {
  const form = document.querySelector(".join-form");
  const note = document.querySelector(".form-note");
  const revealItems = document.querySelectorAll(".session-list li, .place");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((el, index) => {
      if (el.matches(".session-list li")) {
        el.style.transitionDelay = `${index * 70}ms`;
      }
      observer.observe(el);
    });
  } else {
    revealItems.forEach((el) => el.classList.add("is-in"));
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(form).get("email");
    if (!email) return;

    note.textContent = "已记下。潮汐合适时我们会写信给你。";
    form.reset();
  });
})();
