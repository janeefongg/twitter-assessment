(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  // DashboardCtrl.$inject = [ '$state' ];

  /* @ngInject */
  function DashboardCtrl (TwitterFactory, $state) {
    var vm = this;

    vm.submit = submit;
    vm.tweets = [];
    vm.isLoading = false;


    function submit (username) {
      vm.isLoading = true;
      TwitterFactory.getTweets(username).then(function (data) {
        vm.tweets = data.data;
        vm.name = '';
        vm.isLoading = false;
        $state.go('profile', {obj: data});
      });
    }

  }

})();

