(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileCtrl', ProfileCtrl);
  
  function ProfileCtrl ($stateParams, userData) {
    var vm = this;
    vm.tweets = $stateParams.obj.data;
    vm.username = $stateParams.obj.screen_name;
    vm.user = userData.data[0];

    console.log(vm.user)


    //current user’s name, username, follower’s count, friend’s count, and profile photo.

  }

})();

