(function () {
  const modal = document.querySelector("[data-consult-modal]");
  const openButtons = document.querySelectorAll("[data-open-consult]");
  const closeButtons = document.querySelectorAll("[data-close-consult]");
  const qrImages = {
    wechat: "./assets/contact-wechat.jpg",
    account: "./assets/contact-account.jpg"
  };

  function loadCodes() {
    Object.entries(qrImages).forEach(([key, src]) => {
      const image = modal.querySelector(`[data-qr="${key}"]`);
      if (image && !image.getAttribute("src")) {
        image.setAttribute("src", src);
      }
    });
  }

  function clearCodes() {
    modal.querySelectorAll("[data-qr]").forEach((image) => {
      image.removeAttribute("src");
    });
  }

  function openModal() {
    loadCodes();
    modal.hidden = false;
    document.body.classList.add("modal-open");
    const close = modal.querySelector("[data-close-consult]");
    if (close) {
      close.focus();
    }
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    clearCodes();
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
})();
