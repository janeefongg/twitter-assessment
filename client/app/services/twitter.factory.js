(function () {
  'use strict';

  angular
    .module('app')
    .factory('TwitterFactory', TwitterFactory);

  // factoryName.$inject = [ 'dependency' ];

  /* @ngInject */
  function TwitterFactory ($http) {
    var service = {
      getTweets: getTweets
    };
    return service;

    

    function getTweets (name) {

      var params = { screen_name: name};
      var config = { params: params};

      console.log(config)
      
      return $http.get('/api/twitter/', config);
      
    }
  }

})();

