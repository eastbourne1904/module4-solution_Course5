// 9. Create routes.js file and configure your routes and view states in it. These routes
// should be defined in the MenuApp module.
(function() {
    'use strict';
    angular.module('MenuApp')
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
        $uiViewScrollProvider.useAnchorScroll();
        $urlRouterProvider.otherwise('/');
        $stateProvider
        // Hint: don't try to define the states all at once. Define one state, including whatever
        // it needs and make sure it works all the way to the point when you can see the results
        // on the screen. Then, move on to the next view state. That does mean that you will have
        // to leave routes.js and define all the other artifacts listed below and then come back to it, etc.
            .state('home', {
                url: '/',
        // Hint: The home state will not need a controller. Just a template.
                templateUrl: 'src/menu/templates/home.template.html'
            })
            // Hint: The categories state can have a controller as well as a resolve. The resolve will
            // use the MenuDataService to retrieve categories and inject them into the controller. The
            // controller can then expose the retrieved categories object such that it can be simply
            // passed into the categories component.
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/templates/main-categories.template.html',
                controller: 'MainCategoriesController as mainCategories',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            // Hint: The items state can have the same type of setup as the categories state.          
            .state('items', {
                url: '/list/{shortName}',
                templateUrl: 'src/menu/templates/main-items.template.html',
                controller: 'MainItemsController as mainItems',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            });
    }
})();
