function targetTerdekat(arr) {
    // you can only write your code here!
    var dis_o = [];
    var dis_x = [];

    for(var i= 0; i<arr.length; i++){
        if(arr [i] === 'x'){
            dis_x.push(i);
        }
        if (arr [i]=== 'o'){
            dis_o.push(i);
        }
    }
console.log(dis_x);
console.log(dis_o);
 
if(dis_x.length === 0){
    return 0;
}
else {
    if (dis_x[0] < dis_o[0]){
        return Math.abs(dis_x[dis_x.length-1] - dis_o[0]);
    }
    else {
        return Math.abs(dis_o[dis_o.length-1] - dis_x[0])
    }
}
}

// targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']);
  
//   // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat(['o', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2