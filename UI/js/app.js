//Main module
var app = angular.module("app", [
    'app.config',
    'ngRoute',
    'customFilters'
]);

// routing
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.
        when('/', {
            templateUrl: 'pages/main/index.html',
            controller: 'MainController'
        }).
        when('/sport-store', {
            templateUrl: 'pages/sport/index.html',
            controller: 'sportsStoreCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);
 
