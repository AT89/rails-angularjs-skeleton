angular.module('app').controller("AppController",
  ['$scope', 'AuthService',
  function ($scope, AuthService) {
    $scope.isLoggedIn = function(){ return AuthService.isLoggedIn();}
    $scope.logout = function(){
      AuthService.logout(
        function(res) {
            $location.path('/');
        },
        function(err) {
            $scope.error = "Failed to logout";
        }
      );
    }
  }]);
