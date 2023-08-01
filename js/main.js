$(function () {
  $("html,body").animate({ scrollTop: 0 }, "1");

  $(".hamburger").on("click", function () {
    hamburger();
  });
  $("#navi a").on("click", function () {
    hamburger();
  });

  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });

  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("show");
    }
  });
});

function hamburger() {
  $(".hamburger").toggleClass("active");
  if ($(".hamburger").hasClass("active")) {
    $("#navi").addClass("active");
  } else {
    $("#navi").removeClass("active");
  }
}
