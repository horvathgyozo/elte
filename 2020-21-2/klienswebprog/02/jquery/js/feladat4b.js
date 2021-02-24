// prettier-ignore
$(".card-header")
  .append('<button class="ml-2 btn btn-sm btn-primary">Expand</button>')
  .find("button")
    .on("click", function () {
      $(this).closest(".card").parent().toggleClass("col-lg-4 col-lg-12");
    });
