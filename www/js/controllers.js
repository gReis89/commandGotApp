angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CharsCtrl', function($scope, Chars) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  Chars.all().then(function(resp){
      $scope.chars = resp.data;
  });
  $scope.remove = function(char) {
    Chars.remove(char);
  };
})

.controller('CharDetailCtrl', function($scope, $stateParams, Chars) {
  var viewid = $stateParams.charId;
  $scope.refresh = function(){
    Chars.get(viewid).then(function(resp){
        $scope.char = resp.data;
    });
  };

  $scope.like = function(id){
    Chars.like(id).then(function(resp){
      $scope.char.likes = resp.data.likes +1;
      $scope.$apply();
    });
  };

  $scope.refresh();

});
