(function () {
  var app = angular.module('bundle_landing', ['ngRoute']);


  function config ($routeProvider, $locationProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/landing.html',
      })
      .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);

    }

  angular
      .module('bundle_landing')
      .config(['$routeProvider', '$locationProvider', config]);

})();
