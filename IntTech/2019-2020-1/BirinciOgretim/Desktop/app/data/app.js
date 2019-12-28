var app = module.exports = require('appjs');
var net = require('net');
const fs = require('fs');

app.serveFilesFrom(__dirname + '/content');

var menubar = app.createMenu([{
  label: '&File',
  submenu: [
    {
      label: 'E&xit',
      action: function () {
        window.close();
      }
    }
  ]
}, {
  label: '&Window',
  submenu: [
    {
      label: 'Fullscreen',
      action: function (item) {
        window.frame.fullscreen();
        console.log(item.label + " called.");
      }
    },
    {
      label: 'Minimize',
      action: function () {

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



        // TCP=>>>
        // var client = new net.Socket();

        // client.connect(3030, 'localhost', function () {
        //   console.log('Connected');
        // });

        // client.on('data', function (data) {

        //     fs.writeFile("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\BirinciOgretim\\Desktop\\app\\data\\content\\screen.jpg", data, "binary", function (err) {
        //       if (err) {
        //         return console.log(err);
        //       }
        //       datalar = [];
        //     });

        // });


        // client.on('close', function () {
        //   console.log('Connection closed');
        // });
      }
    },
    {
      label: 'Maximize',
      action: function () {
        window.frame.maximize();
      }
    }, {
      label: ''//separator
    }, {
      label: 'Restore',
      action: function () {
        window.frame.restore();
      }
    }
  ]
}]);

menubar.on('select', function (item) {
  console.log("menu item " + item.label + " clicked");
});

var trayMenu = app.createMenu([{
  label: 'Show',
  action: function () {
    window.frame.show();
  },
}, {
  label: 'Minimize',
  action: function () {
    window.frame.hide();
  }
}, {
  label: 'Exit',
  action: function () {
    window.close();
  }
}]);

var statusIcon = app.createStatusIcon({
  icon: './data/content/icons/32.png',
  tooltip: 'AppJS Hello World',
  menu: trayMenu
});

var window = app.createWindow({
  width: 640,
  height: 460,
  icons: __dirname + '/content/icons'
});

window.on('create', function () {
  console.log("Window Created");
  window.frame.show();
  window.frame.center();
  window.frame.setMenuBar(menubar);

});


window.on('ready', function () {
  console.log("Window Ready");
  window.process = process;
  window.module = module;

  function F12(e) { return e.keyIdentifier === 'F12' }
  function Command_Option_J(e) { return e.keyCode === 74 && e.metaKey && e.altKey }



  window.addEventListener('keydown', function (e) {
    console.log('deneme')
    if (F12(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
  });


});

window.on('close', function () {
  console.log("Window Closed");
});


