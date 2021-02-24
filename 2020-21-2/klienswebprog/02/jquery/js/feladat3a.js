$(".card-header").each(function () {
  // console.log(this);
  const $header = $(this);
  const count = $header.next().children().length;
  $header.append(` (${count})`);
});
