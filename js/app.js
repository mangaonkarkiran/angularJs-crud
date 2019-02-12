var app = angular.module("myModule", [])
							   .controller("myController", function($scope){
 
								$scope.newMember = {};
 
								$scope.members = [];
 
								$scope.saveMember = function(){
									$scope.members.push($scope.newMember);
									$scope.newMember = {};
								};								
						});