/*宣传页特效开始*/
$(function(){
    $(".bijiuni").mouseover(function(){
        $(".bijiuni").stop().animate({"top":"220px"},500);
    }).mouseout(function(){
        $(".bijiuni").stop().animate({"top":"240px"},500);
    });
    $(".yimulian").mouseover(function(){
        $(".yimulian").stop().animate({"top":"70px"},500);
    }).mouseout(function(){
        $(".yimulian").stop().animate({"top":"90px"},500);
    });
    $(".banruo").mouseover(function(){
        $(".banruo").stop().animate({"top":"70px"},500);
    }).mouseout(function(){
        $(".banruo").stop().animate({"top":"90px"},500);
    });

    $(".slogan").animate({"top":"80px","opacity":"1"},1000)
});

