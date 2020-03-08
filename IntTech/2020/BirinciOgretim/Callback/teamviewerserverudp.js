const fs = require('fs');
var PORT = 9988;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ':' + address.port);
});
var Resim = [];
server.on('message', function (message, remote) {
  if (message.length < 65000) {
    Resim = Resim.concat(message)
    fs.writeFile("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\BirinciOgretim\\Desktop\\app\\data\\content\\screen.jpg", Resim, "binary", function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
  else {
    Resim = Resim.concat(message)
  }

});

server.bind(PORT);