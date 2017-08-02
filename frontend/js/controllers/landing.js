(function () {

  angular
    .module('bundle_landing')
    .controller('landingCtrl', landingCtrl);

  landingCtrl.$inject = ['$location', '$scope', '$http', '$timeout'];

  function landingCtrl($location, $scope, $http, $timeout) {
    $scope.email = '';
    $scope.showSendButton = true;
    $scope.showCheck = false;
    $scope.showPreloader = false;

    $scope.sendEmail = function () {
      if($scope.email) {
        $scope.showPreloader = true;
        $scope.showSendButton = false;
        $scope.showCheck = false;

        $http.post('/api/addEmail', {
            email : $scope.email
          },
          function successCallback(response) {
            console.log('succesful');
          }, function errorCallback(response) {
            console.log(response);
          }
        );

        $timeout(function() {
          $scope.showPreloader = false;
          $scope.showSendButton = false;
          $scope.showCheck = true;
        }, 1500);
      }
    }

  }

})();
