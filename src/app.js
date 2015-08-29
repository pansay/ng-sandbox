/* global angular */

angular.module('sandbox', [])
    .constant('token', 'abc');

function unicornLauncherA (token) {
    return {
        getToken: token
    };
}

function unicornLauncherB (token) {
    this.getToken = token;
    return this;
}

function unicornLauncherC (token) {
    this.getToken = token;
}

function unicornLauncherD (token) {
    return new unicornLauncherC(token);
}

angular.module('sandbox')
    .factory('unicornLauncherAfactory', ['token', unicornLauncherA])
    .factory('unicornLauncherBfactory', ['token', unicornLauncherB])
    .factory('unicornLauncherCfactory', ['token', unicornLauncherC])
    .factory('unicornLauncherDfactory', ['token', unicornLauncherD])
    .service('unicornLauncherAservice', ['token', unicornLauncherA])
    .service('unicornLauncherBservice', ['token', unicornLauncherB])
    .service('unicornLauncherCservice', ['token', unicornLauncherC])
    .service('unicornLauncherDservice', ['token', unicornLauncherD]);