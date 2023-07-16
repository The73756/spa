export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");
  const burgerMenu = document.querySelector("#burger-menu");
  const burgerClose = document.querySelector("#burger-close");
  const overlay = document.querySelector("#burger-overlay");

  if (burgerBtn) {
    burgerClose.addEventListener("click", handleClose);

    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      burgerClose.classList.add("active");

      overlay.classList.add("active");
      overlay.addEventListener("click", handleClose);

      burgerBtn.classList.toggle("active");
      burgerMenu.classList.toggle("open");
      document.body.classList.toggle("body-hidden");

      burgerMenu.addEventListener("click", (e) => e.stopPropagation());
    });

    function handleClose() {
      burgerBtn.classList.remove("active");
      burgerMenu.classList.remove("open");
      document.body.classList.remove("body-hidden");
      overlay.classList.remove("active");
      burgerClose.classList.remove("active");

      return overlay.removeEventListener("click", handleClose);
    }
  }
}