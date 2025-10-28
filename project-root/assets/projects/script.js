// Simple interactions: dynamic year, basic form handling
document.addEventListener("DOMContentLoaded", function () {
  // year
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;

  // basic form
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");
  const clearBtn = document.getElementById("clearBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // extract values
    const fd = new FormData(form);
    const name = fd.get("name").trim();
    const email = fd.get("email").trim();
    const message = fd.get("message").trim();

    if (!name || !email || !message) {
      msg.textContent = "Mohon lengkapi semua kolom.";
      return;
    }

    // Simple validation for e-mail
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "Format email tidak valid.";
      return;
    }

    // For demo: simulate success (replace with real AJAX/fetch in production)
    msg.textContent = "Terima kasih! Pesanmu telah dikirim (demo).";
    form.reset();
  });

  clearBtn.addEventListener("click", function () {
    form.reset();
    msg.textContent = "";
  });
});