$(window).bind("scroll", function() {
  if ($(window).scrollTop() > 350) {
    $("section#home h1").addClass("fixed");
    $(".nav").css("display", "block");
  }
  if ($(window).scrollTop() >= 800) {
    $(".home-left h1").css("color", "black");
    $(".home-right h1").css("color", "white");
    $(".home-left a").css("color", "black");
    $(".home-right a").css("color", "white");
  }
  if ($(window).scrollTop() < 800) {
    $(".home-left h1").css("color", "white");
    $(".home-right h1").css("color", "black");
    $(".home-left a").css("color", "white");
    $(".home-right a").css("color", "black");
  }
  if ($(window).scrollTop() <= 350) {
    $("section#home h1").removeClass("fixed");
    $(".nav").css("display", "none");
  }
  if ($(window).scrollTop() > 1700) {
    $(".home-left h1").css("color", "white");
    $(".home-right h1").css("color", "white");
    $(".home-left a").css("color", "white");
    $(".home-right a").css("color", "white");
    $(".nav-bg").css("display", "block");
  }
  if ($(window).scrollTop() <= 1700) {
    $(".nav-bg").css("display", "none");
  }
});

$(".h-letter").hover(function() {
  $(".h-letter").css("color", "#fb302e");
});
