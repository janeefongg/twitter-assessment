(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileCtrl', ProfileCtrl);
  
  function ProfileCtrl ($stateParams) {
    var vm = this;
    vm.tweets = $stateParams.obj;

  }

})();

