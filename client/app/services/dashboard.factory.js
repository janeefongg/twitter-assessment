(function () {
  'use strict';

  angular
    .module('app')
    .factory('DashboardFactory', DashboardFactory);

  // factoryName.$inject = [ 'dependency' ];

  /* @ngInject */
  function DashboardFactory (dependency) {
    var service = {
      functionName: functionName
    };
    return service;

    

    function functionName () {
      
    }
  }

})();

