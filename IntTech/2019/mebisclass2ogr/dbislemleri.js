const mq = require('mssql');
const dosyasistemi = require('fs');

var config = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22',
    database: 'TT_2OGRETIM'
};

module.exports.personelgetir = function (req, res) {
    mq.connect(config, function (err) {
        if (err) console.log(err);
        var request = new mq.Request();
        request.query("select * from tbl_Personel", function (err, recordset) {
            if (err) console.log(err)
            mq.close();
            res.render('home', { data: recordset.recordset });
            //res.send(recordset);
        });
    });
}
module.exports.arama = function (req, res) {
    mq.connect(config, function (err) {
        if (err) console.log(err);
        var request = new mq.Request();
        request.query("select * from tbl_Personel where Adi like '%" + req.body.search1 + "%'", function (err, recordset) {
            if (err) console.log(err)
            mq.close();
            res.send(recordset);
        });
    });

}

module.exports.bolumgetir = function name(req, res) {
    mq.connect(config, function (hata) {
        if (hata) {
            console.log('veri tabanına bağlanamadı');
        }
        var rq = new mq.Request();
        rq.query("select * from sys.tables ", function (err, sorgusonucu) {
            mq.close();
            res.render("bolumdetay", { bolumveri: sorgusonucu.recordset })
        })
    })
}


module.exports.bolumEkleGet = function (req, res) {
    res.render('personelEkle');
}
module.exports.bolumEklePost = function (req, res) {
    res.render('personelEkle');
    //var geciciveri = [];
    // req.on('data',function (databolumu) {
    //     debugger;
    //     geciciveri=  geciciveri.concat(databolumu);

    // })

    // req.on('end',function(){
    //     dosyasistemi.writeFile("deneme1.jpg",geciciveri,function (params) {

    //     })
    // })
}


module.exports.testSenkron = function (req, res) {
    function sayi1(params) {
        console.log(1);
    }
    function sayi2(params) {
        console.log(2);
    }
    function sayi3(params) {
        console.log(3);
    }

    sayi1();
    sayi2();
    sayi3();
}
