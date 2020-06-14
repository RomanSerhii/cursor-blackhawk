$(window).on("load", () => {
  console.log("on load");
  $(".preloader-container").fadeOut(500);
});
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  });
});
