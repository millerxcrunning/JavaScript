function dropElements(arr, func) {
  // Drop them elements.
  for(let i = 0;; i +=1)
  {
    console.log("on " + i + " pass, n = " + arr[0] + " is being compared with " + func);
    console.log(func(arr[i]));
    if((func(arr[0]))) return arr;
    else arr.shift();
    console.log("arr is now " + arr)
    if(arr.length == 0) return arr;
  }
  return arr;


}
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
dropElements([1, 2, 3], function(n) {return n < 3; });
