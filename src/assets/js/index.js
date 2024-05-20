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
  const owlTestimonial = $(".owl-carousel.testimonial-videos").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".navbar-toggler").click(() => {
    if (!$("#header").hasClass("dark")) {
      $("#header").addClass("dark");
    } else {
      if (!$("#header").hasClass("scroll")) {
        $("#header").removeClass("dark");
      }
    }
  });

  owlTestimonial.on("changed.owl.carousel", function (event) {
    $(".testimonial__image").css("display", "block");
    $(".testimonial__video").css("display", "none");
    $(".testimonial__button").each(function () {
      $(this).css("display", "block");
    });
    $(".testimonial__video").each(function () {
      this.pause();
    });
  });

  $(".testimonial__button").click((ev) => {
    $(".owl-carousel.testimonial-videos").trigger("stop.owl.autoplay");
    const target = $(ev.currentTarget).attr("data-value");
    const $target = $(`[data-target="${target}"]`);
    $($target).find(".testimonial__image").css("display", "none");
    $($target).find(".testimonial__video").css("display", "block");
    $($target)
      .find(".testimonial__video")
      .each(function () {
        this.play();
      });
    $(".testimonial__button").css("display", "none");
  });
});

// Navbar dynamic color functionality
const $header = $("#header");
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!$("#navbarSupportedContent").hasClass("show")) {
        $header.removeClass("dark");
      }
      $header.removeClass("scroll");
    } else {
      $header.addClass("dark");
      $header.addClass("scroll");
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
