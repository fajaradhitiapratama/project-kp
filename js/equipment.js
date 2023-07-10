var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
