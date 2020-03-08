function dizinsay(fonksiyon) {
    console.log("dizin yazici fonsiyonuna girdi");
    setTimeout(() => {
        console.log("dosyalar sayılıyor");
        fonksiyon(50);
    }, 3000);
}

function ekranayaz(dosyaSayisi) {
    console.log("ekrana yazici fonsiyonuna girdi");
    console.log(dosyaSayisi);
}

dizinsay(ekranayaz);