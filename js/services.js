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
        this.test = 'does this work?'
    }

})();
