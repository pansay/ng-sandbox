/* global describe, it, angular, expect, module, beforeEach */

describe('ngSandbox', function() {

    var injected = {};

    it('should be defined', function() {
        expect(angular.module('sandbox')).toBeDefined();
    });

    beforeEach(module('sandbox'));
    beforeEach(function($injector) {
        injected.factory = $injector.get('unicornLauncherFactory');
    });

    describe('unicornLauncherFactory', function() {

        it('should be defined', function() {
            expect(injected.factory).toBeDefined();
        });

    });

});