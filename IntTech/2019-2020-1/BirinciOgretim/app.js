const xyz = require('http');
const islem = require('./hesaplayici')
var url = require('url');
const calc = require('calculator')

calc.integrate()
//const ve var farkı
// var deneme = 1;
// deneme = 2;


// var yenifonk = function (req,res) {
    
// }
//xyz.createServer(yenifonk);

// function name(req,res) {
    
// }
// (req, res) => {} 
// ile
// function (params) {
    
// }
// aymı

sunucum = xyz.createServer((req, res) => {
    params = url.parse(req.url, true);
    //sonuc = islem.hesaplayici(req.url.split('&')[0].split('=')[1], req.url.split('&')[1].split('=')[1])
    sonuc= islem.hesaplayici(params.query.sayi1,params.query.sayi2)
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(sonuc)
    // for (let index = 0; index < 100; index++) {
    //     if (index % 2 == 1) {
    //         res.write(index+ "<br/>")
    //     }
    // }
    res.end('okay');
});

var port = 4545;
sunucum.listen(port, () => {
console.log("app started : " +port )

});