(function () {
    'use strict';

    angular
        .module('app')
        .controller('GenreController', GenreController);

    GenreController.$inject = ['$location', '$http'];
    function GenreController($location, $http) {
        var vm = this;
        vm.Genres = [];
        vm.EditGenre = function(Genre) {
            $location.path('/addgenre').search({id: Genre.id, name: Genre.name});
        };


        (function initController() {
            $http({
              method: 'GET',
              url: 'http://104.197.128.152:8000/v1/genres'
            }).then(function successCallback(response) {
                console.log(response);
                vm.Genres = response.data;
              }, function errorCallback(response) {
                console.log(response);
            });

        })();

    }

})();
