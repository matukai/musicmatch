//ANGULAR MODULE
angular.module('myApp',['ngRoute']);

angular.module('myApp')
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: '/views/home.html'
  })
  .when('/login', {
    controller: 'LoginController',
    templateUrl: '/views/login.html'
  })
})