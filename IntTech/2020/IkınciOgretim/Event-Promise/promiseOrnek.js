var islem1 = function islem(basarili, basarisiz) {
    //basarili => resolve
    //basarisiz => reject
    setTimeout(() => {
        console.log('islem bitti')
        //basarili()//resolve
        basarisiz()//reject
    }, 5000);
}

var islem2 = function ikinciislem(resolve, reject) {
    setTimeout(() => {
        console.log('ikinci islem bitti')
        resolve();
    }, 3000);
}


var islemSiralayci1 = new Promise(islem1);
var islemSiralayci2 = new Promise(islem2);

Promise.all([islemSiralayci2, islemSiralayci1]).then(function (params) {
    console.log('hepsi bitti')
}).catch(function (params) {
    console.log('hepsi bitti ama hatalı')
}).finally(function (params) {
    console.log('hepsi bitti finally')
})
// islemSiralayci.then(function (params) {
//     islem2();
// }).catch(function (params) {
//     console.log('ortalama hata aldi')
// })
