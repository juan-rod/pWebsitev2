app.controller("mainCtrl", 
  ["$scope",
  function($scope, $rootScope, $angularFire) {

$scope.user = [
	{
		name:"Juan Rodriguez",
		title:"Software Developer at DCR POS Systems",
		location:"Nashville"
	}
];

	function blogData(){ 
		var query = firebase.database().ref("/blog-posts/").orderByKey();
			query = query.limitToFirst(2);
			query.once("value").then(function(snapshot) {
				$scope.blog = [];
			    snapshot.forEach(function(childSnapshot) {
			     	var dataFromBlog = childSnapshot.val();
			     	//console.log("dataFromBlog:",dataFromBlog);
			     	 $scope.blog.push(dataFromBlog);
			  	});
			  	return $scope.blog;	
			});
	}


	
blogData();
 

  	
  } ]);