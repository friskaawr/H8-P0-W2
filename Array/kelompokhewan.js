function groupAnimals(animals) {
    // you can only write your code here!
animals.sort();
var new_arr = [];
var arr_s = [];
var first_alphabet = animals[0][0];

for (var i=0; i<animals.length; i++){
    if(animals[i][0] === first_alphabet){
        arr_s.push(animals[i]);
    }
    else{
        new_arr.push(arr_s);
        arr_s = [];
        first_alphabet = animals[i][0];
        arr_s.push(animals[i]);

    }
    if (i === animals.length-1){
        new_arr.push(arr_s);
    }
}
return new_arr;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]