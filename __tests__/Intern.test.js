const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('Christy');

    expect(intern.name).toBe('Christy');
    expect(intern.name).toEqual(expect.any(String));
});