$(function () {
  $("nav#gnb ul li a,#sitemap ul li a,.go-to-top a").click(function () {
    $(this.hash);
    // console.log($(this.hash).offset().top);
    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({ scrollTop: thisElem.offset().top }, 1500);
  });

  $(window).scroll(function () {
    //   if (조건식) {실행문}
    // 조건식 ? 실행문1: 실행문2; // 배가 고프다 ? 먹는다 : 먹지 않는다 ; -> (삼항조건식)
    $(this).scrollTop() > 0
      ? $(".go-to-top").addClass("on")
      : $(".go-to-top").removeClass("on");
    // console.log($(this).scrollTop());
  });

  var wHeight = $(window).height();
  $(window).scroll(function () {
    var thisScrollTop = $(this).scrollTop();
    // console.log($("section"));
    $("section").each(function () {
      var thisOffset = $(this).offset();
      //   console.log(thisOffset);
      if (
        thisOffset.top <= thisScrollTop + 150 &&
        thisScrollTop < thisOffset.top + wHeight
      ) {
        $(this).addClass("active");
      }
    });
  });
});
