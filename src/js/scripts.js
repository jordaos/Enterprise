var app = angular.module('myApp', []);

function LoginController($scope, $timeout) {
    $scope.isLoading = false;
    $scope.loginInvalid = false;
    $scope.error = {message: '', show: false}

    $scope.login = function() {
        if ($scope.loginForm.$valid) {
            $scope.isLoading = true;
            $scope.error = {message: 'Login e/ou senha inválido(s).', show: true};

            $timeout(function () {
                $scope.isLoading = false;

                $timeout(function () {
                    $scope.error = {message: '', show: false}
                }, 3000);
            }, 3000);
        } else {
            $scope.error = {message: 'Preencha os campos corretamente!', show: true};
            $timeout(function () {
                $scope.error = {message: '', show: false}
            }, 3000);
        }
    }
}

app.controller('login', LoginController);