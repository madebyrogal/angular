describe("Test kontrolera", function () {

    // Przygotowanie.
    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        controller = $controller("defaultCtrl", { 
            $scope: mockScope
        });
    }));

    // Działanie i asercje.
    it("utworzenie zmiennej", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("inkrementacja licznika", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });
});
