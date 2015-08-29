/* global describe, it, angular, expect, module, beforeEach, inject */

describe('ngSandbox', function() {

    var injected = {};
    var expected = {};

    expected.token = 'abc';

    it('should be defined', function() {
        expect(angular.module('sandbox')).toBeDefined();
    });

    beforeEach(module('sandbox'));

    var variants = [
        'unicornLauncherFactoryA',
        'unicornLauncherFactoryB'
    ];

    for (var i = 0; i < variants.length; ++i) {

        var tested = variants[i];

        beforeEach(inject(function($injector) {
            injected.tested = $injector.get(tested);
        }));

        describe(tested, function() {

            it('should be defined', function() {
                expect(injected.tested).toBeDefined();
            });

            it('should have the token', function() {
                expect(injected.tested.getToken).toBeDefined();
                expect(injected.tested.getToken).toBe(expected.token);
            });

        });
    }

});