'use strict';

angular.module('myApp.view1', ['ngRoute','angular-gcm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
  $scope.gcmSend = function(sub) {
              // send token to server and save it
           console.log(sub)

          }

          $scope.sends=function(notif){
            var data ={
              "message": notif.title,
              to:'/topics/notify'

            }

                       var config = {
                           headers : {
                                Authorization:'key=AIzaSyDUuGIbu_7ODJnLIKiGkLACae8lwKCFlFk',
                               'Content-Type': 'application/json'
                           }
                       }

             $http.post('https://gcm-http.googleapis.com/gcm/send', data,config)
          }
}]);
