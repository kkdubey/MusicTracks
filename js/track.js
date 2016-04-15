(function () {
    'use strict';

    angular
        .module('app')
        .controller('TrackController', TrackController);

    TrackController.$inject = ['$location', '$http'];
    function TrackController($location, $http) {
        var vm = this;
        vm.Tracks = [];
        vm.GetGenreFromTrack = function(track) {
            var genre = '';
            angular.forEach(track.genres, function(value, key) {
              genre = genre + value.name + ' | ';
            });
            return genre;
        };

        vm.EditTrack = function(Track) {
            $location.path('/addtrack').search({id: Track.id, title: Track.title, rating: Track.rating, genres: JSON.stringify(Track.genres)});
        };

        (function initController() {
            $http({
              method: 'GET',
              url: 'http://104.197.128.152:8000/v1/tracks'
            }).then(function successCallback(response) {
                console.log(response);
                vm.Tracks = response.data;
              }, function errorCallback(response) {
                console.log(response);
            });
        })();

    }

})();
