'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:CitiesCtrl
 * @description
 * # CityCtrl
 * Controller for each city
 */
angular.module('zyringApp')
  .controller('CitiesCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.cityName = $routeParams.cityName;
  }]);
