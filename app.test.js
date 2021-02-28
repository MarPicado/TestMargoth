// import the function sum from the app.js file
const { sum } = require('./app.js');

test("add 14 + 9 to equal 23", () => {
    let total = sum(14,9)
    expect(total).toBe(23)
})