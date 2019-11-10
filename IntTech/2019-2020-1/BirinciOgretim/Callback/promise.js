
var islem1 = new Promise(function datagetirici(bitirici,hatali) {
    // setTimeout(function () {
    //     console.log('veri tabanının içinde');
    //     var data = { adi: 'ali', soyadi: 'gümüş' };
    //     gericagrici(data)
    // }, 3000);
    setTimeout(() => {
        console.log('birinci')
        bitirici()
    }, 6000);
})


var islem2 = new Promise(function (resoolve, reject) {
    setTimeout(() => {
        console.log('işim bitti')
        resoolve(1234)
        reject()
    }, 5000);
});

Promise.all([islem1, islem2]).then(function () {
    console.log('ikisi de bitti')
})

//  function consolayazici(data) {
//      console.log('ekrana yazıcı içinde');
//      console.log(data)
//  }
//  datagetirici(consolayazici);


// var islem = new Promise(function (resoolve, reject) {
//     setTimeout(() => {
//         console.log('işim bitti')
//         resoolve(1234)
//         reject()
//     }, 5000);
// });

// islem.then(function (data) {
//     console.log('işlem sonrasi')
//     console.log(data)
// }).catch(
//     function () {
//         console.log('işlem başarısız')
//     }
// )