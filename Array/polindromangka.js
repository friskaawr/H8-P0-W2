function angkaPalindrome(num){
    var angka = num + 1;
    var r = '';

    while(true){
        var s = String(angka);
        reverse = s.split('').reverse().join('');
        if (angka === Number(reverse)){
        return angka;
      }
      angka ++;
    }
    
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000));