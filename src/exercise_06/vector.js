import { DEFAULT_EXTENSIONS } from "@babel/core";

export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
  }
  
  static plus(per,after) {
    return new Vector(per.x+after.x,per.y+after.y);
  }
  static minus(per,after) {
    return new Vector(per.x-after.x,per.y-after.y);
  }  
}
Vector.prototype = {
  get x(){
    return this.x_;
  },
  set x(X){
    throw new Error();
  },
  get y(){
    return this.y_;
  },
  set y(Y){
    throw new Error();
  },
  distance(){
    return Math.hypot(this.x ,this.y);
  }
}
