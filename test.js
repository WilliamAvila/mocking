var sinon = require('sinon');
var createCalculator = require('./calculator.js').createCalculator;
var createOperation = require('./calculator.js').createOperation;
var createDefaultCalculator = require('./calculator.js').createDefaultCalculator;
var expect = require('chai').expect


// This is a Dummy
it('should instantiate the Calculator', function(){
  var dummyOperators = {a:0,b:0};

  var logger = createCalculator(dummyOperators);

  expect(logger).to.be.an('object');
});

// This is a Fake
it('should define the calculate method after creating a new Operation', function (){
  var fakeOperation = {
    calculate: function(){
        return 1;
    }
  };
  var resultOp = createOperation('mult',fakeOperation);

  expect(resultOp).to.be.deep.equal({name:'mult',result:1});
});
