describe("Test usługi", function () {

    beforeEach(angular.mock.module("exampleApp"));

    it("inkrementacja licznika", function () {
        angular.mock.inject(function (counterService) {
            expect(counterService.getCounter()).toEqual(0);
            counterService.incrementCounter();
            expect(counterService.getCounter()).toEqual(1);
        });
    });
});
