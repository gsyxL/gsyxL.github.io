/**
 * Created by hp on 2016/11/16.
 */
//������Ч��


//ul���ֲ�ͼ
$(".news_wrap>.news_tabs>a").mouseover(function(){
        var index=$(this).index();
    $(".news_list>ul:eq("+index+")").addClass("selected");
    $(".news_list>ul:eq("+index+")").siblings("ul").removeClass("selected");
});
//ͼƬ���ֲ�ͼ
//��ȡ������Ҫ��Ԫ��
//�Ȼ�ȡbox
var box=my$("box");

//��ȡ��ʾͼƬ��ȵ�div
var screen=box.children[0];

//��ȡͼƬ�ƶ��Ŀ��
var imgWidth=screen.offsetWidth;
//��ȡul
var ul=screen.children[0];
//��ȡul�е����е�li
var lis=ul.children;
//��ȡol
var ol=screen.children[1];
var pic=0;
//����С��ť,�ĸ�����ul��li�ĸ���һ��
for(var i=0;i<lis.length;i++){
    //����li,�����뵽ol��
    var li=document.createElement("li");
    li.innerHTML=(i+1);
    li.setAttribute("index",i);
    ol.appendChild(li);
    //�����뵽��ǰ��li��,��ǰ��li������ʽ,�������Ƴ�����ʽ
    li.onmouseover=function () {
        //����
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].removeAttribute("class");
        }
        this.className="current";
        //��ȡ����
        var index=parseInt(this.getAttribute("index"));
        animate(ul,-index*imgWidth);
        pic=parseInt(this.getAttribute("index"));
    };
}
//����ol�е�һ��li��Ĭ�ϵı�����ɫ
ol.children[0].className="current";
//Ϊul����׷��һ��li,���li����ʾ��ͼƬ��ul�еĵ�һ��li�е�ͼƬһ��
ul.appendChild(ul.children[0].cloneNode(true));
var setId=null;//Ϊ�������뵽box�е�ʱ�������ʱ��
setId=setInterval(f1,1000);//�Զ�����
//Ϊboxע����������뿪���¼�
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
        //��һ����ť����ɫ
        ol.children[0].className="current";
        //���һ����ť��ɫ�Ƴ�
        ol.children[ol.children.length-1].removeAttribute("class");
    }else{
        //��������
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].removeAttribute("class");
        }
        //�õ����ť��ʱ�������Ӧ��pic��Ӧ�İ�ť�б�����ɫ
        ol.children[pic].className="current";
    }
};
//�ֲ�
//��ȡԪ�صĵ�ǰλ��,�ƶ�,ÿ���ƶ���������
function animate(element,target) {
    //ÿ�ε������������ʱ��������֮ǰ�ļ�ʱ��
    clearInterval(element.setId);
    element.setId=setInterval(function () {
        //��ȡԪ�ص�ǰ��λ��
        var current=element.offsetLeft;
        //ÿ���ƶ�������
        var step=10;
        //�ж��ƶ��Ĳ���Ӧ�����������Ǹ���
        step=current<target?step:-step;
        //��ǰ��λ��=֮ǰ�ĵ�ǰλ��+�ƶ��Ĳ���
        current=current+step;
        if(Math.abs(target-current)<Math.abs(step)){
            //�Ѽ�ʱ������
            clearInterval(element.setId);
            element.style.left=target+"px";
        }else{
            //��ֵ��Ҫ�ƶ���Ԫ��
            element.style.left=current+"px";
        }
    },20);
}

//����id��ȡԪ�ض���

function my$(id){
    return document.getElementById(id);
}