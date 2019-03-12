function balikKata(kata){  
    var p = '';
    for(i=kata.length-1; i>=0; i--){
        p += kata[i];
    }
    return p;
}
console.log(balikKata('Hello World!'));
console.log(balikKata('Novita Rakhmawati'));