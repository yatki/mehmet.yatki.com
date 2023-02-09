jQuery(document).ready(function ($) {
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  if (getParameterByName("m") === "print") {
    $(".hidden-print").css("display", "none");
    $(".container-block").css("padding", "20px 30px");
    $(".main-wrapper").css("min-height", "1390px");
    $(".print-break").css("display", "block");
  }

  /*======= Skillset *=======*/
  var $levelBarInner = $(".level-bar-inner");
  $levelBarInner.css("width", "0");

  $(window).on("load", function () {
    $levelBarInner.each(function () {
      var $this = $(this);
      var itemWidth = $this.data("level");

      $this.attr("title", itemWidth);
      $this.animate(
        {
          width: itemWidth,
        },
        800
      );
    });
  });

  function sendEvent(category, action, label) {
    if (typeof ga === "function") {
      ga("gtag_UA_3857339_9.send", "event", {
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: 1,
      });
    }
  }

  $("a").bind("click", function () {
    var href = $(this).attr("href");
    sendEvent("Outbound", "Link", href);
  });
});
