// 6. Create categories.component.js file and create component called categories
// that shows all available categories in the menu to the user.
(function() {
    'use strict';
    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menu/templates/categories.template.html',
            bindings: {
                list: '<'
            }
        });
})();
