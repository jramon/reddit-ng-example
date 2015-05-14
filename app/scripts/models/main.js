(function() {
    'use strict';

    angular
        .module('redditNgExampleApp')
        .service('MainModel', MainModel);

    function MainModel ($http) {
      var model = this,
          url = 'data/covers.json';

        model.getCovers =  function () {
          return $http.get(url)
                      .then(function (result) {
                          console.log(result.data);
                      });
        }
    }

})();
