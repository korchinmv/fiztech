import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay]);

const heroSwiper = new Swiper(".hero-slider__slider", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".hero-slider__pagination",
    clickable: true,
    type: "bullets",
  },
});

const productsSliderCol1 = new Swiper("#products-col-1", {
  slidesPerView: 1.1,
  enabled: true,
  spaceBetween: 16,
  breakpoints: {
    480: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const productsSliderCol2 = new Swiper("#products-col-2", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  enabled: true,
  breakpoints: {
    480: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const productsSliderCol3 = new Swiper("#products-col-3", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  enabled: true,
  breakpoints: {
    480: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const productsSliderCol4 = new Swiper("#products-col-4", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  enabled: true,
  breakpoints: {
    480: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const productsSliderCol5 = new Swiper("#products-col-5", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  enabled: true,
  breakpoints: {
    480: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});
