import countCharacter from '../../../src/exercise_02/characterCounter';

// Please do NOT modifiy the code in this file.
describe('for count character', () => {
  fit('should return 0 for null or undefined string', () => {
    expect(countCharacter()).toEqual(0);
    expect(countCharacter(null)).toEqual(0);
  });

  fit('should return 0 for empty string', () => {
    expect(countCharacter('')).toEqual(0);
  });

  fit('should return length if prediction is not specified', () => {
    expect(countCharacter('hello')).toEqual('hello'.length);
  });

  fit('should return number of characters satisfied', () => {
    expect(countCharacter('hello', c => c === 'l')).toEqual(2);
  });
});
