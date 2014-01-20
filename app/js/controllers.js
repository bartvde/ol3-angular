'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MenuCtrl', ['$scope', '$route', '$routeParams', '$location', function MenuCntl($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  }])
  .controller('LayerSwitcherCtrl', ['$scope', function($scope) {
    $scope.layers = [];
    $scope.updateVisiblity = function(layer) {
      var title = layer.title;
      map.getLayers().forEach(function(lyr) {
        if (title === lyr.get('title')) {
          lyr.set('visible', layer.visible);
        }
      });
    };
    map.getLayers().forEach(function(lyr) {
      $scope.layers.push({title: lyr.get('title'), visible: lyr.get('visible')});
    });
  }]);
