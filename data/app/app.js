var app = angular.module("webTemp", ['ngRoute','ui.bootstrap']);


app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
     .when('/home',{
        controller : "mainCtrl"
      })
    .when('/blog',{
      templateUrl : "data/partials/nav-views/blog.html",
      controller: "blogCtrl"
    })
    .when('/about',{
      templateUrl : "data/partials/nav-views/about.html"
    })
    .when('/projects',{
      templateUrl : "data/partials/nav-views/projects.html"
    })
    .when('/timeline',{
      templateUrl : "data/partials/nav-views/timeline.html"
    })
    .otherwise({
      redirectTo: '/home'
    });
 
  }
  ]);