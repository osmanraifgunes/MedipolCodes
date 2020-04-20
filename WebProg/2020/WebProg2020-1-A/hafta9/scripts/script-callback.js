

function verigetirici(linkAdresi, geridonus) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            geridonus(xhttp.responseText);
        }
    };

    xhttp.open("GET", linkAdresi, true);
    xhttp.send();

}

function filmGetir() {
    var cevapFonk = function (sonuc) {
        var filmDetay = JSON.parse(sonuc);
        var html = "";
        html = '<tr><td>name :</td><td>' +  filmDetay.name + '</td></tr>';
        html += '<tr><td>storyline :</td><td>' +  filmDetay.storyline + '</td></tr>';
        html += '<tr><td>categories:</td><td>' +  filmDetay.categories[0] + ','  +filmDetay.categories[1] + '</td></tr>';
        document.getElementById('filmler').innerHTML = html;
    }
    verigetirici('https://raw.githubusercontent.com/mikeleguedes/json-movie-list/master/movies/2016/la-la-land.json', cevapFonk);
}