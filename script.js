document.querySelectorAll(".link-btn").forEach(btn => {
    btn.addEventListener("touchstart", () => {
      btn.style.opacity = "0.85";
    });
  
    btn.addEventListener("touchend", () => {
      btn.style.opacity = "1";
    });
  });
  