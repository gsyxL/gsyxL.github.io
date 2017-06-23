
	$('.indexPage').on('click',function () {
		$(this).hide()
		$('.testBegin').show()
	})
	var num = 1,flag = false,restNum = -1;
	var qLis = $('.question ul li');
	$('.nextBtn').on('click',function () {
		$('#q'+num).show().siblings().hide()
	})
	$('.question ul li').on('click',function () {
		$(this).addClass('lichoose').siblings().removeClass('lichoose')
		var qsIndex = $(this).closest('.question').index(); // question索引
		var qsLisIndex = $(this).index(); // li索引
		//第一题和第三题
		if(qsIndex === 0 || qsIndex === 2) { 
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
		$('.import').hide()
		$('.punDesigner').eq(restNum).show().siblings().hide();
	})
	$('.im_tel').on('keyup',function () {
		if($(this).val().length >= 11) {
			$(this).attr('disabled','disabled')
		}
	})
	function jumpPage(pageNum) {
		num = pageNum
	}
	function resultPage(resNum) {
		restNum = resNum
		$('.testBegin').hide()
		$('.import').show()
	}	
