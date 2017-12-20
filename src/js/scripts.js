var app = angular.module('myApp', []);

function LoginController($scope, $timeout) {
    $scope.isLoading = false;
    $scope.loginInvalid = false;

    $scope.login = function() {
        $scope.isLoading = true;
        $scope.loginInvalid = true;
        
        $timeout(function () {
            $scope.isLoading = false;
        }, 3000);
    }
}

app.controller('login', LoginController);