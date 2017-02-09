app.controller('MainController', ['$scope', function ($scope) {
        $scope.title = 'Helo word';
        
        $scope.change = function(status) {
            console.log('Change', status);
        }
    }]);
