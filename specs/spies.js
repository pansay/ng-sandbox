/* global describe, it, angular, expect, module, beforeEach, inject, spyOn */

describe('spies', function() {

    it('should be defined', function() {
        expect(angular.module('spies')).toBeDefined();
    });

    beforeEach(module('spies'));

    describe('someApiService', function() {

        beforeEach(inject(function($injector) {
            this.someApi = $injector.get('someApi');
        }));

        it('should be defined', function() {
            expect(this.someApi).toBeDefined();
        });

        it('should return `oho`', function() {
            expect(this.someApi.getTest).toBe('oho');
        });

        it('should return `oho` too from testB', function() {
            expect(this.someApi.getTestB()).toBe('oho');
        });

    });

    describe('someApiService - spied on', function() {

        beforeEach(inject(function($injector) {
            this.someApi = $injector.get('someApi');
            spyOn(this.someApi, 'getTest').and.returnValue('oho');
            //spyOn(this.someApi, 'getTestB').and.returnValue('oho');
            spyOn(this.someApi, 'getTestB').and.callThrough();
        }));

        it('should be defined', function() {
            expect(this.someApi).toBeDefined();
        });

        it('should return `oho`', function() {
            expect(this.someApi.getTest()).toBe('oho');
        });

        it('should return `oho` too from testB', function() {
            expect(this.someApi.getTestB()).toBe('oho');
        });


    });

});