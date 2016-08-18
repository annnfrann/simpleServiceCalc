trig.controller("TrigController", function($scope, CalculatorFactory){

  $scope.sideA=''
  $scope.sideB=''
  $scope.calculate = function(){
     $scope.hypotenuse = CalculatorFactory.findHypot($scope.sideA, $scope.sideB);
  }

});
