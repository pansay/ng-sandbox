/* global angular */

angular.module('spies', []);

function someApiService() {
    var test = 'oho';
    this.getTest = test;
    this.getTestB = function() {
        return test;
    };
}

angular.module('spies')
    .service('someApi', someApiService);