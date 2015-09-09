'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('MainCtrl', function ($scope) {
    $scope.cities = [
      {
        name : 'Seattle',
        image : 'images/seattle-needle.gif'
      },
      {
        name : 'Tacoma',
        image : 'images/tacoma.jpg'
      },
      {
        name : 'Redmond',
        image : 'images/redmond.jpg'
      },
      {
        name : 'Bellevue',
        image : 'images/bellevue.jpg'
      },
      {
        name : 'Kirkland',
        image : 'images/kirkland.jpg'
      },
      {
        name : 'Olympia',
        image : 'images/olympia.jpg'
      }
    ];
  });
