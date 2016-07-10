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
			query.once("value").then(function(snapshot) {
				$scope.blog = [];
			    snapshot.forEach(function(childSnapshot) {
			     	var dataFromBlog = childSnapshot.val();
			     	 $scope.blog.push(dataFromBlog);
			  	});
			  	return $scope.blog;	
			});
	}

$scope.dropdownBtn = function(){
	var blogCard = document.getElementById('blogCard');
	blogCard.className += " MyClass";
	
	console.log("blogCard:",blogCard);
};
	
blogData();
 

  	
  } ]);