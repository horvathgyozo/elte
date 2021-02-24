$("footer").on("click", function () {
  const $span = $("footer span");
  $span.text("0");
  $span.animateNumber(
    { number: 2021 },
    {
      duration: 1000,
    }
  );
});
