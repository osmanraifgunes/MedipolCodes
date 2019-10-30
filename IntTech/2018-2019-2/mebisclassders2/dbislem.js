const sql = require('mssql');
const dosyasistemi = require('fs');

const config = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22', // You can use 'localhost\\instance' to connect to named instance
    database: 'intteklab1b'
}

module.exports.liste = function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TUser", function (err, recordset) {
            if (err) console.log(err)
            sql.close();
            res.render('home', { data: recordset.recordset });
        });
    });
}

module.exports.login = function (req, res) {
    res.render('home');
}


module.exports.departmandetay = function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TDepartment where YoneticiId = " + req.params.id, function (err, depler) {
            if (err) console.log(err)
            sql.close();
            res.render('dep', { veriler: depler });
        });
    });
}

module.exports.ekleGet = function (req, res) {
    res.render('ekle');
}

module.exports.eklePost = function (req, res) {
    var dosya = [];

    /*req.on('data', parca => {
        dosya.push(parca);
    });
    req.on('end', parca => {
        dosyasistemi.writeFile('deneme.jpg',dosya,function(){
        })
    });*/
    res.render('ekle');
}

module.exports.promiseOrnek = function (req, res) {

    function prms1(params) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(1);
            }, 5000);
        });
    }

    function prms2(params) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(2);
            }, 2000);
        });
    }

    function prms3() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(3);
            }, 3000);
        });
    }
    
    //prms1().then(function (params) {
    //    console.log(params);
    //    return prms2();
    //}).then(function (params) {
    //    console.log(params);
    //    return prms3();
    //}).then(function (params) {
    //    console.log(params);
    //});
    
   Promise.all([prms1(),prms2(),prms3()]).then(function (degerler) {
    degerler.forEach(element => {
        console.log(element);
    });
   })

}