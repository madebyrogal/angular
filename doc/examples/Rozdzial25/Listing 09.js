describe("Test kontrolera", function () {

    // Przygotowanie.
    var mockScope, controller, backend, mockInterval, mockTimeout;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "productData.json").respond(
        [{ "name": "Jabłka", "category": "Owoce", "price": 1.20 },
        { "name": "Banany", "category": "Owoce", "price": 2.42 },
        { "name": "Brzoskwinie", "category": "Owoce", "price": 2.02 }]);
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, 
           $http, $interval, $timeout) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;
        $controller("defaultCtrl", {
            $scope: mockScope,
            $http: $http,
            $interval: mockInterval,
            $timeout: mockTimeout
        });
        backend.flush();
    }));

    // Działanie i asercje.
    it("utworzenie zmiennej", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("inkrementacja licznika", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it("wykonanie żądania Ajax", function () {
        backend.verifyNoOutstandingExpectation();
    });

    it("przetworzenie danych", function () {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("zachowanie kolejności danych", function () {
        expect(mockScope.products[0].name).toEqual("Jabłka");
        expect(mockScope.products[1].name).toEqual("Banany");
        expect(mockScope.products[2].name).toEqual("Brzoskwinie");
    });

    it("ograniczenie liczby operacji do 10", function () {
        for (var i = 0; i < 11; i++) {
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCounter).toEqual(10);
    });

    it("inkrementacja licznika zegara", function () {
        mockTimeout.flush(5000);
        expect(mockScope.timerCounter).toEqual(1);
    });
});
