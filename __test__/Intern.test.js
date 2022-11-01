const Intern = require("../lib/Intern");

test ("create intern", () => {
    const intern = new Intern("Mike", 32, "mike@example.com", "Columbia University");

    expect(intern.school).toEqual(expect.any(String));
});