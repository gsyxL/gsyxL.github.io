// tab 控制器
angular.module('moviecat.tab', [])
.controller('tabCtrl',['$scope',function($scope){
	$scope.search = '';
	$scope.search_fun = function(){
		location.hash = '#!/tab/search/?q='+$scope.search;
	}
}])