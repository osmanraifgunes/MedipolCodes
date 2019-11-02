function datagetirici(gericagrici) {
    console.log('datacagrici içinde');
    setTimeout(function () {
        console.log('veri tabanının içinde');
        var data = { adi: 'ali', soyadi: 'gümüş' };
        gericagrici(data)
    }, 3000);
}

function consolayazici(data) {
        console.log('ekrana yazıcı içinde');
        console.log(data.adi)
}

datagetirici(consolayazici);