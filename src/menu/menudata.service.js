// 5. Create menudata.service.js file and create a service called MenuDataService in
// it. This service should be declared on the data module, not on the MenuApp module.
// The MenuDataService should have 2 methods:
// a) getAllCategories - this method should return a promise which is a result of using
// the $http service, using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
// b) getItemsForCategory(categoryShortName) - this method should return a promise
// which is a result of using the $http service, using the following REST API
// endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server, your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method.

(function() {
    'use strict';
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com');
    MenuDataService.$inject = ['$http', 'APIBasePath'];

    // a) getAllCategories - this method should return a promise which is a result of using
    // the $http service, using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
    function MenuDataService($http, APIBasePath) {
        var service = this;
        service.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: (APIBasePath + '/categories.json')
            }).then(function success(result) {
                return result.data;
            }, function error(response) {
                throw new Error('Fail to fetch details!');
            });
        };

        // b) getItemsForCategory(categoryShortName) - this method should return a promise
        // which is a result of using the $http service, using the following REST API
        // endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server,
        // your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory
        // method.
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: 'GET',
                url: (APIBasePath + '/menu_items.json'),
                params: {
                    category: categoryShortName
                }
            }).then(function success(result) {
                return result.data;
            }, function error(response) {
                throw new Error('Fail to fetch details!');
            });
        };
    }
})();
