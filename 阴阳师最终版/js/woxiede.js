/**
 * Created by hp on 2016/11/16.
 */
//顶部的效果


//ul的轮播图
$(".news_wrap>.news_tabs>a").mouseover(function(){
        var index=$(this).index();
    $(".news_list>ul:eq("+index+")").addClass("selected");
    $(".news_list>ul:eq("+index+")").siblings("ul").removeClass("selected");
});
//图片的轮播图
//获取所有需要的元素
//先获取box
var box=my$("box");

//获取显示图片宽度的div
var screen=box.children[0];

//获取图片移动的宽度
var imgWidth=screen.offsetWidth;
//获取ul
var ul=screen.children[0];
//获取ul中的所有的li
var lis=ul.children;
//获取ol
var ol=screen.children[1];
var pic=0;
//创建小按钮,的个数和ul中li的个数一致
for(var i=0;i<lis.length;i++){
    //创建li,并加入到ol中
    var li=document.createElement("li");
    li.innerHTML=(i+1);
    li.setAttribute("index",i);
    ol.appendChild(li);
    //鼠标进入到当前的li中,当前的li有类样式,其他的移除类样式
    li.onmouseover=function () {
        //排他
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].removeAttribute("class");
        }
        this.className="current";
        //获取索引
        var index=parseInt(this.getAttribute("index"));
        animate(ul,-index*imgWidth);
        pic=parseInt(this.getAttribute("index"));
    };
}
//设置ol中第一个li有默认的背景颜色
ol.children[0].className="current";
//为ul中再追加一个li,这个li中显示的图片和ul中的第一个li中的图片一致
ul.appendChild(ul.children[0].cloneNode(true));
var setId=null;//为了鼠标进入到box中的时候清理计时器
setId=setInterval(f1,1000);//自动播放
//为box注册鼠标进入和离开的事件
box.onmouseover=function () {
    clearInterval(setId);
};
box.onmouseout=function () {
    setId=setInterval(f1,1000);
};
function f1() {
    if(pic==lis.length-1){
        pic=0;
        ul.style.left=0+"px";
    }
    pic++;
    animate(ul,-pic*imgWidth);
    if(pic==lis.length-1){
        //第一个按钮有颜色
        ol.children[0].className="current";
        //最后一个按钮颜色移除
        ol.children[ol.children.length-1].removeAttribute("class");
    }else{
        //排他功能
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].removeAttribute("class");
        }
        //让点击按钮的时候里面对应的pic对应的按钮有背景颜色
        ol.children[pic].className="current";
    }
};
//轮播
//获取元素的当前位置,移动,每次移动多少像素
function animate(element,target) {
    //每次调用这个函数的时候先清理之前的计时器
    clearInterval(element.setId);
    element.setId=setInterval(function () {
        //获取元素当前的位置
        var current=element.offsetLeft;
        //每次移动的像素
        var step=10;
        //判断移动的步数应该是正数还是负数
        step=current<target?step:-step;
        //当前的位置=之前的当前位置+移动的步数
        current=current+step;
        if(Math.abs(target-current)<Math.abs(step)){
            //把计时器清理
            clearInterval(element.setId);
            element.style.left=target+"px";
        }else{
            //赋值给要移动的元素
            element.style.left=current+"px";
        }
    },20);
}

//根据id获取元素对象

function my$(id){
    return document.getElementById(id);
}