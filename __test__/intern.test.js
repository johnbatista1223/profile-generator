const Intern = require("../intern.js");

test("school via constructor", () => {
  const testValue = "stockton";
  const e = new Intern("john", 2, "john@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "intern";
  const e = new Intern("john", 2, "john@gmail.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("get school via getSchool()", () => {
  const testValue = "stockton";
  const e = new Intern("john", 2, "john@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});