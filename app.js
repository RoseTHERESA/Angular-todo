var app = angular.module('todoApp', []); // What's missing? Hint, it's more than one thing.

app.controller("TodosController", function($scope) { // What's missing?
	 // Store todo items here. What is the data type?
   $scope.todos = [];

   $scope.addTodo = function() { // Rewrite to make this function abailable in your view
		// Add code here
    $scope.todos.push[""];
  };
  

	$scope.deleteAll = function() { // Rewrite to make this function abailable in your view
		// Add code here
    $scope.todos = [];
	};
});
