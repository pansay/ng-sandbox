/* global angular */

function service1() {
    var test = 'whatever';
    this.getTest = function() {
        return test;
    };
}

function service1decorator($delegate) {

    return $delegate;
}

angular.module('decoration', [])
    .service('service1', service1)
    .config(['$provide', function($provide) {
        $provide.decorator('service1', ['$delegate', service1decorator]);
    }])
    ;
