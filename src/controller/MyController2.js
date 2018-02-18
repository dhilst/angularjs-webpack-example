var app = require('../index');

app.controller('MyController2', [
    '$scope',
    '$routeParams',
function ($scope, $routeParams){
    $scope.greeting = 'View 2 works!';
}]);
