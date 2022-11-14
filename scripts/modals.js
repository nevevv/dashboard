$(".modalBtn").click(function () {
  $(".modal-programs").show(200);
  $(".modals-body-bg").show(200);

  window.scrollTo(0, 0);

  $("body").css({
    overflow: "hidden",
  });
});

$(".modal-programs-close").click(function () {
  $(".modal-programs").hide();
  $(".modals-body-bg").hide();
  $("body").css({
    overflow: "visible",
  });
});
