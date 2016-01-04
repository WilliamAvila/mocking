exports.createCalculator = function(a,b) {
  return {
    sum: function(){
      return  a + b;
    },
    sub: function() {
      return a - b;
    },
    logSum: function(){
      var result = sum();
      console.log(result);
    }
  };
};

exports.createOperation = function(name,op) {
  return {
        name: name,
        result: op.calculate(),
        calc:exports.createCalculator
      };
};
