const Engineer = require('../lib/Engineer.js');

test('creates intern object', () => {
    const engineer = new Engineer('Christy');

    expect(engineer.name).toBe('Christy');
    expect(engineer.name).toEqual(expect.any(String));
});