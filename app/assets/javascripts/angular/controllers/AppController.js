angular.module('app').controller("AppController",
  function ($scope, Restangular){
    $scope.locations = Restangular.all('locations').getList().$object;
  });
