(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http']

    function coffeeService($http) {
      this.getAllCoffee = function() {
        return $http.get('http://localhost:8000/coffee');
      };

      this.getSingleCoffee = function(id) {
        return $http.get(`http://localhost:8000/coffee/${id}`);
      }

      this.addCoffee = function(coffee) {
        return $http.post({
          method: 'POST',
          url: 'http://localhost:8000/coffee',
          data: coffee,
          headers: {}});
      }
    }

})();
