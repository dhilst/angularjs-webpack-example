var angular = require('angular');
var ngRoute = require('angular-route');

var MyControllerTemplate = require('ngtemplate-loader!html-loader!./views/MyController.html');

var app = angular.module('MyApp', [
    'ngRoute',
]);

module.exports = app;

app.config([
    '$routeProvider',
function($routeProvider) {
    $routeProvider
        .when('/view1', {controller: 'MyController', templateUrl: MyControllerTemplate});
    $routeProvider
        .when('/view2', {controller: 'MyController2', templateUrl: MyControllerTemplate});

}]);

require('./controller/MyController');
require('./controller/MyController2');
