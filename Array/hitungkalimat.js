function hitungJumlahKata(kalimat){
    
    var kata = kalimat.split(" ");
    // console.log(kata);

    var hitung = kata.length;
    return hitung;
}
console.log(hitungJumlahKata('I Have a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5