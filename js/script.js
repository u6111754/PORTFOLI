document.querySelectorAll(".work-item").forEach((item) => {
  const video = item.querySelector("video");

  if (!video) return;

  item.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

document.querySelectorAll(".work-item").forEach((item) => {
  const video = item.querySelector(".work-video");

  if (!video) return;

  item.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play().catch((error) => {
      console.log("Error reproduint el vídeo:", error);
    });
  });

  item.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

document.querySelectorAll(".work-item").forEach((item) => {
  const video = item.querySelector(".work-video");

  if (!video) return;

  item.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;

    const duration = 1200; // Durada en mil·lisegons
    let startTime = null;

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Moviment suau
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2;

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  });
});
