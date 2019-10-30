var firmalar = [
    {
        id: 1, adi: 'Villa tur', logo: 'https://static.bilet.com/images/bus/firms/mersin-villa-turizm.jpg?',
        saatler: [{
            id: 1,
            aralik: '11-12'
        }, {
            id: 2,
            aralik: '12-13'
        }, {
            id: 3,
            aralik: '13-14'
        }]
    },
    { id: 2, adi: 'metro', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNWdfbXPBD1qk55_ok7Ot-AFUB__LlNCKdtWwvsZ2C8TEj_F5' },
    { id: 3, adi: 'kamil koç', logo: 'https://www.kamilkoc.com.tr/cms/files/logo/kamil-koc-4ecc44054e80406bb024d6e7e4276735.png' },
    { id: 4, adi: 'Es tur', logo: 'https://static.bilet.com/images/bus/firms/es-turizm.jpg?' },
    { id: 5, adi: 'Jet tur', logo: 'https://static.bilet.com/images/bus/firms/jet-turizm.jpg?' }
]
function sayfaHazir() {
    var tablom = document.getElementById("firmaTable");
    for (let index = 0; index < firmalar.length; index++) {
        tablom.innerHTML = tablom.innerHTML + '<tr onclick="saatleriGetir(' + firmalar[index].id + ')"><td>' + '<img class="img-thumbnail" src="' + firmalar[index].logo + '"/>' + firmalar[index].adi + '</td></tr>';
    }
}

function saatleriGetir(id) {
    var tablom = document.getElementById("saatTable");
    tablom.innerHTML = '';
    firmalar.forEach(element => {
        if (element.id == id) {
            for (let index = 0; index < element.saatler.length; index++) {
                tablom.innerHTML = tablom.innerHTML + '<tr><td>' + element.saatler[index].aralik + '</td></tr>'

            }
        }
    });
}

function saatEkle(event) {
    if (event.keyCode == 13) {
    }
}

function login(e) {
    e.preventDefault();
    for (let index = 0; index < users.length; index++) {
        if (document.getElementById('exampleInputEmail1').value == users[index].username && document.getElementById('exampleInputPassword1').value == users[index].password) {
            window.location.href = 'index.html'
        } else {
        }

    }

}