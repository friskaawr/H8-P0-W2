function bandingAngka(angka1, angka2){
    if (angka1 == angka2){
        return '-1';
    }
    else if (angka1 <= angka2){
        return true; 
    }
    else {
        return false;
    }

}

console.log(bandingAngka(5, 8));
console.log(bandingAngka(5, 3));
console.log(bandingAngka(4, 4));
console.log(bandingAngka(3, 3));
console.log(bandingAngka(17, 2));