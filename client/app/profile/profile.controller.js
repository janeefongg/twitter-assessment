(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileCtrl', ProfileCtrl);

  // ControllerName.$inject = [ 'dependency' ];

  /* @ngInject */
  function ProfileCtrl () {
    var vm = this;
    vm.title = 'ControllerName';

    // activate();

    ////////////////

  }

})();

