app.controller('MainController', ['$scope', function ($scope) {
        $scope.title = 'Helo word';
        $scope.cartOffer = {
            offerId: 123456,
            additionalServices: [
                {
                    name: "Montaż",
                    id: "MONTAZ"
                },
                {
                    name: "Wniesienie",
                    id: "WNIESIENIE"
                }
            ],
            applicableAdditionalServices: [
                {
                    definitionId: "MONTAZ",
                    validationResult: {
                        configurations: [
                            {
                                available: true,
                                price: {
                                    amount: "45.12",
                                    currency: "PLN"
                                }
                            }
                        ]
                    }
                },
                {
                    definitionId: "WNIESIENIE",
                    validationResult: {
                        configurations: [
                            {
                                available: true,
                                price: {
                                    amount: "25.12",
                                    currency: "PLN"
                                }
                            }
                        ]
                    }
                }
            ]
        };

        $scope.selectService = function (service, offerId, status) {
            console.log('Change - service', service);
            console.log('Change - offerId', offerId);
            console.log('Change - status', status);
        };
        
        $scope.getServicePrice = function(applicableAdditionalServices, currentService) {
            var price = '';
            _.each(applicableAdditionalServices, function(applicableService) {
                if(applicableService.definitionId === currentService.id && _.first(applicableService.validationResult.configurations).available) {
                    price = _.first(applicableService.validationResult.configurations).price.amount;
                    price += ' ' + _.first(applicableService.validationResult.configurations).price.currency;
                }
            });
            
            return price;
        };
    }]);
