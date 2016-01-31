(function () {
	angular.module("todoApp")
			.controller("todoCtrl",
				["$scope",
				"todoAPI",
				"$stateParams",
				"$resource"
				,function($scope , todoAPI , $stateParams, $resource ) {
					
					var todo = this;
					$scope.single = new todoAPI.saveTodo();
					
					// get all todo
					$scope.getAll = function(){
						
						todoAPI.queryTodo().then(
							function(data){
								
								todo.list =data;
								
							},
							function(error){
								
								console.info(error);
								
							}
						);
						
					}
					$scope.getAll();
					
					//get single todo
					todo.getTodo = function(id){
						
						
						todoAPI.getTodo(id).then(function(data){
	
							$scope.single = data;
							
						}, function(error){
							
							console.info(error);
							
						});
						
					}
					
					//ger stateParams id
					if($stateParams.id){
						
						todo.getTodo($stateParams.id);
						$scope.edit = true; 
						
					};
					
					//update todo
					$scope.updateTodo =  function(object){
						
						todoAPI.saveTodo.update({id:object.id}, object, function(){
							
							console.info('updateData');
							
						});
						
					}
					
					// create new todo 
					$scope.saveTodo =  function(object){
						
						todoAPI.saveTodo.save(object, function(){
							
							$scope.single =  new todoAPI.saveTodo();
							
						});
						
					}
					
					// delete all todo by id
					$scope.deleteTodo =  function(object){
						
						todoAPI.saveTodo.remove({id:object.id}, function(){
							
							$scope.getAll();
							
						});
						
					}
					

					
										
				}]
			);
}());
