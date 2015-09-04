/* global describe, it, angular, expect, module, beforeEach, inject */

describe('plurals', function() {

    it('should be defined', function() {
        expect(angular.module('plurals')).toBeDefined();
    });

    beforeEach(module('plurals'));

    describe('plural', function() {

        beforeEach(inject(function($injector) {
            this.plural = $injector.get('plural');
        }));

        it('should return correct plural category', function() {
            expect(this.plural.getPlural(1)).toBe('one');
            expect(this.plural.getPlural(5)).toBe('other');
        });

    });

});