// slide
var swiper1;
function initSwiper1() {
  swiper1 = new Swiper(".slide-container-mobil", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
}
function updateSwiper1() {
  if (window.matchMedia("(max-width: 431px)").matches) {
    swiper1.params.slidesPerView = 2;
  } else {
    swiper1.params.slidesPerView = 3;
  }
  swiper1.update();
}
initSwiper1();
window.addEventListener("resize", function () {
  updateSwiper1();
});
updateSwiper1();

// certif
swiper2 = new Swiper(".slide-container-certif", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centerSlide: true,
  fade: true,
  grabCursor: true,
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

// marketing
var swiper;
function initSwiper() {
  swiper = new Swiper(".slide-content-marketing", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
}
function updateSwiper() {
  if (window.matchMedia("(max-width: 450px)").matches) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 3;
  }
  swiper.update();
}
initSwiper();
window.addEventListener("resize", function () {
  updateSwiper();
});
updateSwiper();

//support
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

// chassis
var swiper3 = new Swiper(".slide-container-chassis", {
  slidesPerView: 5,
  spaceBetween: 20,
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
    nextEl: ".swiper-button-next-chassis",
    prevEl: ".swiper-button-prev-chassis",
  },
});
