angular.module("customFilters", []) .filter("unique", function () {
    console.log('test filtrow');
    return function (data, propertyName) {
        if (angular.isArray(data) && angular.isString(propertyName)) {
            var results = [];
            var keys = {};
            for (var i = 0; i < data.length; i++) {
                var val = data[i][propertyName];
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val); }
            }
            return results;
        }
        else {
            return data;
        }
    };
});