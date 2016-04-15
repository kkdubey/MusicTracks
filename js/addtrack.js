(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddTrackController', AddTrackController);

    AddTrackController.$inject = ['$location', 'angularjs-dropdown-multiselect', 'ui.bootstrap'];
    function AddTrackController($location) {
        var vm = this;		
		vm.example7model = [];
		vm.example7data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
		vm.example7settings = {externalIdProp: ''};	

        (function initController() {
            // reset login status
        })();

    }

})();
