
exports.createCalculator = function(a,b) {
  return {
    sum: function() {
      return a + b;
    },
    sub: function() {
      return a - b;
    }
  }
};

exports.createOperation = function(name,op) {
  return {
        name: name,
        result: op.calculate()
      };
};
