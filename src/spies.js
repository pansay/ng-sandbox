/* global angular */

function service1() {
    var test = 'whatsoever';
    this.getTest = function() {
        return test;
    };
}

function service2(service1) {
    this.getTest = function() {
        return service1.getTest();
    };
}

angular.module('spies', [])
    .service('service1', service1)
    .service('service2', ['service1', service2])
    ;
