angular.module("exampleApp")
.directive("triButton", function () {
    return {
        scope: { counter: "=counter" },
        link: function (scope, element, attrs) {
            element.on("click", function (event) {
                console.log("Kliknięcia  przycisku: " + event.target.innerText);
                scope.$apply(function () {
                    scope.counter++;
                });
            });
        }
    }
});
