// photos轮播图
var btns = $('.p-btn ul li a');
//展示图片的宽度
var picwidth = $('.p-photos').width();
var pic = 0;

btns.each(function(index){
	$(btns[index]).attr('index',index).mouseenter(function(){
		btns.removeClass('active');
		$(this).addClass('active');
		$('.p-ul').css('left',-$(this).attr('index')*picwidth + 'px');
		pic = $(this).attr('index');
	});
});
	$(btns[0]).addClass('active');

$('.right-a').click(function(){
   if(pic < btns.length - 1){
   	pic++;
	$('.p-ul').css('left',-pic*picwidth + 'px');
	btns.removeClass('active');
	$(btns[pic]).addClass('active');
   }
});

$('.left-a').click(function(){
   if(pic > 0){
   	pic--;
	$('.p-ul').css('left',-pic*picwidth + 'px');
	btns.removeClass('active');
	$(btns[pic]).addClass('active');
   }
});



