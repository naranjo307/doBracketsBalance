const doBracketsBalance = require('../index');

describe("doBracketsBalance", function () {
 
  it("debe retornar true", function () {
    expect(doBracketsBalance('[]')).toStrictEqual(true);
  });
  it("debe retornar true", function () {
    expect(doBracketsBalance('[(Hello){}](World)')).toStrictEqual(true);
  });
  it("debe retornar false", function () {
    expect(doBracketsBalance('[(Hello){}](World)(')).toStrictEqual(false);
  });
  it("debe retornar false", function () {
    expect(doBracketsBalance('[]]')).toStrictEqual(false);
  });
  it("debe retornar false", function () {
    expect(doBracketsBalance('[)')).toStrictEqual(false);
  });
});