// *******************************
// Navigation End

// Burger Menu

if (window.innerWidth <= 650) {
  scrollMain();
  $(".header__nav").hide();
  $(".burger-menu").click(function () {
    $(".header__nav").toggle();
  });
}

// Scrolling

function scrollMain() {
  const h = window.innerHeight;
  $(".main").css({
    height: h,
    // overflowY: "scroll",
  });
  $(".header__nav").css({
    height: h,
  });
}

$(".dropdown").click(function () {
  $(".dropdown-list").toggle();
});
