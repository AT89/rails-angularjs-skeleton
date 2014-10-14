app = angular.module('app', [
  'ui.router',   //angular-ui-router
  'templates',   //angular-rails-templates
  'restangular', //restangular
  'ngCookies'    //angular-cookies
  ]);

$(document).on('ready page:load',function(){
  if (!$('body').hasClass('ng-scope'))
    angular.bootstrap(document.body, ['app'])
});

app.config(['$stateProvider','$urlRouterProvider',
            '$locationProvider', '$httpProvider',
            'RestangularProvider',
  function($stateProvider, $urlRouterProvider,
           $locationProvider, $httpProvider,
           RestangularProvider){

    //unmatched routes redirect to root
    $urlRouterProvider.otherwise("/");

    //set up states and routing
    $stateProvider
      .state('homeState',{
        url: '/',
        templateUrl: 'hello.html',
        controller : 'AppController'
      }).state('locationState',{
        url: '/locations',
        templateUrl: 'location.html',
        controller : 'LocController'
      })
      //auth
      .state('loginState',{
        url: '/sign_in',
        templateUrl: 'sessions/new.html',
        controller : 'LoginController'
      })
      .state('signUpState',{
        url: '/sign_up',
        templateUrl: 'registrations/new.html',
        controller : 'SignUpController'
      })
      .state('logoutState',{
        controller : 'LogoutController'
      })


    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    //restangular settings
    RestangularProvider.setBaseUrl('/v1');
  }]);
