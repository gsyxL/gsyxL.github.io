/**
 * Created by Administrator on 2016/11/16.
 */
//======================================���⶯��Ч��============================================
//======================================�в���һ���ֶ���Ч��============================================
$(function () {
    $(".jiazai").fadeIn(500);

    $(".bg").fadeIn(1000, function () {
        $(function () {
            $(".door-left").animate({"left":"-200px"},1100);//��ʾ
        });
        $(function () {
            $(".door-right").animate({"right":"-138px"},1000, function () {
                $(".img-people").fadeIn(600, function () {
                    $(".img-title").fadeIn(1000);
                    $(".img-head").fadeIn(1000, function () {
                        $(".flower1").fadeIn(1000);
                        $(".flower2").fadeIn(1000);
                    });

                });
            });
        });
    });
});
//======================================�����============================================
document.onmousemove=function (e) {
    my$("flower1").style.right=e.clientX/50-100+"px";
    my$("flower1").style.top=e.clientY/50-50+"px";
    my$("flower2").style.left=e.clientX/30+"px";
    my$("flower2").style.bottom=e.clientY/30+300+"px";
};
//======================================�Ҳ�̶�����================================================
$(function () {
    $(window).scroll(function () {
        //��ȡҳ�������ȥ�ĸ߶Ⱥ�.top��div�ĸ߶ȶԱ�
        if($(document).scrollTop()>1200){
            $(".weixin").fadeIn(1000);
        }else{
            $(".weixin").fadeOut(1000);
        }
    });
});

//===========================����ƶ���ʾ����===============================================
$(function () {
    $(".weixin .wx1").mouseover(function () {
        $(".weixin .wxt1").stop().fadeIn(200);
    });
    $(".weixin .wx1").mouseout(function () {
        $(".weixin .wxt1").stop().fadeOut(200);
    });
});
$(function () {
    $(".weixin .wx2").mouseover(function () {
        $(".weixin .wxt2").stop().fadeIn(200);
    });
    $(".weixin .wx2").mouseout(function () {
        $(".weixin .wxt2").stop().fadeOut(200);
    });
});
$(function () {
    $(".weixin .wx3").mouseover(function () {
        $(".weixin .wxt3").stop().fadeIn(200);
    });
    $(".weixin .wx3").mouseout(function () {
        $(".weixin .wxt3").stop().fadeOut(200);
    });
});
$(function () {
    $(".weixin .wx4").mouseover(function () {
        $(".weixin .wxt4").stop().fadeIn(200);
    });
    $(".weixin .wx4").mouseout(function () {
        $(".weixin .wxt4").stop().fadeOut(200);
    });
});
//================================��ά��====================================================
$(function () {
    $(window).scroll(function () {
        //��ȡҳ�������ȥ�ĸ߶Ⱥ�.top��div�ĸ߶ȶԱ�
        if($(document).scrollTop()>250){
            $(".erweima").fadeIn(2000);
        }else{
            $(".erweima").fadeOut(2000);
        }
    });
});





//======�ڶ�ģ��===============

// ===============�����л�=======
$(".main2-l-side").find("span").mouseover(function () {
    $(this).animate({"opacity": "1"});
});
$(".main2-l-side").find("span").mouseout(function () {
    $(this).animate({"opacity": ""});
});


//Ĭ������ۺ���������Ϊ��ʾ
$(".shijieguan").find("span").animate({"opacity": "1"});


//============��Ƶ��ʼ��ť�Ŵ���С================
setInterval(function () {
    $(".dxem").css("transform","scale(1.1)");
},150);
setInterval(function () {
    $(".dxem").css("transform","scale(1.0)");
},100);


//==============��ʾ��̨��======================
$(".main2-l-side").find($(".wutaiju")).click(function () {
    $("#stage").show();
    $("#world").hide();
});

//=============��ʾ�����================
$(".main2-l-side").find($(".shijieguan")).click(function () {
    $("#world").show();
    $("#stage").hide();
});


//================================����ģ��=============================

// =============�����л�=======
$(".main4-l-side").find("span").mouseover(function () {
    $(this).animate({"opacity": "1"});
});
$(".main4-l-side").find("span").mouseout(function () {
    $(this).animate({"opacity": "0"});
});

//==================��ʾ��Ϸ����=======
$(".main4-l-side").find(".wutaiju").click(function () {
    $("#gamemusic").show();
    $("#lead").hide();
});
$(".main4-l-side").find(".shijieguan").click(function () {
    $("#lead").show();
    $("#gamemusic").hide();
});
//====���Ǻ�ʽ���л�========
$("#ss-btn").click(function () {
    //��ʾʽ���ͼƬ �������ǵ�ͼƬ
    $("#shishen").show();
    $("#zhujue").hide();
    //���ʽ��ʱ�л�����ͼƬ
    $(this).addClass("zjssbj-2");
    $(this).removeClass("zjssbj-1");
    $("#zj-btn").addClass("zjssbj-1");
    $("#zj-btn").removeClass("zjssbj-2");
    $(".focus").show();

});
$("#zj-btn").click(function () {
    $("#zhujue").show();
    $("#shishen").hide();
    //�������ʱ�л�����ͼƬ
    $(this).addClass("zjssbj-2");
    $(this).removeClass("zjssbj-1");
    $("#ss-btn").addClass("zjssbj-1");
    $("#ss-btn").removeClass("zjssbj-2");
    $(".focus").hide();
});
$(".focus").hide();


