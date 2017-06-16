/**
 * Created by Administrator on 2016/11/16 0016.
 */
//左边图片切换圆点
$(function () {
    //左边圆点
    $("#strategy_zuo").mouseover(function () {
        $(".strategy_banner_wrap").animate({"left": "0px"}, 200);
        $(this).css("backgroundColor", "black");
    });
    $("#strategy_zuo").mouseout(function () {
        $(this).css("backgroundColor", "");
    });
    //右边圆点
    $("#strategy_you").mouseover(function () {

        $(".strategy_banner_wrap").animate({"left": "-368px"}, 200);
        $(this).css("backgroundColor", "black");
    });
    $("#strategy_you").mouseout(function () {
        $(this).css("backgroundColor", "");
    });
});


