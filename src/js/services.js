(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http']

    function coffeeService($http) {
      this.getAllCoffee = function() {
        return $http.get('https://enigmatic-gorge-65304.herokuapp.com/coffee');
      };

      this.getSingleCoffee = function(id) {
        return $http.get(`https://enigmatic-gorge-65304.herokuapp.com/coffee/${id}`);
      }

      this.addCoffee = function(coffee) {
        return $http.post('https://enigmatic-gorge-65304.herokuapp.com/coffee', coffee);
      }
    }

})();
