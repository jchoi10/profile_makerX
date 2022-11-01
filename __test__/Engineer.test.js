const Engineer = require('../lib/Engineer');

test ("create Engineer", () => {
    const engineer = new Engineer("Dave", 24, "davem@example.com", "dave10");

    expect(engineer.github).toEqual(expect.any(String));
});

test ("get engineer github", () => {
    const engineer = new Engineer("Dave", 24, "davem@example.com", "dave10");

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test ("get role employee", () => {
    const engineer = new Engineer("Dave", 24, "davem@example.com", "dave10");

    expect(engineer.getRole()).toEqual("Engineer");
});