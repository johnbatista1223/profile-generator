const Manager = require("../manager.js");



test('getRole() should return "Manager"', () => {
  const testValue = "manager";
  const e = new Manager("john", 1, "john@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("john", 1, "john@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});