'use strict';

var app = angular.module('Application', []);

//app.factory('UserFactory', function ($resource) {
//    return $resource('Users/users.json')
//});

app.controller('MainCtrl', function ($scope) {
    $scope.text = 'Witaj, świecie!';
});
