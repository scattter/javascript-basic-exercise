import flattenArray from '../../../src/exercise_05/flattenArray';

// Please do NOT modifiy the code in this file.
describe('for flatten array', () => {
  fit('should throw if array is null or undefined', () => {
    expect(() => flattenArray()).toThrowError('Flatten undefined or null array');
    expect(() => flattenArray(null)).toThrowError('Flatten undefined or null array');
  });

  fit('should flatten empty array', () => {
    expect(flattenArray([])).toEqual([]);
  });

  fit('should flatten un-nested array', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  fit('should flatten nested array', () => {
    expect(flattenArray([[1, 2, 3], [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  fit('should flatten mixed array', () => {
    expect(flattenArray([1, 2, [3, 4, 5], [6, 7, 8]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  fit('should just flatten 2 levels', () => {
    expect(flattenArray([[1, 2], [[3, 4], 5]])).toEqual([1, 2, [3, 4], 5]);
  });
});
