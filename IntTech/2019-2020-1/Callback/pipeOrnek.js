const fs = require('fs');
const xyz = require('http');
var stream = require('stream');

//Kullanılmıyor
// var sonucFonk = function (params) {
// }


//ÇAlışmıyor
// fs.read("",'r', function (err,FHannler) {

//     FHannler.
// })



sunucum = xyz.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.readFile('C:\\Users\\raif\\Downloads\\jdk-8u231-windows-x64.exe', (err, data) => {
        if (err) {
            throw err
        }
        else {
            var bufferStream = new stream.PassThrough();
            bufferStream.end(data);
            bufferStream.pipe(res)
        }
    });


    //res.end('okay');
});

var port = 4545;
sunucum.listen(port, () => {
    console.log("app started : " + port)

});