var app = angular.module('allAngular', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl:'partials/allAngular.html',
      controller: 'MainController'
    })
    .when("/reddit", {
      templateUrl: 'partials/reddit.html',
      controller: 'RedditController'
    })
    .when('/moviesearch',{
      templateUrl: 'partials/movieMain.html',
      controller: 'NavController'
    })
    .when('/movielist',{
      templateUrl: 'partials/movieList.html',
      controller: 'NavController'
    })
    .when('/details',{
      templateUrl: 'partials/movieDetails.html',
      controller: 'NavController'
    })
    .when('/tea', {
      templateUrl: "partials/home.html",
      controller: "TeaController"
    })
    .when('/item', {
      templateUrl: "partials/item.html",
      controller: "TeaController"
    })
    .when('/checkout', {
      templateUrl: "partials/checkout.html",
      controller: "checkoutController"
    })



      .otherwise({redirectTo: '/'})
})
