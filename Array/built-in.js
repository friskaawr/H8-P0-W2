var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 
function dataHandling2(input){

 
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 2, "Pria", "Sma Internasional Metro")
    
    var lahir = ''
    lahir = input[3].split("/")

    var join = lahir.join("-")
    // console.log(join)
    var desc = lahir.sort(function(a, b){return b-a})
    
    // console.log(desc)

    // console.log(lahir.sort());

    var batas = input[1].slice(0,15);

    console.log(batas);
    switch(lahir[2]){
        case '01':
        lahir[2] = 'Januari';
        break;

        case '02':
        lahir[2] = 'Februari';
        break;

        case '03':
        lahir[2] = 'Maret';
        break;

        case '04':    // console.log(join)
        lahir[2] = 'April';
        break;

        case '05':
        lahir[2] = 'Mei';
        break;

        case '06':
        lahir[2] = 'Juni';
        break;

        case '07':
        lahir[2] = 'Juli';
        break;

        case '08':
        lahir[2] = 'Agustus';
        break;

        case '09':
        lahir[2] = 'September';
        break;

        case '10':
        lahir[2] = 'Oktober';
        break;

        case '11':
        lahir[2] = 'November';
        break;

        case '12':
        lahir[2] = 'Desember';
        break;
        
    }
    console.log(input);
    console.log(lahir[2]);
    console.log(desc);
    console.log(join);
    console.log(batas);
}

dataHandling2(input)