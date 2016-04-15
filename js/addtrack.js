(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddTrackController', AddTrackController);

    AddTrackController.$inject = ['$location'];
    function AddTrackController($location) {
        var vm = this;		
		vm.example7model = [];
		vm.example7data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
		vm.example7settings = {externalIdProp: ''};
		vm.changeMenu = function(tabName) {
			if(tabName === 'home') {
				$scope.isHomeActive = "active";
				$scope.isGenreActive = "";
			} else {
				$scope.isHomeActive = "";
				$scope.isGenreActive = "active";
			}
		}		

        (function initController() {
            // reset login status
        })();

    }

})();
