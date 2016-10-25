(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService)
    .service('userService', userService);

  coffeeService.$inject = ['$http'];
  userService.$inject = ['$http'];

    function coffeeService($http) {
      this.getAllCoffee = function() {
        return $http.get('http://localhost:8000/coffee');
      };

      this.getSingleCoffee = function(id) {
        return $http.get(`http://localhost:8000/coffee/${id}`);
      };

      this.addCoffee = function(coffee) {
        return $http({
          method: 'POST',
          url: 'http://localhost:8000/coffee',
          data: coffee
        });
      };
    }

    function userService($http) {
      const baseURL = 'http://localhost:8000/user/';

      this.login = function(user) {
        return $http({
          method: 'POST',
          url: baseURL + 'login',
          data: user,
          headers: {'Content-type': 'application/json'}
        })
      }
      // this.test = 'hi';
      // this.login = function(user) {
      //   return $http({
      //     method: 'POST',
      //     url: 'http://localhost:8000/user',
      //     data: user
      //   });
      // }

      this.register = function(user) {
        return $http({
          method: 'POST',
          url: baseURL + 'register',
          data: user,
          headers: {'Content-type': 'application/json'}
        })
      }
    }



})();
