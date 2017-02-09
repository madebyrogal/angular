//Filters for loop
app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=1; i<=total; i++) {
      input.push(i);
    }

    return input;
  };
});
//Filter set yes or now instead true false
app.filter('yes_no', function() {
    return function(condition) {
        
        return condition ? 'Yes' : 'No';
    };
});
//Uppercase first letter
app.filter('upperFirst', function() {
    return function(text) {
        
        return _.upperFirst(text);
    }
});
