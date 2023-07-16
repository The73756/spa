export default function tab() {
  const buttonsTab = document.querySelectorAll(".btn-tab");

  if (buttonsTab.length) {
    buttonsTab.forEach((btn) => {
      btn.addEventListener("click", () => {
        const containerTab = btn.closest(".container-tab");
        const tabs = containerTab.querySelectorAll(".tab");
        const buttons = containerTab.querySelectorAll(".btn-tab");
        const idTab = btn.dataset.tab;
        const currentTab = containerTab.querySelector(`.tab[data-tab="${idTab}"]`);

        buttons.forEach((btn) => btn.classList.remove("active"));
        tabs.forEach((tab) => tab.classList.remove("active"));

        btn.classList.add("active");
        currentTab.classList.add("active");
      });
    });
  }
}
