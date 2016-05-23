var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);
  // configure our routes
  myApp.config(function($routeProvider) {
    $routeProvider
      // route for the home page
      .when('/home', {
        templateUrl : 'static/pages/home.html',
        controller: 'mainController'
      })
      // route for the about page
      .when('/services', {
        templateUrl : 'static/pages/services.html',
        controller: 'servicesController'
      })
      // route for the contact page
      .when('/contact', {
        templateUrl : 'static/pages/contact.html',
        controller: 'contactController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  // create the controller and inject Angular's $scope
  myApp.controller('mainController', function($scope) {
    $scope.pageClass = 'pages#home';
  });
  myApp.controller('servicesController', function($scope) {
    $scope.pageClass = 'pages#services';
  });
  myApp.controller('contactController', function($scope) {
    $scope.pageClass = 'pages#contact';
  });
