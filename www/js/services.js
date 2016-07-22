angular.module('starter.services', [])

.factory('Chars', function($http) {
  // Might use a resource here that returns a JSON array
  return {
    all: function() {
      return $http({
        method: 'GET',
        url: ENV + 'characters'
      });
    },
    like: function(id) {
      return $http({
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: ENV + 'characters/like',
        data: 'id='+ id
      });
    },
    get: function(id) {
      return $http({
        method: 'GET',
        url: ENV + 'characters/' + id
      });
    }
  };
});
