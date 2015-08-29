/* global angular */

angular.module('sandbox', [])
    .constant('token', 'abc');

function unicornLauncherFactoryA (token) {
    // this.token = token;
    // this.launchedCount = 0;
    // this.launch = function() {
    //     this.launchedCount++;
    // };
    return {
        getToken: token
    };
}

var unicornLauncherFactoryB = function (token) {
    // this.token = token;
    // this.launchedCount = 0;
    // this.launch = function() {
    //     this.launchedCount++;
    // };
    return {
        getToken: token
    };
};

angular.module('sandbox')
    .factory('unicornLauncherFactoryA', ['token', unicornLauncherFactoryA])
    .factory('unicornLauncherFactoryB', ['token', unicornLauncherFactoryB]);