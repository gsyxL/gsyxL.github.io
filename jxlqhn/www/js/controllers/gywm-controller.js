
angular.module('gywm-controller',[])
    .controller('GywmCtrl',['$scope','$ionicHistory',function($scope,$ionicHistory){
        $scope.goBack = function(){
            $ionicHistory.goBack();
        }

    }]);
