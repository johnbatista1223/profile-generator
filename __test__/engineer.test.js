const Engineer = require('./engineer');

// test('a string that tells you what you are testing), () =>{
//   const testValue = 'maria` //this is what you want the test to match to in this case would be if we are testing name');
//   const e = new engineer (' the values you need to feed constructor'); 
//   expect(e.name).toBe(testValue); //the actual test
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("john", 2, "john@gmail.com", "github");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "github";
    const e = new Engineer("john", 2, "john@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });