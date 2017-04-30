(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.food="";
    $scope.feedbackMessage="";

    var food, items;
    $scope.checkIfTooMuch = function() {
      food = $scope.food;
      items = food.split(',');

      if(!food) {
        $scope.feedbackMessage="Please enter data first";
      } else if(items.length < 4) {
        $scope.feedbackMessage="Enjoy!";
      } else {
        $scope.feedbackMessage="Too Much!";
      }
    }

  }
})();
