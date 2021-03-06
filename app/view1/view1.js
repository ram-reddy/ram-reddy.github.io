'use strict';

angular.module('myApp.view1', ['ngRoute','angular-gcm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
  $scope.notif={};
  $scope.gcmSend = function(sub) {

$scope.sub=sub;
$scope.notif.to=sub.endpoint.replace("https://android.googleapis.com/gcm/send/","");
              // send token to server and save it
           console.log(sub)
           
           setTimeout(function(){
             $scope.$apply();
             
           },100)

          }

          $scope.sends=function(notif){
            var data ={
              "title": notif.title,
                "message": notif.body,
                data:{
                  "title": notif.title,
                    "body": notif.body,
                  },
                  
              to:notif.to
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
