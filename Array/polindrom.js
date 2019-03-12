function palindrome(kata){
    var p = '';
    for(i=kata.length-1; i>=0; i--){
        p += kata[i];
    }
    
    if (kata == p){
        return 'true'
    }
    else{
        return 'false'
    }
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));
