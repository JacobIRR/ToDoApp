'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('AddCtrl', ['$scope', '$location', '$window',
    function ($scope, $location, $window) {
      // send user back to main overview page
      $scope.cancelAddItem = function() {
          if ($window.confirm(
                "Are you sure you wish to cancel? All changes will be lost.")
            ) {
               $location.path('main');
          }
      };
      // Verify date and emit date_error if it's bad
      function checkDate (date_string) {
        var goodDate;
        try {
          goodDate = new Date(date_string);
        } catch(e) {}
        if ( Object.prototype.toString.call(goodDate) === "[object Date]" ) {
          if ( isNaN( goodDate.getTime() ) ) {
            $scope.date_error = date_string + " is not a valid date";
          }
          else {
            $scope.date_error = false;
            return true;
          }
        }
        else {
          $scope.date_error = date_string + " is not a valid date";
        }
      }
      // add the item to localStorage since there is no backend / DB
      $scope.addItem = function(item) {
        if (!checkDate(item.due_date)) {
          return;
        }
        var obj = $window.localStorage;
        var last_key = Object.keys(obj)[Object.keys(obj).length-1] || 0;
        var key = (parseInt(last_key, 10) + 1).toString();
        item.completed = false;
        $window.localStorage.setItem(key, JSON.stringify(item));

        // route back to overview to show newly added item
        $location.path('main');
      };
  }]);
