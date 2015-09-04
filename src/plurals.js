/* global angular */

function pluralService($locale) {
    this.getPlural = function(count) {
        return $locale.pluralCat(count);
    };
}

angular.module('plurals', [])
    .service('plural', ['$locale', pluralService])
    ;
