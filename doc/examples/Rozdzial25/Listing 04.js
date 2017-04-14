describe("Pierwszy test", function () {

    // Przygotowanie scenariusza.
    var counter;

    beforeEach(function () {
        counter = 0;
    });

    it("inkrementacja wartości", function () {
        // Próba przeprowadzenia operacji.
        counter++;
        // Asercja (weryfikacja wyniku).
        expect(counter).toEqual(1);
    })

    it("dekrementacja wartości", function () {
        // Próba przeprowadzenia operacji.
        counter--;
        // Asercja (weryfikacja wyniku).
        expect(counter).toEqual(-1);
    })
});
