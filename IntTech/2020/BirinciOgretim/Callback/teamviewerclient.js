var net = require('net');
const fs = require('fs');

var client = new net.Socket();
client.connect(3030, 'localhost', function () {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});
var i = 1;
client.on('data', function (data) {
    i = i + 1;
    fs.writeFile("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\Callback\\screen" + i + ".jpg", data, "binary", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});

client.on('close', function () {
    console.log('Connection closed');
});