/* global describe, it, angular, expect, module, beforeEach, inject */

describe('decoration', function() {

    it('should be defined', function() {
        expect(angular.module('decoration')).toBeDefined();
    });

    beforeEach(module('decoration'));

    describe('service1', function() {

        beforeEach(inject(function($injector) {
            this.service1 = $injector.get('service1');
        }));

        it('should be defined', function() {
            expect(this.service1).toBeDefined();
        });

        it('should return `whatever`', function() {
            expect(this.service1.getTest()).toBe('whatever');
        });

    });

});
