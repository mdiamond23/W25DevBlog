
$(document).ready(function () {

  $(".accordion").on("click", function () {
    const panel = $(this).next(".panel");

    panel.slideToggle();

  });

});
