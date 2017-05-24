angular.module('lqApp', ['ionic', 'lqApp.controllers', 'lqApp.services','lqApp.directives'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    
        $urlRouterProvider.otherwise('login');

        $stateProvider
           
            .state('tab', {
                url: '/tab',
                abstract:true,
                templateUrl: 'templates/tabs.html'
            })

         
            .state('login',{
                url:'/login',
                templateUrl:'templates/login.html',
                controller:'LoginCtrl'
            })


            .state('register',{
                url:'/register',
                templateUrl:'templates/register.html',
                controller:'RegisterCtrl'
            })

     
            .state('modifyPassword',{
                url:'/modifyPassword',
                templateUrl:'templates/modifyPassword.html',
                controller:'ModifyPasswordCtrl'
            })

 
            .state('tab.main',{
                url:'/main',
                views:{
                    'tab-main':{
                        templateUrl:'templates/tab-main.html',
                        controller:'MainCtrl'
                    }
                }

            })

            .state('tab.main-detail',{
                url:'/main/:id',
                views:{
                    'tab-main':{
                        templateUrl:'templates/main-detail.html',
                        controller:'MainDetailCtrl'
                    }
                }

            })





            //ÐÅÏ¢²éÑ¯Ä£¿é
            .state('tab.xxcx',{
                url:'/xxcx',
                views:{
                    'tab-xxcx':{
                        templateUrl:'templates/tab-xxcx.html',
                        controller:'XxcxCtrl'
                    }
                }

            })

            //ÐÅÏ¢²éÑ¯-ÏêÇéÄ£¿é
            .state('tab.xxcx-detail',{
                url:'/xxcx/:id',
                views:{
                    'tab-xxcx':{
                        templateUrl:'templates/xxcx-detail.html',
                        controller:'XxcxDetailCtrl'
                    }
                }

            })

            //¹©ÇóÆ½Ì¨Ä£¿é
            .state('tab.gqpt',{
                url:'/gqpt',
                views:{
                    'tab-gqpt':{
                        templateUrl:'templates/tab-gqpt.html',
                        controller:'GqptCtrl'
                    }
                }

            })
            //¹©ÇóÆ½Ì¨-ÏêÇéÄ£¿é
            .state('tab.gqpt-detail',{
                url:'/gqpt/:id',
                views:{
                    'tab-gqpt':{
                        templateUrl:'templates/gqpt-detail.html',
                        controller:'GqptDetailCtrl'
                    }
                }

            })

            //×Ê²ú¹ÀËãÄ£¿é
            .state('tab.zcgs',{
                url:'/zcgs',
                views:{
                    'tab-zcgs':{
                        templateUrl:'templates/tab-zcgs.html',
                        controller:'ZcgsCtrl'
                    }
                }

            })

            //×Ê²ú¹ÀËã-ÏêÇé£¨ÆÀ¹À£©Ä£¿é
            .state('tab.zcgs-detail',{
                url:'/zcgs/:id',
                views:{
                    'tab-zcgs':{
                        templateUrl:'templates/zcgs-detail.html',
                        controller:'ZcgsDetailCtrl'
                    }
                }

            })

            //ÎÒÄ£¿é
            .state('tab.personal',{
                url:'/personal',
                views:{
                    'tab-personal':{
                        templateUrl:'templates/tab-personal.html',
                        controller:'PersonalCtrl'
                    }
                }

            })
    });
