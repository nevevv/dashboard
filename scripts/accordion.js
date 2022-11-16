$(".accordion-show").hide();

let idx = 0;

$(".accordion-link").click(function () {
  $(".accordion-show").toggle(200);
  if (idx === 0) {
    console.log(1);
    $(".chevron").css({
      transform: "rotate(180deg)",
    });
    idx++;
  } else {
    console.log(2);
    $(".chevron").css({
      transform: "rotate(360deg)",
    });
    idx = 0;
  }
});
