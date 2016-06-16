app.factory('fbdb', function($scope, blog, $angularfire) {

return {
	getData: function(){
		var query = firebase.database().ref("/blog-posts/").orderByKey();

		query.once("value").then(function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		     	var dataFromBlog = childSnapshot.val();
		     	console.log("dataFromBlog:",dataFromBlog);
		     	return dataFromBlog;
		 	}); 		
		});
	}
}



});