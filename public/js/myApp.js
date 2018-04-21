//ANGULAR MODULE
angular.module('myApp',['ngRoute']);

angular.module('myApp')
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: '/views/home.html'
  })
})