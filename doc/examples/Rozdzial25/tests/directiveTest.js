describe("Test dyrektywy", function () {

    var mockScope;
    var compileService;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($rootScope, $compile) {
        mockScope = $rootScope.$new();
        compileService = $compile;
        mockScope.data = [
            { name: "Jabłka", category: "Owoce", price: 1.20, expiry: 10 },
            { name: "Banany", category: "Owoce", price: 2.42, expiry: 7 },
            { name: "Brzoskwinie", category: "Owoce", price: 2.02, expiry: 6 }];
    }));

    it("wygenerowanie listy elementów", function () {

        var compileFn = compileService("<div unordered-list='data'></div>");
        var elem = compileFn(mockScope);

        expect(elem.children("ul").length).toEqual(1);
        expect(elem.find("li").length).toEqual(3);
        expect(elem.find("li").eq(0).text()).toEqual("Jabłka");
        expect(elem.find("li").eq(1).text()).toEqual("Banany");
        expect(elem.find("li").eq(2).text()).toEqual("Brzoskwinie");
    });

});
