const http = require('http')
const fs = require('fs');


var sunucum = http.createServer(function (istek, cevap) {

    var okuyucu = new fs.createReadStream("C:\\Users\\raif\\Downloads\\postgresql-12.0-1-windows-x64.exe");
    okuyucu.pipe(cevap);

});

sunucum.listen("3536", function (params) {
    console.log("başladı");

})





    // okuyucu.read()    
    //     fs.ReadStream('C:\\Users\\raif\\Downloads\\postgresql-12.0-1-windows-x64.exe', 'r', function (err, fd) {
    //         if (err) {
    //             throw err
    //         }
    //         else {
    //             fs.close(fd, (err) => {
    //                 if (err) throw err;
    //             });
    //         }
    //     });
    //     cevap.write("merhaba");
    //     cevap.end();