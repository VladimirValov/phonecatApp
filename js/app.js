'use strict';

var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListControler', function PhoneListControler($scope) {
		
	$scope.hello = "Angular Test";

    $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S.",
	 "age": 5},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet.",
	 "age": 4},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet.",
	 "age": 3},
    {"name": "COROLA XOOM™",
     "snippet": "The Next, Next Generation tablet.",
	 "age": 2},
    {"name": "XOOM™",
     "snippet": "The Next, Next Generation tablet.",
	 "age": 1}
  ];
  
  $scope.orderProp = "age";
});
