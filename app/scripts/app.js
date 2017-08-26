'use strict';

/**
 * @ngdoc overview
 * @name todoAppApp
 * @description
 * # todoAppApp
 *
 * Main module of the application.
 */
angular
  .module('todoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    '720kb.datepicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add_item', {
        templateUrl: 'views/add_item.html',
        controller: 'AddCtrl',
        controllerAs: 'add_item'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
