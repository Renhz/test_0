import greet from 'app';

describe('test test', () => {
  test('greet Ren', () => {
    expect(greet('Ren')).toBe('Hello Ren');
  });
});
