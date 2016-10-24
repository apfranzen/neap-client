(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

    function coffeeService() {
      this.test = 'does this work?'
    }

})();
