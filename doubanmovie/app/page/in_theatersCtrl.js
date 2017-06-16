// 正在热映控制器
angular.module('moviecat.in_theaters', ['moviecat.service'])
.controller('in_theatersCtrl', ['$scope','MyJsonp','$stateParams',
	function($scope, MyJsonp,$sp){
		console.log($sp);
		// start 是第几条数据，page是第几页
		// 我们要根据page,count算出start
		var count = 10;
		// 防止没有路由参数
		var page = ($sp.page || 1) - 0;
		var start = (page - 1) * count;

	var tmp = location.hash;
	var arr = tmp.split('?'); 
	var q  ='';
	if(arr.length > 1) {
		q = arr[1].split('=')[1];
	}
	console.log(q);
	console.log(arr);
	// 当正在热映页面打开时，要发送请求
	// console.log(MyJsonp);
	// 根据路由参数中movietype的值去请求url
	url = $sp.movietype;
	MyJsonp.jsonp({
		data: {start: start, count: count, q: q},
		url: 'http://api.douban.com/v2/movie/'+url,
		success: function(info){
			console.log(info);
			// 只要有一个数据模型变化，angular就重新解析dom中的指令和表达式
			// 我们只是发了一个jsonp请求，当请求的数据过来时，angular不知道我们要做什么操作
			// 这时，如果改变$scope的属性值，angular无法得知，就会导致页面对应指令部分数据无法得到更新
			// 数据
			$scope.list = info.subjects;
			// 总条数
			$scope.total = info.total;
			// 总页数
			$scope.totalPage = Math.ceil($scope.total/count);
			// $apply, 调用angular中已有的方法
			// 告诉angular数据发生变化了,重新把数据模型的值放到对应的指令和表达式位置
			$scope.$apply();
		}
	})

	// 分页功能
	// 直接更能路由参数
	$scope.page = page;
	// var search = $scope.search ? '/?q='+q :'';
	$scope.getPage = function(page){
		// 大于等于第一页并且小于总页数
	   if(page > 0 && page <= $scope.totalPage){
	   		// console.log(search)
	   	    location.hash = '#!/tab/'+$sp.movietype +'/'+page;
	   	    console.log(location.hash)
	   }
	}
}])