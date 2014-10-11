app = angular.module('app', [
  'ui.router', //angular-ui-router
  'templates', //angular-rails-templates
  ]);

$(document).on('ready page:load',function(){
  if (!$('body').hasClass('ng-scope'))
    angular.bootstrap(document.body, ['app'])
});

//routing
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  //unmatched routes redirect to root
  $urlRouterProvider.otherwise("/");

  //set up states
  $stateProvider
    .state('homeState',{
      url: '/',
      templateUrl: 'hello.html',
      controller : 'AppController'
    })

  $locationProvider.html5Mode(true);
});
