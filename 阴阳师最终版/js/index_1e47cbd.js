/*��������*/
$(function () {
    $("#quanmulu").mouseover(function () {
        $(".NIE-topBar-menu").stop().show().opacity(0.9);
    })
    $("#quanmulu").mouseout(function () {
        $(".NIE-topBar-menu").stop().hide().opacity(0.9);
    })

});

/*ۡΰ����ʼ*/
/*main-banner����*/
/*ҳ����ض���*/
$(function(){
    $(".animate_logo").animate({"left":"55px","opacity":"1"},1000);
    $(".animate_side").animate({"top":"65px","opacity":"1"},1000);
    $(".animate_qingming").animate({"top":"30px","opacity":"1"},1300);
    $(".animate_shenle").animate({"top":"50px","opacity":"1"},1000);
});
/*��ȡ�����߶�����logo*/
$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>40){
            $(".animate_logo").stop().hide(1000);
        }else{
            $(".animate_logo").stop().show(1000);
        }
    });
});
/*ƽ��֮���ֲ�ͼ*/
function bg1Move(){
    $(".selectorbg1").stop().animate({"top":"-10px","opacity":"1"});
}
function bg1Back(){
    $(".selectorbg1").stop().animate({"top":"10px","opacity":"0"});
}
function bg2Move(){
    $(".selectorbg2").stop().animate({"top":"-10px","opacity":"1"});
}
function bg2Back(){
    $(".selectorbg2").stop().animate({"top":"10px","opacity":"0"});
}
$(function(){
    $(".shishen").mouseover(function(){
        bg1Move();
    }).mouseout(function(){
        bg1Back();
    });
    $(".shishen").find("i").click(function(){
        bg1Move();
        bg2Back();
        $(".shishen").off("mouseout");/*bug===========*/
    });
    $(".actor").mouseover(function(){
        bg2Move();
    }).mouseout(function(){
        bg2Back();
    });
    $(".actor").find("i").click(function(){
        bg2Move();
        bg1Back();
        $(".actor").off("mouseout");/*bug===========*/
    });
});
/*���ض�����ť*/
$(function(){
    $(".backtop").mouseover(function(){
        $(this).stop().animate({"top":"24px"},300)
    }).mouseout(function(){$(this).animate({"top":"44px"},300)});

    $(".animate").mouseover(function(){
        $(".feel").stop().animate({"opacity":0},300);
        $(".dotted").stop().animate({"top":"193px"},300);
        $(".download").stop().animate({"opacity":1,"top":"228px"},300);
        $(".door").stop().animate({"bottom":"-65px"})
    }).mouseout(function(){
        $(".feel").stop().animate({"opacity":1},300);
        $(".dotted").stop().animate({"top":"268px"},300);
        $(".download").stop().animate({"opacity":0,"top":"264px"},300);
        $(".door").stop().animate({"bottom":"-25px"})
    });
});