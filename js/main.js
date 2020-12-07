$(document).ready(function () {
  $(".slider").length &&
    $(".slider").slick({
      dots: !1,
      arrows: !1,
      speed: 400,
      lazyLoad: "ondemand",
      fade: !0,
      swipe: !1,
      draggable: !1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: !0,
            fade: !1,
            swipe: !0,
            draggable: !0,
            variableWidth: !0,
            centerPadding: "0px",
            swipeToSlide: !0,
          },
        },
      ],
    }),
    $(document).on("click", ".app__btns-item", function (t) {
      $(this).hasClass("active") ||
        ($(".app__btns-item").removeClass("active"),
        $(this).addClass("active")),
        $(".slider").slick("slickGoTo", $(this).index()),
        t.preventDefault();
    }),
    $(".app__btns-item").hover(
      function () {
        $(this).trigger("click");
      },
      function () {}
    )
  })