//======����=================
function  video(element){
    $("embed").remove();
    var index =element.index()+1;
    element.append(" <embed src='mp3/cv"+index+".mp3' width='0' height='0' type='audio/mpeg' loop='false' autostart='false'>");
    if($("embed")){
        $(".main4-rwtxts").find("em").css("background","url('images/index_z_d94da60.png') -741px -124px no-repeat");
        element.find("em").css("background","url('images/index_z_d94da60.png') -766px -124px no-repeat");
    }
}

//��������
$("#zhujue>div").click(function () {
    video($(this));
});
//ʽ������
$("#shishen").find($(".main4-rwjs")).on("click",function () {
    video($(this));
});
//���ҳ��ֹͣ����
$(".main4-rwtxts").find("em").click(function () {
    if($("embed")){
        $("embed").remove();
        $(this).css("background","");
    }
    return false;  //��ֹð���¼�
});
//==============���С��ť�л�ͼƬ=======================
//======�����ť�õ�ǰ��ť������ʽ���л�ͼƬ
var pic = 0;   //��Ϊ����
var picWidth = 303;  //ͼƬ�ƶ��Ŀ��
var index;
var lis = my$("uu").children;
for(var i=0; i<lis.length; i++){
    lis[i].onmouseover = function () {
        for(var j=0; j<lis.length; j++){
            lis[j].setAttribute("class","moren");
        }
        this.className = "on";
        index = this.innerText;
        animate(my$("shishen2"),{"left":-index*picWidth});
        pic = index;
    };
}

//=========����ҽ����л�ͼƬ
$(".right-focus").click(function () {
    pic++;
    pic = pic>2? 0:pic;
    animate(my$("shishen2"),{"left":-pic*picWidth});
    for(var i=0; i<lis.length; i++){
        lis[i].setAttribute("class","moren");
    }
    lis[pic].className = "on" ;
});

//============����󽹵��л�ͼƬ
$(".left-focus").click(function () {
    pic--;
    pic = pic<0? 2:pic;
    animate(my$("shishen2"),{"left":-pic*picWidth});
    for(var i=0; i<lis.length; i++){
        lis[i].setAttribute("class","moren");
    }
    lis[pic].className = "on" ;
});





//ģ��3���������ص�  ����ҳ���������Ż���ʾ����
$(".main-3-content").hide();
$(".main-5-content").hide();


//================����Ч��=====================
//��װ�õĺ���
function xsyc(element,height,fn) {
    window.onscroll = function () {
        //console.log(document.body.scrollTop);
        if (document.body.scrollTop > height) {
            //var title = element;
            $(element).show(1600);
            if(fn){
                fn();
            }
        }
    };
}
xsyc($("#yincang2"),690, function () {
    xsyc($(".main-3-content"),1638, function () {
        xsyc($("#yincang4"), 2473, function () {
            xsyc($(".main-5-content"),3365);    //��ʾģ��5
        });
    })
})
//���ú��� ������Ҫ��ʾ��ģ�� ����ҳ�����ĸ߶�


//ģ��3 �����С��ť ������С��ť �����ͼ��ʾ��Ӧ��ͼƬ
$("#smallPic>li").mouseover(function () {
    var indexS = $(this).index() + 1;
    $("#bigImg").attr("src", "images/ms0" + indexS + "s.jpg");
});


//������ҽ��㰴ť�ֲ���ͼ


//����ģ��������� ����������ʾ
$(".main-3 .sideleft a").mouseover(function () {
    $(this).css("opacity", 1);
    $(this).siblings().css("opacity",0);

}).mouseout(function () {
    $(".main-3 .sideleft a").css("opacity", 0);
    $(".main-3 .sideleft .a1").css("opacity", 1);
});



//����ģ��������� ����������ʾ
$(".main-5 .sideleft a").mouseover(function () {
    $(this).css("opacity", 1);
    $(this).siblings().css("opacity",0);

}).mouseout(function () {
    $(".main-5 .sideleft a").css("opacity", 0);
    $(".main-5 .sideleft .a1").css("opacity", 1);
});


//�������С��ť  �л��м��ͼ
//$(".main-5-content").find(".m5-img").hide();

//$("#m-im2").hide();
$(".main-5-content>.main-5-l>.l-btn1>em").mouseover(function () {
    $("#m-im2").show();
    $("#m-im2").css(opacity,1);
});

$(".main-5-content>.main-5-l>.l-btn2>em").mouseover(function () {
    $("#m-im3").css("display","block");
});

$(".main-5-content>.main-5-l>.l-btn3>em").mouseover(function () {
    $("#m-im4").css("display","block");
});

//�ұߵ���������
$(".main-5-content>.main-5-r>.r-btn1>em").mouseover(function () {
    $("#m-im5").css("display","block");
});
$(".main-5-content>.main-5-r>.r-btn2>em").mouseover(function () {
    $("#m-im6").css("display","block");
});
$(".main-5-content>.main-5-r>.r-btn3>em").mouseover(function () {
    $("#m-im2").css("display","block");
});
//function my$(id){
//    return document.getElementById(id);
//}


//ģ��3�����С��ť���ҽ����ֲ�
var ulObj=my$("smallPic");
var lis=ulObj.children;
var moveWidth=60;
var leftBtn=my$("leftBtn");
var rightBtn=my$("rightBtn");
var index=0;
leftBtn.onclick= function () {
    index = index<=0?5 :index;
    index--;
    animate(ulObj,{"left":-index*moveWidth});
};

rightBtn.onclick=function(){
    index = index>3? 0:index;
    index++;
    animate(ulObj,{"left":-index*moveWidth});
};










//    var index=0;
//$("#rightBtn").click(function () {
//    var index=$("index");
//    index++;
//    $("#smallPic").css()
//});
