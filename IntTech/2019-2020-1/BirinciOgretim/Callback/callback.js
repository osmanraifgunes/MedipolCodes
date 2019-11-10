function datagetirici(gericagrici) {
    console.log('datacagrici içinde');
    // setTimeout(function () {
    //     console.log('veri tabanının içinde');
    //     var data = { adi: 'ali', soyadi: 'gümüş' };
    //     gericagrici(data)
    // }, 3000);
    const request = require('request');

    request('https://gist.githubusercontent.com/kstirman/4ade073dd76bef171298033cb9c965b5/raw/2a2b5a85b228b8a3ffaf369a28032bf8a899db23/sample-raw.json', { json: true }, (err, res, body) => {
       gericagrici(body)
    });
}

function consolayazici(data) {
    console.log('ekrana yazıcı içinde');
    console.log(data)
}

datagetirici(consolayazici);