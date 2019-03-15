function angkaPrima(angka) {
    // you can only write your code here!
 var t = true;
 for (var i = angka-1; i>1; i--){
     if(angka%i == 0){
         t = false;
     }
 }  
 return t;
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false