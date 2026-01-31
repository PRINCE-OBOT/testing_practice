import analyzeArray from './analyzeArray';

describe('Analyze Array', () => {
  test('Analyze numbers', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test('Ignore string', () => {
    expect(analyzeArray([6, 8, 3, 4, 2, '1'])).toEqual({
      average: 4.6,
      min: 2,
      max: 8,
      length: 5,
    });
  });
});
