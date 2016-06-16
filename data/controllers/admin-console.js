app.controller("adminConsoleCtrl", 
  ["$scope","$firebaseAuth",
  function($scope, $firebaseAuth) {

var auth = $firebaseAuth();

$scope.postIt = function(title,blogPost){
	var postData = {
		title: title,
		date: todaysDate(),
		post: blogPost
	};

	var newPostKey = firebase.database().ref().child('blog').push().key;
	var updates = {};
  	updates['/blog-posts/' + newPostKey] = postData;
  	$scope.blogPost = '';
  	$scope.title = '';
  	return firebase.database().ref().update(updates);

}



function todaysDate(){
	var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	var d = new Date(),
		date = d.getDate(),
		year = d.getFullYear(),
		month = d.getMonth()+1,
		newMonth= monthNames[month];
	var today =  newMonth + ' ' + date + ', ' + year;

	return today;
}
  } ]);