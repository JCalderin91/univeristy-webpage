$(document).ready(function () {
  $(".owl-carousel.team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".owl-carousel.testimonial-videos").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    margin: 10,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});

// Navbar dynamic color functionality
const $header = document.querySelector("#header");
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $header.classList.remove("dark");
    } else {
      $header.classList.add("dark");
    }
  });
}

const options = {
  root: null,
  rootMargin: "-18px",
  threshold: 0.1,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector("#hero"));
// Navbar dynamic color functionality end
