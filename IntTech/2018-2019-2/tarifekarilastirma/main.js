
//https://data.parliament.scot/api/departments
//https://github.com/jdorfman/awesome-json-datasets#historical-events
var gsmOps = [
    {
        id: 1,
        adi: 'Vodafone',
        logo: 'https://upload.wikimedia.org/wikipedia/sco/d/d5/Vodafone_logo.png',
        tarifeler: [
            {
                dk: 500,
                gb: 10,
                sms: 1000,
                fiyat: 50,
                adi: 'her yöne 500 dk'
            },
            {
                dk: 500,
                gb: 10,
                sms: 1000,
                fiyat: 50,
                adi: 'her yöne 1000 dk'
            },
            {
                dk: 500,
                gb: 10,
                sms: 1000,
                fiyat: 50,
                adi: 'her yöne 1500 dk'
            }
        ]

    },
    {
        id: 2,
        adi: 'Türkcell',
        logo: 'https://s3.turkcell.com.tr/SiteAssets/Bireysel/Servis/render/gorseller/hesabim_4/hesabim_4_480x360.png'
    },
    {
        id: 3,
        adi: 'Türk Telekom',
        logo: 'http://www.yasadikca.com/Client/Image/Upload/Article/turk-telekom-engelli(2).gif'
    }
];
function opertorleriGoster() {
    var myElem = document.getElementById("ulOperatorler");
    var myInner = '';
    for (let index = 0; index < gsmOps.length; index++) {
        myInner = myInner + '<li  class="list-group-item" onclick="gsmSecildi(this,' + gsmOps[index].id + ')">';
        myInner = myInner + '<img  src="' + gsmOps[index].logo + '"/>';
        myInner = myInner + gsmOps[index].adi;
        myInner = myInner + '</li>';
    }

    myElem.innerHTML = myInner;
    var mySlcItem = document.getElementById('slcEtkinlikler');
    eventData.forEach(esya => {
        mySlcItem.innerHTML = mySlcItem.innerHTML + '<option value="' + esya.ID + '">' + esya.Sponsor + '</option>'
    })
}
function etkinlikDegisti(etId) {
    var flag = 0;
    eventData.forEach(elm => {
        flag++;
        /*setTimeout(() => {
            document.getElementById('myEventName').value = elm.Sponsor;

        }, flag * 1000);*/

        if (etId == elm.ID) {
            document.getElementById('myEventName').value = elm.Sponsor;
        }
    })

}
function gsmSecildi(myElement, id) {
    var tarifelerListesi = document.getElementById("ulTarifeler");

    tarifelerListesi.innerHTML = ''
    for (let index = 0; index < gsmOps.length; index++) {
        if (gsmOps[index].id == id) {
            gsmOps[index].tarifeler.forEach(element => {
                tarifelerListesi.innerHTML = tarifelerListesi.innerHTML + '<li  class="list-group-item">' + element.adi + '</li>';
            })

        }
    }
    var myActives = document.getElementsByClassName('active');
    for (index = 0; index < myActives.length; index++) {
        myActives[index].className = myActives[index].className.replace('active', '');

    }
    myElement.className = myElement.className + " active";

}

function sehirleriGetir(params) {
    var hhtpistegi = new XMLHttpRequest();
    var adres = "https://raw.githubusercontent.com/volkansenturk/turkiye-iller-ilceler/master/il-ilce.json";


    hhtpistegi.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            var ulkeSlc = document.getElementById('ulkeler');
            myArr.forEach(myArr => {
                ulkeSlc.innerHTML += '<option> ' + myArr.ilce + ' <option>'
            });
        }
    };
    hhtpistegi.open("GET", adres, true);
    hhtpistegi.send();
}

function videoyuGetir() {

    var videoId = document.querySelector('#videoTxt').value;
    var adres = "https://api.dailymotion.com/video/" + videoId;

    var hhtpistegi = new XMLHttpRequest();
    hhtpistegi.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var sonuc = JSON.parse(this.responseText)
          document.getElementById('videolarList').innerHTML += sonuc.title + '<br/>'; 
        }
    };
    hhtpistegi.open("GET", adres, true);
    hhtpistegi.send();
}