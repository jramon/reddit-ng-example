(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name redditNgExampleApp
   * @description
   * # redditNgExampleApp
   *
   * Main module of the application.
   */
  angular
    .module('redditNgExampleApp', [
      'ngRoute'
    ])
    .config(config);


    function config ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }

})();
