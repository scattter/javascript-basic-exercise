export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array == null || array == undefined){
    throw new Error("Flatten undefined or null array");
  }else if(!array.some(function(value){return value instanceof Array})){
    return array;
  }else {
    var lis = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] instanceof Array){
        for(var j = 0; j < array[i].length; j++){
          lis.push(array[i][j]);
        }
      }else{
        lis.push(array[i]);
      }  
    }
    return lis;
  }
}
