describe("Test filtru", function () {

    var filterInstance;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($filter) {
        filterInstance = $filter("labelCase");
    }));

    it("zmiana wielkości liter", function () {
        var result = filterInstance("testowane wyrażenie");
        expect(result).toEqual("Testowane wyrażenie");
    });

    it("odwrócenie zmiany", function () {
        var result = filterInstance("testowane wyrażenie", true);
        expect(result).toEqual("tESTOWANE WYRAŻENIE");
    });

});
