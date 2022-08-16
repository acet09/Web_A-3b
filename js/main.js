// Jquery
$(document).ready(function(){
  // nav
  $("#GNB__main, #GNB__sub ul li").hover(function(){
    $("#GNB__sub").stop().slideDown(200);
  },function(){
    $("#GNB__sub").stop().slideUp(200);
  });

  $("#GNB__main ul li a").removeClass('active');
  $("#GNB__main ul li a").hover(function(){
    $(this).addClass('active');
  },function(){
    $("#GNB__main ul li a").removeClass('active');
  });

  $("#GNB__sub ul").hover(function(){
    var num=$(this).index();
    console.log(num);
    $("#GNB__main ul li a").eq(num).addClass('active');
  },function(){
    $("#GNB__main ul li a").removeClass('active');
  });

  // slide
  function slidemove(){
    var smv=$(".slide__box > div").width();
    $(".slide__box").animate({
      left:-smv
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css('left',0);
    });
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $(".not__box ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });


});