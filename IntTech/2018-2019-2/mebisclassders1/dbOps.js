const sql = require('mssql')

var webconfig = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22',
    database: 'DEPO'
};


module.exports.listele = function (req, res) {
    sql.connect(webconfig, function (err) {
        if (err) console.log(err);
        var request1 = new sql.Request();
        request1.query("select * from tbl_personel", function (err, verisonucu) {
            if (err) {
                console.log(err);
            }
            sql.close();
            res.render('home', { veri: verisonucu.recordset });
        });
    });
}


module.exports.userDetay = function (req, res) {
    sql.connect(webconfig, function (err) {
        if (err) console.log(err);
        var request1 = new sql.Request();
        request1.query("select * from Tbl_bolum where id = " + req.params.bolumid, function (err, bolumverisi) {
            if (err) {
                console.log(err);
            }
            sql.close();
            res.render('detay', { bolum: bolumverisi.recordset });
        });
    });
}

module.exports.bolumEkleGet = function (req, res) {
    res.render("ekle");
}


module.exports.promiseTest = function (req, res) {

    var soz = new Promise(function (resolve, reject) {
        //
        var sayi = 0;
        while (true) {
            if (sayi == 1000000000) {
                resolve(321);
                break;
            }
            sayi++;
        }
    });
    soz.then(function (params) {
        console.log(params);

    })
    console.log(123);
}

module.exports.calbackTest = function (req, res) {
    function beklyenCall() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('321');
            }, 2000);
        });
    }
    async function denemeCall1() {
        var result = beklyenCall();
        result.then(function name(params) {
            console.log(params);
        })
        console.log(result);
        // expected output: 'resolved'
    }
    function denemeCall2(params) {
        console.log('123');
    }
    denemeCall1();
    denemeCall2();
}

module.exports.sirali = function (req, res) {

    var s1 = new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve(1);
        }, 10000);
    })
    var s2 = new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    })
    var s3 = new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    })

    //s3.then(function (pr1) {
    //    console.log(pr1);
    //    s2.then(function (pr2) {
    //        console.log(pr2);
    //        s1.then(function (pr3) {
    //            console.log(pr3);
    //        });
    //    });
    //});
    s3.then(function (params) {
        console.log(params);
        return s2;
    }).then(function (params) {
        console.log(params);
        return s1;
    }).then(function(params){
        console.log(params);
    });
    
}

module.exports.bolumEklePost = function (req, res) {


    res.redirect('/liste');
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