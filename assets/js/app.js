(function() {
 'use strict';
	//creating module
  angular
	.module('todoApp',
				['ui.router',
				 'ngResource',
				 'ngInputDate',
				  ])
				 
	//configration
	.config(["$stateProvider",
			"$urlRouterProvider",
			function ($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state("todoList", {
					url: "/",
					templateUrl: "partials/todo-list.html",
					controller: "todoCtrl as todo",
				}).state("todoAdd", {
					url: "/add",
					templateUrl: "partials/todo-form.html",
					controller: "todoCtrl as todo"
				}).state("todoEdit", {
					url: "/edit/:id",
					templateUrl: "partials/todo-form.html",
					controller: "todoCtrl as todo",
				}).state("todoArchived", {
					url: "/archived",
					templateUrl: "partials/todo-list.html"
				})
	}]);
  
}());


