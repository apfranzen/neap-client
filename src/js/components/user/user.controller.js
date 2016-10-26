(function() {

  'use strict';

  angular
    .module('myApp.components.user', [])
    .controller('userController', userController);

  userController.$inject = ['userService'];

  function userController(userService) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'hello, world!';
    vm.user = {};
    vm.newuser = {};
    vm.onSubmit = function() {
      userService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      vm.user = {};
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
