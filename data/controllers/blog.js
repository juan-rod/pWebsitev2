app.controller("blogCtrl", ["$scope",function($scope, $angularFire) {

 
 //$scope.blog= [{date: "septemer", post: "what is going on?", title: "grrr"}];


	function init(){ 
		var query = firebase.database().ref("/blog-posts/").orderByKey();

		query.once("value").then(function(snapshot) {
			$scope.blog = [];
			// var dataFromBlog = [];
		    snapshot.forEach(function(childSnapshot) {
		     	var dataFromBlog = childSnapshot.val();
		     		// console.log("dataFromBlog:",dataFromBlog);
		     	 $scope.blog.push(dataFromBlog);
		     // $scope.blog = dataFromBlog;
		     		// console.log("blog1:",$scope.blog);
		     
		  	});
		     		console.log("blog2:",$scope.blog);
		  	return $scope.blog;
	     		
		});
	
}

	

init();
 



  	
  } ]);