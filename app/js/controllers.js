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
    $scope.updateSelected = function(layer) {
      var title = layer.title;
      $scope.options = {selected: title};
      var group = layer.group;
      map.getLayers().forEach(function(lyr) {
        if (lyr.get('group') === group) {
          lyr.set('visible', (lyr.get('title') === title));
        }
      });
    };
    $scope.updateVisiblity = function(layer) {
      var title = layer.title;
      map.getLayers().forEach(function(lyr) {
        if (title === lyr.get('title')) {
          lyr.set('visible', layer.visible);
        }
      });
    };
    map.getLayers().forEach(function(lyr) {
      var obj = {
        title: lyr.get('title'),
        group: lyr.get('group'),
        visible: lyr.get('visible'),
        exclusive: lyr.get('exclusive')
      };
      if (obj.exclusive && obj.visible) {
        $scope.options = {selected: obj.title};
      }
      lyr.on('change:visible', function(evt) {
        if (this.visible !== evt.target.get('visible')) {
          this.visible = evt.target.get('visible');
          if(!$scope.$$phase) {
            $scope.$apply();
          }
        }
      }, obj);
      $scope.layers.push(obj);
    });
  }]);
