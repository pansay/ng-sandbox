/* global describe, it, angular, expect, module, beforeEach, inject */

describe('ngSandbox', function() {

    var expected = {};

    expected.token = 'abcdef';

    it('should be defined', function() {
        expect(angular.module('sandbox')).toBeDefined();
    });

    var variants = [
        'unicornLauncherAfactory',
        'unicornLauncherBfactory',
        //'unicornLauncherCfactory',
        'unicornLauncherDfactory',
        'unicornLauncherAservice',
        'unicornLauncherBservice',
        'unicornLauncherCservice',
        'unicornLauncherDservice',
        'unicornLauncherEservice'
    ];

    beforeEach(module('sandbox'));

    function test(tested) {

        beforeEach(inject(function($injector) {
            this.tested = $injector.get(tested);
        }));

        it('should be defined', function() {
            expect(this.tested).toBeDefined();
        });

        it('should have the token', function() {
            expect(this.tested.getToken).toBeDefined();
            expect(this.tested.getToken).toBe(expected.token);
        });
    }

    var tested,
        i;
    for (i = 0; i < variants.length; ++i) {
        tested = variants[i];
        describe(tested, function() {
            test(tested);
        });

    }

});