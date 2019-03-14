
function xo(str){
    var a = 0;
    var b = 0;
    for(i=0; i<str.length; i++){

        if (str[i] == 'x'){
            a += 1;
        }
        else{
            b += 1;
        } 
    }
    var c;
    if (a==b){
        c = true
    }
    else {
        c = false
    }
    return c;
}
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));