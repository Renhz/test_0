import greet from '../app';

describe('A member visiting..', () => {
  interface UserInfo {
    userName: string;
    [key: string]: string;
  }

  const ren: UserInfo = {
    userName: 'Ren',
  };

  test('greet Ren', () => {
    expect(greet(ren.userName)).toBe(`Hello, ${ren.userName}`);
  });
});
