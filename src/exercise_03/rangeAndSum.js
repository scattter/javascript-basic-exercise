export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  var temp = start - end;
  if(temp === 0){
    return [];
  }else if(temp > 0){
    var lis = [];
    for(var i = 0; i < temp; i++){
      lis.push(start - i);
    }
    return lis;
  }else{
    var lis = [];
    for(var i = 0; i < -temp; i++){
      lis.push(start + i);
    }
    return lis;
  }
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if(numbers.length == 1){
    return numbers[0];
  }else if(numbers.length == 0){
    return 0;
  }else if(numbers instanceof Function){
    var temp = numbers;
    sum(temp);
  }else{
    var temp = 0;
    for(var i = 0; i < numbers.length; i++){
      temp += numbers[i];
    }
    return temp;
  }
}
