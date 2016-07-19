(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);
  
  function DashboardCtrl (TwitterFactory, $state) {
    var vm = this;

    vm.submit = submit;
    vm.tweets = [];
    vm.isLoading = false;
    vm.isInvalid = false;


    function submit (username) {
      var escapedUsername = _.escape(username);
      console.log('escaped', escapedUsername)
      vm.isLoading = true;
      TwitterFactory.getTweets(escapedUsername).then(function (data) {
        if (data.data.success === false) {
          vm.isLoading = false;
          vm.isInvalid = true;
        } else {
          console.log('sent back', data.data)
          vm.tweets = data.data;
          vm.name = '';
          vm.isInvalid = false;
          vm.isLoading = false;
          $state.go('profile', {obj: data});
        }
      })
    }

  }

})();

