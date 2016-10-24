(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    /*jshint validthis: true */
    const vm = this;
    coffeeService.getAllCoffee()
    .then((data) => {
      console.log('data: ', data);
      vm.coffee = data.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
  }

})();
