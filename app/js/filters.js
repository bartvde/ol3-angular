'use strict';

/* Filters */
var uniqueItems = function (data, key) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    var value = data[i][key];
    if (result.indexOf(value) == -1) {
      result.push(value);
    }
  }
  return result;
};

angular.module('myApp.filters', []).
  filter('groupBy', [
    function () {
      return function (collection, key) {
        if (collection === null) return;
        return uniqueItems(collection, key);
      };
  }]).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
