
const fs = require('fs');

var PORT = 3030;
var HOST = '127.0.0.1';
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function (message, remote) {
  fs.writeFile("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\BirinciOgretim\\Desktop\\app\\data\\content\\screen.jpg", message, "binary", function (err) {
    if (err) {
      return console.log(err);
    }
  });
});

server.bind(PORT, HOST);