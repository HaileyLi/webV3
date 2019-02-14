if (window.innerWidth > 768) {
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
} else {
  $(window).bind("scroll", function() {
    if ($(window).scrollTop() > 400) {
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
    if ($(window).scrollTop() <= 400) {
      $("section#home h1").removeClass("fixed");
      $(".nav").css("display", "none");
    }
    if ($(window).scrollTop() > 1600) {
      $(".home-left h1").css("color", "white");
      $(".home-right h1").css("color", "white");
      $(".home-left a").css("color", "white");
      $(".home-right a").css("color", "white");
      $(".nav-bg").css("display", "block");
    }
    if ($(window).scrollTop() <= 1600) {
      $(".nav-bg").css("display", "none");
    }
  });
}

$(document).on("scroll", onScroll);
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  if (scrollPos <= 480) {
    $("a.active").removeClass("active");
    $(".h-letter").addClass("active");
  }
  if (scrollPos > 480 && scrollPos <= 2000) {
    $("a.active").removeClass("active");
    $(".i-letter").addClass("active");
  }
  if (scrollPos > 2000) {
    $("a.active").removeClass("active");
    $(".e-letter").addClass("active");
  }
}
