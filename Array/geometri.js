function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var selisih = arr.slice(-1).pop() / arr.slice(-2, -1).pop();
    // arr.slice(-1).pop() -
    var res = true;
    // console.log(selisih);
    
    for (var i = arr.length-1; i > 0; i--) {
      if (selisih !== (arr[i] / arr[i-1])) {
        res = false;
      }
    }
    
    return res;
  }

  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false