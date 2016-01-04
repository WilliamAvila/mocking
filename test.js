var sinon = require('sinon');
var createCalculator = require('./calculator.js').createCalculator;
var createOperation = require('./calculator.js').createOperation;
var logSum = require('./calculator.js').logSum;
var expect = require('chai').expect;
var spySum;

// This is a Dummy
it('should instantiate the Calculator', function(){
  var dummyOperators = {a:0,b:0};

  var calc = createCalculator(dummyOperators);
  expect(calc).to.be.an('object');
});

// This is a Fake
it('should define the calculate method after creating a new Operation', function (){
  var fakeOperation = {
    calculate: function(){
        return 1;
    }
  };
  var resultOp = createOperation('mult',fakeOperation);
  //console.log(createOperation.calc().sum(1,4));

  expect(resultOp).to.be.deep.equal({name:'mult',result:1});
});

var calculator = {
  sum: function(a,b){
    return a + b;
  },
  sub: function(a,b){
    return a - b;
  }
};


var logSum = function(a,b){
  var sum = calculator.sum(a,b);
  console.log(sum);
};
// This is a test spy
it("should called the method sum at least once", function () {
  spySum = sinon.spy(calculator, "sum");

  logSum(1,1);

  expect(spySum.calledOnce).to.be.equal(true);
  spySum.restore();

});

//This is a test stub

it("should return the sum ", function () {
  var stub = sinon.stub(calculator, "sub").returns(5);

  var result = calculator.sub(1,1);

  expect(result).to.be.equal(5);
});


//
//
// //This is a test Mock
//
it("should called the method of the api", function () {

  var myAPI = { method: function () {} };

  var mock = sinon.mock(myAPI);
  mock.expects('method').once().returns(1);

  var result = myAPI.method();

  expect(result).to.be.equal(1);
  mock.verify();


});
