(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name redditNgExampleApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the redditNgExampleApp
   */
  angular
    .module('redditNgExampleApp')
    .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, MainModel) {
      $scope.covers = MainModel.getCovers().then(function (data) {
          $scope.covers = data;
      });

      console.log($scope);
    }

})();
