var app = angular.module('todoApp', []);

app.controller("TodosController", function($scope) {
	 // Store todo items here. What is the data type?
   $scope.todos = [];

   $scope.addTodo = function(todo) {
		// Add code here
    // $scope.todos.push[""];
    $scope.todos.push(todo);
    $scope.todo = {};
    $scope.todoForm.$setPristine();
  };
  

	$scope.deleteAll = function() { 
		// Add code here
    $scope.todos = [];
	};
});
