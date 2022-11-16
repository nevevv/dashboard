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
  $(".students-registration-modal").hide();

  $("body").css({
    overflow: "visible",
  });
  location.reload()
});

// Connect with selector


$(".students-reg-selector").click(function (e) {
  if (e.target.value === "action") {
    $(".students-registration-modal").show(200);
    $(".modals-body-bg").show(200);
  } else {
    $(".students-registration-modal").hide(200);
    $(".modals-body-bg").hide(200);
  }
});
