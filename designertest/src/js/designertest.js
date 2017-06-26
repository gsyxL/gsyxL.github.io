	// 入口
	$('.indexPage img').on('click',function () {
		$('.indexPage').hide()
		$('.testBegin').show()
	})
	var num = 1,flag = false,restNum = -1;
	var qLis = $('.question ul li');
	$('.nextBtn').on('click',function () {
		// $('#q'+num).show().addCladss('ani').siblings().removeClass('ani').hide()
		$('#q'+num).show().css('left','100%').animate({left:0},100).siblings().hide()
	})
	$('.question ul li').on('click',function () {
		$(this).addClass('lichoose').siblings().removeClass('lichoose')
		var qsIndex = $(this).closest('.question').index(); // question索引
		var qsLisIndex = $(this).index(); // li索引
		//第一题和第三题
		if(qsIndex === 0) { 
			//往下跳一题
			num = qsIndex+2;
			return;
		}
	})
	// 查看结果
	$('.viewBtn').on('click',function () {
		var imName = $.trim($('.im_name').val())
		var imTel = $.trim($('.im_tel').val())
		if(restNum === -1) return
			if(!/^[\u4e00-\u9fa5]{2,4}$/.test(imName)) {
				$('.tips').show().find('.tip').html('请输入正确的姓名')
				setTimeout(function () {
					$('.tips').hide()
				},2000)
				return
			}
			if(!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(imTel)) {
				$('.tips').show().find('.tip').html('请输入正确的号码')
				setTimeout(function () {
					$('.tips').hide()
				},2000)
				return
			}
			// $.ajax({
			// 	url :'http://game.shjtu.cn/tools/submit_ajax.ashx?action=free_add',
			// 	data: { "txtname": imName, "txtmobile": imTel},
			// 	type: 'post',
			// 	dataType: 'json',
			// 	success: function (data) {
			// 	// if(data.status !== 1) {
			// 		// $('.tips').show().find('.tip').html(data.msg)
			// 		// setTimeout(function () {
			// 		// 	$('.tips').hide()
			// 		// },2000)
			// 		// return
			// 	// }
			// 	// $('.import').hide()
			// 	// $('.testResult').show()
			// 	// $('.punDesigner').eq(restNum).show().siblings(':not(.againBtn)').hide();
			// 	}
			// })
			$('.import').hide()
			$('.testResult').show()
			$('.punDesigner').eq(restNum).show().siblings(':not(.againBtn)').hide()
		})
	$('.im_tel').on('keyup',function () {
		if($(this).val().length >= 11) {
			$(this).val($(this).val().slice(0,11)) 
		}
	})

	// 再来一遍
	$('.againBtn a').on('click',function () {
		// location.search = ''
		location.href = location.pathname+'?time = 1'
		// window.event.returnValue = false;
		// e.preventDefault()
		return false
	})

	if(location.search != '') {
		$('.indexPage img').click()
	}

	function jumpPage(pageNum) {
		num = pageNum
	}
	function resultPage(resNum) {
		$('.testBegin').hide()
		if(location.search != '') {
			$('.testResult').show()
			$('.punDesigner').eq(resNum).show().siblings(':not(.againBtn)').hide();
			return
		}
		restNum = resNum
		$('.import').show()
	}	
