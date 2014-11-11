'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });

  if(window.blahthis) {
  	var v = 1 + window.blahthis;
  	console.log(v);
  }
}])

.controller('View2Ctrl', [function() {

}]);