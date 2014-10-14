angular.module('app').controller("LoginController",
  ['$location', '$scope', 'AuthService',
  function ($location, $scope, AuthService) {
    $scope.login = function () {
      var credentials = {user:{
          email: $scope.email,
          password: $scope.password,
          rememberme: $scope.rememberme
      }};

      AuthService.login(credentials,
        function(res) {
            $location.path('/');
        },
        function(err) {
            $scope.errors = [err];
        });
    }
  }]);
