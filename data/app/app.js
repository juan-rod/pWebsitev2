var app = angular.module("webTemp", ['ngRoute','ui.bootstrap','firebase']);


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
    .when('/admin',{
      templateUrl : "data/partials/admin/admin-login.html",
      controller:'adminLoginCtrl'
    })
    .when('/adminConsole',{
      templateUrl : "data/partials/admin/admin-console.html",
      controller:'adminConsoleCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
 
  }
  ]);