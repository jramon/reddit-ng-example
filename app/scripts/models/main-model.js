(function() {
    'use strict';

    angular
        .module('redditNgExampleApp')
        .service('MainModel', MainModel);

    function MainModel ($http) {
      var model = this,
          setCovers,
          url = 'data/covers.json';

      model.getCovers = function () {

        return $http.get(url)
          .then(setCovers);
      }

      setCovers = function (data) {
        return data.data.data.children;
      }

    }

})();
