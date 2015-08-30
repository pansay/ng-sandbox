/* global describe, it, angular, expect, module, beforeEach, inject, spyOn */

describe('spies', function() {

    it('should be defined', function() {
        expect(angular.module('spies')).toBeDefined();
    });

    beforeEach(module('spies'));

    describe('service1', function() {

        beforeEach(inject(function($injector) {
            this.service1 = $injector.get('service1');
        }));

        it('should be defined', function() {
            expect(this.service1).toBeDefined();
        });

        it('should return `whatsoever`', function() {
            expect(this.service1.getTest()).toBe('whatsoever');
        });

    });

    describe('service2', function() {

        beforeEach(inject(function($injector) {
            this.service2 = $injector.get('service2');
        }));

        it('should be defined', function() {
            expect(this.service2).toBeDefined();
        });

        it('should return `whatsoever`', function() {
            expect(this.service2.getTest()).toBe('whatsoever');
        });

    });

    describe('service1 - spied on', function() {

        beforeEach(inject(function($injector) {
            this.service1 = $injector.get('service1');
            spyOn(this.service1, 'getTest').and.returnValue('whatsoever');
        }));

        it('should be defined', function() {
            expect(this.service1).toBeDefined();
        });

        it('should return `whatsoever`', function() {
            expect(this.service1.getTest()).toBe('whatsoever');
        });

    });

    describe('service2 - spied on', function() {

        beforeEach(inject(function($injector) {
            this.service1 = $injector.get('service1');
            this.service2 = $injector.get('service2');
            spyOn(this.service1, 'getTest').and.returnValue('whatsoever');
        }));

        it('should be defined', function() {
            expect(this.service2).toBeDefined();
        });

        it('should return `whatsoever`', function() {
            expect(this.service2.getTest()).toBe('whatsoever');
        });

    });

});