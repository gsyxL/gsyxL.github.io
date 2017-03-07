// 
angular.module('moviecat.service', [])
.service('MyJsonp', ['$window', function($window){
	// 封装自己的jsonp方法
	this.jsonp = function ( option ) {
			// 把参数拼接到地址后面
			option.data = option.data || {};
			option.url += '?';
			for(var key in option.data) {
				option.url += key + '=' + option.data[key] + '&';
			}
			var fn = ('callback_'+ Math.random()).replace('.','');
			$window[fn] = option.success;
			var script = document.createElement('script')
			      head = document.querySelectorAll('head')[0];
			      script.src = option.url + 'callback='+ fn;
			      head.appendChild(script);	
		}
}])