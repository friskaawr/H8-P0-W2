function shoutOut(){
    return 'Halo Function';
}
console.log(shoutOut());

function calculateMultiply(num1, num2){
    return num1 * num2;
}

var num1= 5;
var num2= 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

function processSentence() {
    return 'Nama saya ' + name + ', umur saya ' +age+ ' alamat saya '
    + adress + ' dan hobby saya adalah ' +hobby+ ' !';
}

var name = 'Agus';
var age = 30;
var adress = 'Jln. Malioboro, Yogyakarta';
var hobby = 'gaming';

var fullSentence = processSentence(name,age,adress,hobby);
console.log(fullSentence);