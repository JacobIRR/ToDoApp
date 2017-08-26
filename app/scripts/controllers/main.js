'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('MainCtrl', ['$scope', '$location', '$window',
    function ($scope, $location, $window) {
      // return keys from API to the main.html view for use with ng-repeat
      $scope.item_keys = function() {
        return Object.keys($window.localStorage);
      };
      // Get object value for a single item
      $scope.getItem = function(key) {
        return JSON.parse($window.localStorage[key]);
      };
      // Method for flagging incomplete, overdue items as red
      $scope.past_due = function(key) {
        var item = $scope.getItem(key);
        if (item.completed) {
          return false;
        }
        var now = new Date();
        var item_date = new Date(item.due_date);
        if (item_date < now) {
          return true;
        }
        return false;
      };
      // Checkbox handler for ng-click
      $scope.swapCompleted = function(key) {
        var item = $scope.getItem(key);
        item.completed = !item.completed;
        $window.localStorage[key] = JSON.stringify(item);
      };
      // Remove an item after user confirms
      $scope.remove = function(key) {
        if ($window.confirm("Are you sure you want to delete this item?")) {
          delete $window.localStorage[key];
        }
      };
      // Change views and show the add_item form
      $scope.addNew = function() {
        $location.path('add_item');
      };
      // toggle allows item details and delete icon to be shown
      $scope.toggle = false;
  }]);
