export function overflowTextMore() {
  const overflowItemsRows = document.querySelectorAll(".overflow-text");

  if (overflowItemsRows.length) {
    overflowItemsRows.forEach(item => {
      const parent = item.closest("div");
      const nextElement = item.nextElementSibling;
      const isOverflow = item.textContent.split("\n").length >= 6;

      if (isOverflow) {
        const btnMore = document.createElement("button");
        btnMore.classList.add("btn");
        btnMore.classList.add("reviews__btn-more");
        btnMore.textContent = "Читать дальше";

        let isHide = true;

        parent.insertBefore(btnMore, nextElement);

        btnMore.addEventListener("click", () => {
          if (isHide) {
            isHide = false;
            item.style.display = "block";
            btnMore.textContent = "Скрыть";
          } else {
            isHide = true;
            item.style.display = "-webkit-box";
            btnMore.textContent = "Читать дальше";
          }
        });
      }
    });
  }
}