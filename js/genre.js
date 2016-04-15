(function () {
    'use strict';

    angular
        .module('app')
        .controller('GenreController', GenreController);

    GenreController.$inject = ['$location'];
    function GenreController($location) {
        var vm = this;


        (function initController() {
            // reset login status
        })();

    }

})();
