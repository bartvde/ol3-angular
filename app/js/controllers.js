'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

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
