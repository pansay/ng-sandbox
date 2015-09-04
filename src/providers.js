/* global angular */

function unicornLauncherA (token) {
    var tokenSuffix = 'def';
    return {
        getToken: token + tokenSuffix
    };
}

function unicornLauncherB (token) {
    var tokenSuffix = 'def';
    this.getToken = token + tokenSuffix;
    return this;
}

function unicornLauncherC (token) {
    var tokenSuffix = 'def';
    this.getToken = token + tokenSuffix;
}

function unicornLauncherD (token) {
    return new unicornLauncherC(token);
}

function unicornLauncherE (token) {
    this.$get = ['token', function () {
        var tokenSuffix = 'def';
        this.getToken = token + tokenSuffix;
        return this;
    }];
}

function unicornLauncherEdecorated ($delegate) {
    return $delegate;
}

angular.module('providers', [])
    .constant('token', 'abc')
    .factory('unicornLauncherAfactory', ['token', unicornLauncherA])
    .factory('unicornLauncherBfactory', ['token', unicornLauncherB])
    .factory('unicornLauncherCfactory', ['token', unicornLauncherC])
    .factory('unicornLauncherDfactory', ['token', unicornLauncherD])
    .service('unicornLauncherAservice', ['token', unicornLauncherA])
    .service('unicornLauncherBservice', ['token', unicornLauncherB])
    .service('unicornLauncherCservice', ['token', unicornLauncherC])
    .service('unicornLauncherDservice', ['token', unicornLauncherD])
    .provider('unicornLauncherEservice', ['token', unicornLauncherE])
    .config(['$provide', function($provide) {
        $provide.decorator('unicornLauncherCservice', unicornLauncherEdecorated);
    }])
    ;
