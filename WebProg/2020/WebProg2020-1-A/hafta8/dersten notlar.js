const dizi = [1,2,3,4,5];

for (const deger in dizi) {
	dizi.pop()
	debugger
	alert(deger)
}

----------------------------
let birNesne = {sol: 1, sag: 2};
birNesne.yukseklik = 15;
alert(birNesne.yukseklik);

var nesne = {}
var nesne = new object();

----------------------------

let dizi = [1,2,3,4];
//[1,4,9,16];
dizi.map(i => return i*i)
dizi.pop()

----------------------------
const berqaylar = ['berqay', 'berqay', 'berqay', 'berqay', 'berkay', 'berqay'];

var sonuc = berqaylar.filter(i => i != 'berkay');
console.log(sonuc);
---------------------------
for (var isim in berqaylar;)
	if(isim != 'berkay')
		berqaylar.splice(5,2)
---------------------------
var adSoyad = "berkay ÇATAK"
adSoyad[2]
alert(adSoyad.split(" ")[0])
alert(adSoyad.split(" ")[1])
---------------------------
function berkayiSinirlendiren(){
	var a =2;
	
	function antidepresanaBasla(doz, saat = "5:00"){
		//arguments
		debugger;
		var b = 3;
	}
	antidepresanaBasla(2,"3:00");
	alert(b) // hata
}
---------------------------
 function adi(){
	
}
adi();

var fn2 = function (teslimTarihiErtelensinmi){
	
}

var fn3 = (teslimTarihiErtelensinmi)=>{
	this //farklı çalışıyor
}

----------------------------
for (var 1;....;i<20)
	
while (bosOlmadigiSurece)
	while1
		while21
		while21
		while21
		while21
		while21
		while21
	while1
	while1
	while1
	while1
	while1
	while1
	while1
---------------------------
var islemler = {};
function topla(a,b)
{
	return a+b;
}
function cikar(a,b)
{
	return a-b;
}
islemler.t = topla();//method
function islemYap(sayi1,sayi2,islem)
{
	return islem(sayi1,sayi2)
}
console.log(islemYap(3,5,topla))
console.log(islemYap(3,5,cikar))
---------------------------
function* cokluDonen() {
  yield 1;
  yield 2;
  return 3;
}
var sonuc = cokluDonen();
---------------------------
Array.prototype.ikinciEleman = function(){
	 alert(this[2])
}

var sayilar = [1,2,3,4,5,6];
sayilar.ikinciEleman()//push, pop