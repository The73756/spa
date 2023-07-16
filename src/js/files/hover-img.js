export default function hoverImg() {
  const itemsImg = document.querySelectorAll(".item-hover-img");
  const images = document.querySelectorAll("[data-img]");

  if (itemsImg.length && window.matchMedia("(min-width: 768px)").matches) {
    itemsImg.forEach((item) => {
      item.addEventListener("mouseover", () => {
        const idImg = item.dataset.img;
        const currentImg = document.querySelector(`img[data-img="${idImg}"]`);

        images.forEach(img => img.classList.remove("active"));
        currentImg.classList.add("active");
      });
    });
  }
}
