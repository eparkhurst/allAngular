app.directive('movieNavBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/movieNav.html'
  };
});

app.directive('teaNavBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/navbar.html'
  };
});
