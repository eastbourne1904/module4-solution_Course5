// 3. Create a file called menuapp.module.js and declare an Angular module to match your ng-app declaration.
(function() {
    'use strict';
    angular.module('MenuApp', ['data', 'ui.router', 'Loader']);
})();
// 4. Create data.module.js file and declare another module in it called data.
// Make sure the MenuApp module lists the data module as a dependency.
