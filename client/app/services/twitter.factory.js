(function () {
  'use strict';

  angular
    .module('app')
    .factory('TwitterFactory', TwitterFactory);
  
  function TwitterFactory ($http) {
    var service = {
      getTweets: getTweets
    };
    return service;

    

    function getTweets (name) {

      var params = { screen_name: name};
      var config = { params: params};
      
      return $http.get('/api/twitter/', config);
      
    }
  }

})();

