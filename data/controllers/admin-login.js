app.controller("adminLoginCtrl", 
  ["$scope","$firebaseAuth","$location",
  function($scope, $firebaseAuth, $location) {
 	var auth = $firebaseAuth();

 	$scope.signIn =function(email,password){
 		
 		auth.$signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
 			 $location.path( "/adminConsole" );
  			console.log("Signed in as:", firebaseUser.uid);
		}).catch(function(error) {
  			console.error("Authentication failed:", error);
  			 $location.path( "/admin" );
		});

 	};


  } ]);