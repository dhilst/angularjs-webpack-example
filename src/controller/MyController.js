var app = require('../index');

app.controller('MyController', [
    '$scope',
    '$routeParams',
function ($scope, $routeParams){
    $scope.greeting = 'View 1 works!';
}]);
