var app = angular.module('teaApp', ['ngRoute']);

app.config(function($routeProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'ShoppingController'
      })
      .when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'CheckoutController'
      })
      .otherwise({
      	templateUrl: 'partials/home.html',
    template: "This route isn't set!"
 	 });
});
