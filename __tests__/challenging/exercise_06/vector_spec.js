import Vector from '../../../src/exercise_06/vector';

// Please do NOT modifiy the code in this file.
describe('for vector', () => {
  fit('should get x and y part of the vector', () => {
    const vector = new Vector(2, 3);
    expect(vector.x).toEqual(2);
    expect(vector.y).toEqual(3);
  });

  fit('should not set x and y of the vector', () => {
    const vector = new Vector(2, 3);

    expect(() => { vector.x = 3; }).toThrow();
    expect(() => { vector.y = 4; }).toThrow();
  });

  fit('should do plus operation', () => {
    const plusResult = Vector.plus(new Vector(2, 3), new Vector(4, 5));

    expect(plusResult.x).toEqual(6);
    expect(plusResult.y).toEqual(8);
  });

  fit('should do minus operation', () => {
    const minusResult = Vector.minus(new Vector(2, 3), new Vector(4, 8));

    expect(minusResult.x).toEqual(-2);
    expect(minusResult.y).toEqual(-5);
  });

  fit('should calculate distance from original point', () => {
    const vector = new Vector(3, 4);

    expect(vector.distance()).toEqual(5);
  });
});
