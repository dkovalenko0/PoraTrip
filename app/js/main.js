// Your main script
$(function () {
  let figure = $(".video").hover(hoverVideo, hideVideo);

  function hoverVideo(e) {
    $("video", this).get(0).play();
  }

  function hideVideo(e) {
    $("video", this).get(0).pause();
  }

  $(".phone").mask("+38 (999) 999-99-99");

  $(".dropdown-arrow").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top,
      },
      0.5
    );
  });

  $(".rus").click(function () {
    $(".rus").addClass("active").removeClass("disable");
    $(".en").addClass("disable").removeClass("active");
  });

  $(".en").click(function () {
    $(".en").addClass("active").removeClass("disable");
    $(".rus").addClass("disable").removeClass("active");
  });

  $(".nav-toogler").click(function (event) {
    $(".nav-toogler, .nav-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
