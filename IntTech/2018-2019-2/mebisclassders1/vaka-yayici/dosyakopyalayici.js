var dosyadinleyici = require('./eventsample');
debugger;
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);
//node dosyakopyalayici.js '/home/nodeornek'
console.log(process.env.dizin);
//dizin='deneme' node dosyakopyalayici.js
dosyadinleyici.olayYayici.on('vaka', function (dosyaadi) {
    console.log(dosyaadi);
})

function tekrarlanan(sayi) {
    console.log(sayi);
    tekrarlanan(sayi + 1);
}

tekrarlanan(3);