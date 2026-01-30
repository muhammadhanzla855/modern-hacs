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

  function openContact() {
    const phone = "19092129545";
    window.location.href = `whatsapp://send?phone=${phone}`;
    setTimeout(() => {
      window.location.href = `tel:+${phone}`;
    }, 1500);
  }

  function openWhatsApp() {
    const phone = "19092129545";
    const message = "Hello, I need HVAC services";

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Direct app open (mobile)
      window.location.href = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;
    } else {
      // Desktop fallback (most reliable)
      window.open(
        `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  }
