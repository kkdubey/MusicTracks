(function () {
    'use strict';

    angular
        .module('app')
        .controller('TrackController', TrackController);

    TrackController.$inject = ['$location'];
    function TrackController($location) {
        var vm = this;


        (function initController() {
            // reset login status
        })();

    }

})();
