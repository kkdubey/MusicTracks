(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddTrackController', AddTrackController);

    AddTrackController.$inject = ['$location', '$http'];
    function AddTrackController($location, $http) {
        var vm = this;
        vm.Track = { id: '', title: '', genres: [] };
        var id = $location.search().id;
        var title = $location.search().title;
        var genres = $location.search().genres;
        var rating = $location.search().rating;
        if (id) {
            vm.Track = { id: id, title: title, rating: rating, genres: JSON.parse(genres) };
        }
        console.log(vm.Track);
		vm.Genres = [];
		vm.MultiSelectSetting = {externalIdProp: ''};	

        vm.SaveTraks = function(Track) {
            if (Track.id) {
                var _genres = [];
                angular.forEach(Track.genres, function(value, key) {
                  _genres.push(value.id);
                });
                $http({
                  method: 'POST',
                  url: 'http://104.197.128.152:8000/v1/tracks/' + Track.id,
                  data: { id: Track.id, "title" : Track.title, rating: Track.rating, genres: _genres }
                }).then(function successCallback(response) {
                    //vm.Track = response.data;
                    $location.path('/track');
                  }, function errorCallback(response) {
                    console.log(response);
                });
            } else {
                $http({
                  method: 'POST',
                  url: 'http://104.197.128.152:8000/v1/tracks',
                  data: { "title" : Track.title, rating: Track.rating, genres: _genres }
                }).then(function successCallback(response) {
                    console.log(response);
                    //vm.Track = response.data;
                    $location.path('/track');
                  }, function errorCallback(response) {
                    console.log(response);
                });
            }
            console.log(Track);
        };

        (function initController() {
            $http({
              method: 'GET',
              url: 'http://104.197.128.152:8000/v1/genres'
            }).then(function successCallback(response) {
                angular.forEach(response.data, function(value, key) {
                  value.label = value.name;
                });
                vm.Genres = response.data;

              }, function errorCallback(response) {
                console.log(response);
            });
        })();

    }

})();
