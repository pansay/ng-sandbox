/* global describe, it, angular, expect, module, beforeEach, inject */

describe('ngSandbox', function() {

    //var injected = {};
    var expected = {};

    expected.token = 'abc';

    it('should be defined', function() {
        expect(angular.module('sandbox')).toBeDefined();
    });

    var variants = [
        'unicornLauncherAfactory',
        'unicornLauncherBfactory',
        //'unicornLauncherCfactory',
        'unicornLauncherAservice',
        'unicornLauncherBservice',
        'unicornLauncherCservice'
    ];

    var tested;

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

    var i;
    for (i = 0; i < variants.length; ++i) {
        tested = variants[i];
        describe(tested, function() {
            test(tested);
        });

    }

});