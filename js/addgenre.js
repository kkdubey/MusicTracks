(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddGenreController', AddGenreController);

    AddGenreController.$inject = ['$location', '$http'];
    function AddGenreController($location, $http) {
        var vm = this;
        vm.Genre = { id: '', name: ''};
        var id = $location.search().id;
        var name = $location.search().name;
        if (id) {
            vm.Genre = { id: id, name: name};
        }
        vm.SaveGenre = function(Genre) {
            if (Genre.id) {
                $http({
                  method: 'POST',
                  url: 'http://104.197.128.152:8000/v1/genres/' + Genre.id,
                  data: { "name" : Genre.name }
                }).then(function successCallback(response) {
                    vm.Genres = response.data;
                    $location.path('/genre')
                  }, function errorCallback(response) {
                    console.log(response);
                });
            } else {
                $http({
                  method: 'POST',
                  url: 'http://104.197.128.152:8000/v1/genres',
                  data: Genre
                }).then(function successCallback(response) {
                    console.log(response);
                    vm.Genres = response.data;
                  }, function errorCallback(response) {
                    console.log(response);
                });
            }
            console.log(Genre);
        };

        (function initController() {
            // reset login status
        })();

    }

})();
