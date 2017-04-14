var app = angular.module("exampleApp", []);

app.controller("firstController", function ($scope) {

    $scope.dataValue = "Witaj, Adam";

    $scope.reverseText = function () {
        $scope.dataValue = $scope.dataValue.split("").reverse().join("");
    }
});

app.controller("secondController", function ($scope) {

    $scope.dataValue = "Witaj, Jacqui";

    $scope.changeCase = function () {
       $scope.dataValue = $scope.dataValue.toUpperCase();
    };
});