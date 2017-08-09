'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $log){
		$scope.snippet = '<span style="color:red">hi there</span>';
		$scope.boolValue = false;
		$scope.mystyle = {color:'red'};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		//$scope.event = eventData.getEvent(); 

		eventData.getEvent()
			.$promise
			.then(function(event) { $scope.event = event; })
			.catch(function(response) { console.log(response); }
			);		
		
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};
	}
);