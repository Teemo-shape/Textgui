$(function(){


    // 遮罩层
    $(".solution-demo").on("mouseenter",function(){
        $(this).find(".mask").fadeIn();
        $(this).find(".about-headings").fadeOut();

        $(this).find(".about-info h2").fadeIn();
        $(this).find(".about-info p").fadeIn();
    });
    $(".solution-demo").on("mouseleave",function(){
        $(this).find(".mask").fadeOut();
        $(this).find(".about-headings").fadeIn();
        $(this).find(".about-info h2").fadeOut();
        $(this).find(".about-info p").fadeOut();

    });

    //内容的运动效果



    //回顶部效果；
    $(window).scroll(function(){
        if($(window).scrollTop()>=400){
            $(".gotoTop").fadeIn(500);
        }
        if($(window).scrollTop()<400){
            $(".gotoTop").fadeOut(500);
        }
    })
    $(".gotoTop").click(function(){
        $("body,html").stop().animate({"scrollTop":0},500)
    })
})
