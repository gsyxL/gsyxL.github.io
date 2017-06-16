(function (angular) {
    "use strict";

    // start your ride
    // 主模块
    angular.module('moviecat', ['ui.router','moviecat.in_theaters','moviecat.tab'])
    .config(['$stateProvider', function(sp){
    	sp.state({
            // 公共代码
    		name: 'tab',
    		url: '/tab',
                    abstract: true,
    		templateUrl: './page/tab.html',
                    controller: 'tabCtrl'
    	}).state({
            // 首页
                    name:'tab.home',
                    url:'/home',
                    templateUrl:'./page/home.html'
        }).state({
                    name:'tab.in_theaters',  //正在热映
                    url: '/:movietype/:page?',
                    templateUrl:'./page/in_theaters.html',
                    controller: 'in_theatersCtrl'
        })
    }])

})(angular);