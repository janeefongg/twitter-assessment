(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileCtrl', ProfileCtrl);
  
  function ProfileCtrl ($stateParams, userData) {
    var vm = this;
    vm.tweets = $stateParams.obj.data;
    vm.username = $stateParams.obj.screen_name;
    vm.user = $stateParams.obj.data[0].user;
    vm.clicked = clicked;
    vm.hashtags = [];
    vm.hash = "";
    vm.extractHashTags = extractHashTags;
    vm.setHash = setHash;

    // vm.user = userData.data[0];
    console.log(vm.tweets);

    function clicked () {
      console.log('yay!')
    }

    function extractHashTags (tweets) {
      var tempArr = [];
      for (var i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.hashtags.length > 0) {
          for (var j = 0; j < tweets[i].entities.hashtags.length; j++) {
            if (tempArr.indexOf(tweets[i].entities.hashtags[j].text) < 0) {
              tempArr.push(tweets[i].entities.hashtags[j].text);
            }
          }
        }
      }

      vm.hashtags = tempArr;
    }

    function setHash (hash) {
      console.log(hash)
      vm.hash = '#' + hash;
    }

  }

})();

