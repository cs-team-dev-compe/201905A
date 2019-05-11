$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3400,
});

$('.mitem').mousemove(function () {
    $(this).css("color", "#0ff")
});

$(".mitem").mouseout(function () {
    $(this).css("color", "white")
});

// $(".hitem1").mouseover(function(){
//     $(this).hide()
// });

$(".hitem1").mousemove(function(){
    $(this).html("<h1>Welcome</h1>")
  });
