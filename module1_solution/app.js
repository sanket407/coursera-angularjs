( function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

$scope.inputString = "";
$scope.output = "";
$scope.checkInput = function(){

  var dishesArray = $scope.inputString.split(",");

  if($scope.inputString == "")
    $scope.output = "Please enter data first";
  else if(dishesArray.length <= 3)
    $scope.output = "Enjoy!";
  else
    $scope.output = "Too much!";
  };

$scope.getColor = function(output){

  if(output == "Enjoy!" || output == "Too much!")
    return {'color':'green'};
  else if(output == "Please enter data first")
    return {'color':'red'};

  }


}

})();
