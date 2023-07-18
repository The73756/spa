import Swiper, { Navigation, Scrollbar } from "swiper";

Swiper.use([Navigation, Scrollbar]);

export default function sliders() {
  const aboutSlider = document.querySelector(".about__slider");

  if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      speed: 700,
      simulateTouch: false,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
      initialSlide: 1,
      navigation: {
        nextEl: " .about__slider-btn--next",
        prevEl: " .about__slider-btn--prev",
      },
      breakpoints: {
        993: {
          spaceBetween: 16,
        },
      },
    });
  }

  const specialistsSlider = document.querySelector(".specialists__slider");

  if (specialistsSlider) {
    const swiper = new Swiper(specialistsSlider, {
      speed: 700,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      scrollbar: {
        el: ".specialists__slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        993: {
          spaceBetween: 16,
        },
      },
    });
  }

  const productsSliders = document.querySelectorAll(".products__slider");
  if (productsSliders.length) {
    productsSliders.forEach((s) => {
      const scrollbar = s.querySelector(".slider-scrollbar");
      const swiper = new Swiper(s, {
        speed: 700,
        grabCursor: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        scrollbar: {
          el: scrollbar,
          draggable: true,
        },
        breakpoints: {
          993: {
            spaceBetween: 16,
          },
        },
      });
    });
  }

  const reviewsSlider = document.querySelector(".reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 700,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: " .reviews__slider-btn--next",
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        577: {
          slidesPerView: 2,
        },
      },
    });
  }

  const resultsSlider = document.querySelector(".results__slider");

  if (resultsSlider) {
    const swiper = new Swiper(resultsSlider, {
      speed: 700,
      simulateTouch: false,
      spaceBetween: 6,
      initialSlide: 2,
      navigation: {
        prevEl: " .results__slider-btn--prev",
        nextEl: " .results__slider-btn--next",
      },
      centeredSlides: true,
      breakpoints: {
        1100: {
          spaceBetween: 16,
        },
        577: {
          centeredSlides: false,
        },
      },
    });
  }

  const gallerySlider = document.querySelector(".gallery__slider");

  if (gallerySlider) {
    const swiper = new Swiper(gallerySlider, {
      speed: 700,
      simulateTouch: false,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
      initialSlide: 1,
      navigation: {
        nextEl: " .gallery__slider-btn--next",
        prevEl: " .gallery__slider-btn--prev",
      },
      breakpoints: {
        993: {
          spaceBetween: 16,
        },
      },
    });
  }
}
