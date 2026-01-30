fetch("./header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    const mobileToggle = document.getElementById("mobileToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileToggle || !mobileMenu) return;

    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      mobileToggle.textContent = isOpen ? "✕" : "☰";
    });
  })
  .catch(err => console.error("Header load failed:", err));
