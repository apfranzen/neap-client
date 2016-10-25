(function() {

  'use strict';

  angular
    .module('myApp.components.user', [])
    .controller('userController', userController);

  userController.$inject = ['$scope', 'userService'];

  function userController($scope, userService) {
    const vm = this;
    this.greeting = 'Hello World';
    vm.user = {};
    vm.onSubmit = function() {
      userService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      // to reset the form
      vm.user = {}
    };
    // to test that the userService is wired correctly
    // console.log(userService.test);
    vm.register = function() {
      userService.register(vm.newUser)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      vm.newUser = {};      
    };
  }

})();
