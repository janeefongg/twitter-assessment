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


    function submit (username) {
      console.log('username', TwitterFactory)
      TwitterFactory.getTweets(username).then(function (data) {
        vm.tweets = data.data;
        vm.name = '';
        $state.go('profile', {obj: data});
      });
    }

  }

})();

