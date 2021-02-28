
//******************************* */

test("One euro should be 1.2 dollars", function(){
    const {fromEuroToDollar} = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5*1.2;
    expect(expected).toBe(dollars);
})

//****************************************** */
test("One euro should be 1.2 dollars", function(){
    const {fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5*127.9;
    expect(expected).toBe(yen);
})

//****************************************** */
test("18000 yen should be 112 british pound", function(){
    const {fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(18000);
    const expected = Math.floor((18000/127.9)) * 0.8;
    expect(expected).toBe(pound);
})