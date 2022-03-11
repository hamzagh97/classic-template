$(function() {
  "use strict";
  $(".header").height($(window).height());
  $(window).resize(function() {
    $(".header").height($(window).height());
    $(".bx-wrapper").each(function() {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".bx-wrapper div").height()) / 2
      );
    });
  });
  $("nav ul li a").click(function() {
    $(this)
      .parent()
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  $("nav.scrolled ul li a").click(function() {
    $(this)
      .parent()
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  $(".slider").bxSlider({
    pager: false
  });

  $(".bx-wrapper").each(function() {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".bx-wrapper div").height()) / 2
    );
  });

  $("a").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top
      },
      500
    );
  });

  $(function() {
    $(document).scroll(function() {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > 100);
    });
  });

  $(function() {
    $(document).scroll(function() {
      var $li = $("nav ul li");
      $li.toggleClass("scrolled", $(this).scrollTop() > 100);
    });
  });
});
