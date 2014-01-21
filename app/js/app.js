'use strict';

var map = new ol.Map({
    renderer: ol.RendererHint.CANVAS,
    layers: [new ol.layer.Tile({
        title: "Streets",
        group: "Base Maps",
        exclusive: true,
        source: new ol.source.MapQuest({layer: 'osm'})
    }),
    new ol.layer.Tile({
        title: "Aerial",
        group: "Base Maps",
        exclusive: true,
        visible: false,
        source: new ol.source.MapQuest({layer: 'sat'})
    }),
    new ol.layer.Vector({
        title: 'Zoning',
        group: 'Overlays',
        style: new ol.style.Style({symbolizers: [
            new ol.style.Stroke({
                color: 'black',
                width: 4,
                opacity: 1
            })
        ]}),
        source: new ol.source.Vector({
            parser: new ol.parser.GeoJSON(),
            url: 'data/medford-zoning.json'
        })
    })],
    view: new ol.View2D({
        center: ol.proj.transform(
            [-122.85676399771559, 42.3389246879193], 'EPSG:4326', 'EPSG:3857'),
        zoom: 12
    })
});

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
