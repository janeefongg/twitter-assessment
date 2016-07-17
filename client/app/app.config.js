(function () {
  'use strict';

  angular
    .module('app')
    .config(config)
    
    // config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function config ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('dashboard');
      
      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/app/dashboard/dashboard.html',
            controller: 'DashboardCtrl as vm'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: '/app/profile/profile.html',
            controller: 'ProfileCtrl as vm',
            params: {
              obj: null
            },
            resolve: {
              userData: function ($http, $stateParams) {
                console.log($stateParams.obj.config.params.screen_name);
                var params = { screen_name: $stateParams.obj.config.params.screen_name };
                var config = { params: params }
                return $http.get('/api/twitter/user', config)
                  .then(function (data) {
                    return data;
                  });
              }
            }
        })
    }

})();
    