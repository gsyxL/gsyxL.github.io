/**
 * Created by Administrator on 2016/11/16.
 */
//======================================标题动画效果============================================
//======================================中部第一部分动画效果============================================
$(function () {
    $(".jiazai").fadeIn(500);

    $(".bg").fadeIn(1000, function () {
        $(function () {
            $(".door-left").animate({"left":"-200px"},1100);//显示
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
//======================================花瓣飞============================================
document.onmousemove=function (e) {
    my$("flower1").style.right=e.clientX/50-100+"px";
    my$("flower1").style.top=e.clientY/50-50+"px";
    my$("flower2").style.left=e.clientX/30+"px";
    my$("flower2").style.bottom=e.clientY/30+300+"px";
};
//======================================右侧固定动画================================================
$(function () {
    $(window).scroll(function () {
        //获取页面卷曲出去的高度和.top的div的高度对比
        if($(document).scrollTop()>1200){
            $(".weixin").fadeIn(1000);
        }else{
            $(".weixin").fadeOut(1000);
        }
    });
});

//===========================鼠标移动显示文字===============================================
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
//================================二维码====================================================
$(function () {
    $(window).scroll(function () {
        //获取页面卷曲出去的高度和.top的div的高度对比
        if($(document).scrollTop()>250){
            $(".erweima").fadeIn(2000);
        }else{
            $(".erweima").fadeOut(2000);
        }
    });
});





//======第二模块===============

// ===============扇形切换=======
$(".main2-l-side").find("span").mouseover(function () {
    $(this).animate({"opacity": "1"});
});
$(".main2-l-side").find("span").mouseout(function () {
    $(this).animate({"opacity": ""});
});


//默认世界观和主角声优为显示
$(".shijieguan").find("span").animate({"opacity": "1"});


//============视频开始按钮放大缩小================
setInterval(function () {
    $(".dxem").css("transform","scale(1.1)");
},150);
setInterval(function () {
    $(".dxem").css("transform","scale(1.0)");
},100);


//==============显示舞台剧======================
$(".main2-l-side").find($(".wutaiju")).click(function () {
    $("#stage").show();
    $("#world").hide();
});

//=============显示世界观================
$(".main2-l-side").find($(".shijieguan")).click(function () {
    $("#world").show();
    $("#stage").hide();
});


//================================第四模块=============================

// =============扇形切换=======
$(".main4-l-side").find("span").mouseover(function () {
    $(this).animate({"opacity": "1"});
});
$(".main4-l-side").find("span").mouseout(function () {
    $(this).animate({"opacity": "0"});
});

//==================显示游戏配乐=======
$(".main4-l-side").find(".wutaiju").click(function () {
    $("#gamemusic").show();
    $("#lead").hide();
});
$(".main4-l-side").find(".shijieguan").click(function () {
    $("#lead").show();
    $("#gamemusic").hide();
});
//====主角和式神切换========
$("#ss-btn").click(function () {
    //显示式神的图片 隐藏主角的图片
    $("#shishen").show();
    $("#zhujue").hide();
    //点击式神时切换背景图片
    $(this).addClass("zjssbj-2");
    $(this).removeClass("zjssbj-1");
    $("#zj-btn").addClass("zjssbj-1");
    $("#zj-btn").removeClass("zjssbj-2");
    $(".focus").show();

});
$("#zj-btn").click(function () {
    $("#zhujue").show();
    $("#shishen").hide();
    //点击主角时切换背景图片
    $(this).addClass("zjssbj-2");
    $(this).removeClass("zjssbj-1");
    $("#ss-btn").addClass("zjssbj-1");
    $("#ss-btn").removeClass("zjssbj-2");
    $(".focus").hide();
});
$(".focus").hide();


//======声音=================
function  video(element){
    $("embed").remove();
    var index =element.index()+1;
    element.append(" <embed src='mp3/cv"+index+".mp3' width='0' height='0' type='audio/mpeg' loop='false' autostart='false'>");
    if($("embed")){
        $(".main4-rwtxts").find("em").css("background","url('images/index_z_d94da60.png') -741px -124px no-repeat");
        element.find("em").css("background","url('images/index_z_d94da60.png') -766px -124px no-repeat");
    }
}

//主角声音
$("#zhujue>div").click(function () {
    video($(this));
});
//式神声音
$("#shishen").find($(".main4-rwjs")).on("click",function () {
    video($(this));
});
//点击页面停止播放
$(".main4-rwtxts").find("em").click(function () {
    if($("embed")){
        $("embed").remove();
        $(this).css("background","");
    }
    return false;  //阻止冒泡事件
});
//==============点击小按钮切换图片=======================
//======点击按钮让当前按钮有类样式并切换图片
var pic = 0;   //作为索引
var picWidth = 303;  //图片移动的宽度
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

//=========点击右焦点切换图片
$(".right-focus").click(function () {
    pic++;
    pic = pic>2? 0:pic;
    animate(my$("shishen2"),{"left":-pic*picWidth});
    for(var i=0; i<lis.length; i++){
        lis[i].setAttribute("class","moren");
    }
    lis[pic].className = "on" ;
});

//============点击左焦点切换图片
$(".left-focus").click(function () {
    pic--;
    pic = pic<0? 2:pic;
    animate(my$("shishen2"),{"left":-pic*picWidth});
    for(var i=0; i<lis.length; i++){
        lis[i].setAttribute("class","moren");
    }
    lis[pic].className = "on" ;
});





//模块3首先是隐藏的  当网页浏览到这里才会显示出来
$(".main-3-content").hide();
$(".main-5-content").hide();


//================动画效果=====================
//封装好的函数
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
            xsyc($(".main-5-content"),3365);    //显示模块5
        });
    })
})
//调用函数 设置需要显示的模块 和网页卷曲的高度


//模块3 下面的小按钮 鼠标进入小按钮 上面大图显示相应的图片
$("#smallPic>li").mouseover(function () {
    var indexS = $(this).index() + 1;
    $("#bigImg").attr("src", "images/ms0" + indexS + "s.jpg");
});


//点击左右焦点按钮轮播大图


//第三模块左边扇形 的隐藏与显示
$(".main-3 .sideleft a").mouseover(function () {
    $(this).css("opacity", 1);
    $(this).siblings().css("opacity",0);

}).mouseout(function () {
    $(".main-3 .sideleft a").css("opacity", 0);
    $(".main-3 .sideleft .a1").css("opacity", 1);
});



//第五模块左边扇形 的隐藏与显示
$(".main-5 .sideleft a").mouseover(function () {
    $(this).css("opacity", 1);
    $(this).siblings().css("opacity",0);

}).mouseout(function () {
    $(".main-5 .sideleft a").css("opacity", 0);
    $(".main-5 .sideleft .a1").css("opacity", 1);
});


//点击侧面小按钮  切换中间大图
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

//右边的三个菱形
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


//模块3下面的小按钮左右焦点轮播
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
