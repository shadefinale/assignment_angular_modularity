app.factory('puppies', ['$http', function($http){

  var obj = {};

  obj.getPuppies = function(){
    return $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json');
  };

  return obj;

}]);