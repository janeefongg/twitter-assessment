(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  // DashboardCtrl.$inject = [];

  /* @ngInject */
  function DashboardCtrl (TwitterFactory) {
    var vm = this;

    vm.submit = submit;
    vm.tweets = [];


    function submit (username) {
      console.log('username', username)
      TwitterFactory.getTweets(username).then(function (data) {
        vm.tweets = data.data;
        vm.name = '';
      });
    }

  }

})();

