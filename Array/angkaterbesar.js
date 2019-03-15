function pasanganTerbesar(num) {
    // you can only write your code here!
    var numstring = num.toString().split('');
    var hasil = [];
    for (var i =0 ; i < numstring.length-1; i++){
        hasil[i] = Number(numstring[i] + numstring[i+1]);
    }
    // console.log(hasil);

    var bsr_sementara = hasil[0];
    for (j=0; j<hasil.length; j++){
        if (hasil[j]>bsr_sementara){
            bsr_sementara = hasil[j];
        }
    }
    return bsr_sementara;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99