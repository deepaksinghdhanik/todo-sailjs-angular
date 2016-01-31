(function() {
 'use strict';
 
  angular
      .module('todoApp')
      .factory('todoAPI', todoAPI);

	 function todoAPI($resource, $q) {
		 
		 var resourceApi = $resource('http://localhost:1337/api/todo/:id',{id:'@id'},{
				update: {
					method: 'PUT'
				}
			});
			
		  var todoFn = {
			  queryTodo: queryTodo,
			  getTodo:getTodo,
			  saveTodo:resourceApi
		  };
		  
		  return todoFn;
		  
		  function queryTodo() {
			
			var defer = $q.defer();
			
			resourceApi.query('', function(data){				
				defer.resolve(data);				
			}, function(error){				
				defer.resolve(error);
			});
			
			return defer.promise;
			
		  };
		  
		  function getTodo(id){
			  
			  var defer = $q.defer();			  
			  resourceApi.get({
				  id:id
			  },function(data){
				  defer.resolve(data);
			  },function(error){
				  defer.resolve(error);
			  });
			  
			  return defer.promise;
			  
		  }

	  }
}()); 

 

