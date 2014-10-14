angular.module('app').controller("LocController",
  function ($scope, Restangular){
    $scope.locations = Restangular.all('locations').getList().$object;
  });
