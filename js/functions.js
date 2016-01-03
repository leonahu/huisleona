(function() {
  var s;

  s = skrollr.init();

  $("header.main").addClass("animated fadeIn");

  $("section").addClass("animated fadeIn");

  $("#baselines").addClass("animated fadeIn");

  $("iframe").addClass("animated fadeIn");

  $(document).ready(function() {
    FastClick.attach(document.body);
    $("a.mobile-menu").click(function() {
      $(this).toggleClass("close");
      $("body").toggleClass("noscroll");
      $("header.main").toggleClass("open");
      return $("nav").toggleClass("open");
    });
    $("a.mobile-menu.open").click(function() {
      return $("header.main").addClass("animated fadeOut");
    });
    return $("body.projects article").hover((function() {
      var bgImg;
      bgImg = $(this).find("span");
      bgImg.removeClass("hidden");
      bgImg.removeClass("fadeOut");
      return bgImg.addClass("fadeIn");
    }), function() {
      var bgImg;
      bgImg = $(this).find("span");
      bgImg.removeClass("fadeIn");
      return bgImg.addClass("fadeOut");
    });
  });

}).call(this);
