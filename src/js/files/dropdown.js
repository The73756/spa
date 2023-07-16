export default function dropdown() {
  const buttonsDropdown = document.querySelectorAll(".dropdown__btn");
  const dropdowns = document.querySelectorAll(".dropdown");

  if (buttonsDropdown.length) {
    buttonsDropdown.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // e.stopPropagation();

        const currentDropdown = btn.closest(".dropdown");
        const dropdownItem = currentDropdown.querySelector(".dropdown__item");

        dropdownItem.addEventListener("click", (e) => e.stopPropagation());
        document.addEventListener("click", handlerDocument);

        if (currentDropdown.classList.contains("open")) {
          closeDrodpown(currentDropdown);
        } else {
          dropdowns.forEach((d) => d.classList.remove("open"));
          currentDropdown.classList.add("open");
        }
      });
    });

    function closeDrodpown(currentDropdown) {
      currentDropdown.classList.remove("open");
      return document.removeEventListener("click", handlerDocument);
    }

    function handlerDocument(e) {
      if (!e.target.classList.contains("dropdown__btn")) {
        const currentDropdown = document.querySelector(".dropdown.open");

        currentDropdown.classList.remove("open");
        return document.removeEventListener("click", handlerDocument);
      }
    }
  }
}
