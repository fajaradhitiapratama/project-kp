// slide
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
// marketing
var swiper = new Swiper(".slide-content-marketing", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//support
// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper-support"),
  carousel = document.querySelector(".carousel-support"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button-support");
let imageIndex = 0,
  intervalId;
const autoSlide = () => {
  intervalId = setInterval(() => slideImage(++imageIndex), 2500);
};
autoSlide();
const slideImage = () => {
  if (imageIndex > 6) {
    imageIndex = 0;
  } else if (imageIndex < 0) {
    imageIndex = 6;
  }

  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};
const updateClick = (e) => {
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  autoSlide();
};
buttons.forEach((button) => button.addEventListener("click", updateClick));
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);
