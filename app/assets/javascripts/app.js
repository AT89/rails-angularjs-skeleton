app = angular.module('app', [
  'ui.router',   //angular-ui-router
  'templates',   //angular-rails-templates
  'restangular', //restangular
  ]);

$(document).on('ready page:load',function(){
  if (!$('body').hasClass('ng-scope'))
    angular.bootstrap(document.body, ['app'])
});

app.config(function($stateProvider   , $urlRouterProvider,
                    $locationProvider, RestangularProvider){
  //unmatched routes redirect to root
  $urlRouterProvider.otherwise("/");

  //set up states and routing
  $stateProvider
    .state('homeState',{
      url: '/',
      templateUrl: 'hello.html',
      controller : 'AppController'
    })

  $locationProvider.html5Mode(true);

  //restangular settings
  RestangularProvider.setBaseUrl('/api/v1');
});
