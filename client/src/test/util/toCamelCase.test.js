import toCamelCase from '../../util/toCamelCase';

describe('toCamelCase', () => {

  it('HelloWorld', () => {
    //All requirements false
    expect(toCamelCase('Hello World')).toBe('helloWorld');
  });

  it('hello world', () => {
    //All requirements false
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });
});
