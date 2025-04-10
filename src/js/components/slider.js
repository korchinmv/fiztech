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

// const clientsSwiper = new Swiper(".clients__slider", {
//   slidesPerView: 2,
//   spaceBetween: 16,
//   navigation: {
//     nextEl: ".clients__slider-controls-next",
//     prevEl: ".clients__slider-controls-prev",
//   },
//   pagination: {
//     el: ".clients__pagination",
//     type: "progressbar",
//   },
//   breakpoints: {
//     // when window width is >= 990px
//     990: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//     },

//     630: {
//       slidesPerView: 3,
//       spaceBetween: 24,
//     },
//   },
// });

// const productsHitsSwiper = new Swiper("#products-hits", {
//   slidesPerView: 1.1,
//   spaceBetween: 24,
//   navigation: {
//     prevEl: ".products-hits-prev",
//     nextEl: ".products-hits-next",
//   },
//   pagination: {
//     el: ".products-hits-pagination",
//     type: "progressbar",
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 24,
//     },
//     990: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//   },
// });

// const productsHitsCatalogSwiper = new Swiper("#products-hits-catalog", {
//   slidesPerView: 1.1,
//   spaceBetween: 24,
//   navigation: {
//     prevEl: ".products-hits-prev",
//     nextEl: ".products-hits-next",
//   },
//   pagination: {
//     el: ".products-hits-pagination",
//     type: "progressbar",
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 16,
//     },
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//   },
// });

// const productsMonthSwiper = new Swiper("#products-month", {
//   slidesPerView: 1.1,
//   spaceBetween: 16,
//   navigation: {
//     prevEl: ".products-month-prev",
//     nextEl: ".products-month-next",
//   },
//   pagination: {
//     el: ".products-month-pagination",
//     type: "progressbar",
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 24,
//     },
//     990: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//   },
// });

// const articlesSwiper = new Swiper("#articles", {
//   slidesPerView: 1.1,
//   spaceBetween: 16,
//   navigation: {
//     prevEl: ".articles-prev",
//     nextEl: ".articles-next",
//   },
//   pagination: {
//     el: ".articles-pagination",
//     type: "progressbar",
//   },
//   breakpoints: {
//     1140: {
//       slidesPerView: 2,
//       spaceBetween: 24,
//     },
//   },
// });
