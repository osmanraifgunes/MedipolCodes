var app = module.exports = require('appjs');
app.serveFilesFrom(__dirname + '/content');
var net = require('net');

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
        window.frame.minimize();
      }
    },
    {
      label: 'Maximize',
      action: function () {
        baglanici();
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
    if (F12(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
  });
});


app.router.post('/deneme', function (istek, cevap, next) {
  cevap.send('denme post');
})

window.on('close', function () {
  console.log("Window Closed");
});


function baglanici(params) {
  var client = new net.Socket();
  client.connect(3030, 'localhost', function () {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
  });
  client.on('data', function (data) {
    fs.writeFile("C:\\code\\MedipolCodes\\IntTech\\2019-2020-1\\BirinciOgretim\\Sesli\\data\\content\\deneme.jpg", data, "binary", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });

  client.on('close', function () {
    console.log('Connection closed');
  });
}