for (var i; i++; i<x.length){}

while(acikmi){}

var dizi = [1,2,3,4,5];
var nesneler = {a: 1, b: 2, c: 3};
for (var nesne in nesneler)
{
	debugger;
	alert(nesne)
}
-------------------------------------
let bosnesne = {};
var bosnesne = {};
var nesne = new Object();
nesne.hareket = function(){
	alert('koşuyorum')
}
-------------------------------------
var bozdizi = [];
var bosdizi2 = new Array();
var doludizi = [1,2,3];
doludizi.pop();
doludizi[4] = 5;
-------------------------------------
=> eskisi
var doludizi = [1,2,3,5,6,7];
var sonuc = []
for()
{
	if(sart)
		sonuc.push
}
=> filter ile

var doludizi = [1,2,3,5,6,7];
doludizi.filter(i => i%2==1)
-----------------------------------
var doludizi = [1,2,3,5,6,7];
doludizi.map(elmnt=>{
	return elmnt * elmnt;
})
-----------------------------------
var kullanici = "sinan kürt";
if(kullanici.indexOf('kürt')>0)
	alert('var')
else
	alert('yok')
var adSoyad = kullanici.split(" ")
------------------------------------
var bosjson =  '{"a" : 1}'
var obje = JSON.parse(bosjson)
JSON.stringfy(obje)
-----------------------------------
function fn1 (degisken1){
	
}
fn1();

var fn2 = function(){
	this;
}
fn2();

var fn3 = (degisken1)=>{
	this;
}
fn3(1);
-------------------------------------
function fn1(){
	var a;
	function fn2(){
		var b
			function fn3(){
				var c;
			}
		c;
	}
}
------------------------------------
function toplama(a,b=3)
{
	debugger;
	return a + b;
}
------------------------------------
for(var i; i++; i<8)
	for
	for
while(2^32>a)
	
var dizi = []
function dosyaoku('C:')
{
	dosyaoku('c:/pf')
}
------------------------------------
console.log(Math.sum(range(1, 10))) // yanlış

function toplama(a,b)
{
	return a + b
}

function cikarma(a,b)
{
	return a - b
}


function islemYap(a,b,islem)
{
	return islem(a,b)
}

alert(islemYap(1,2,toplama))
----------------------------------
var a = {}
a.hesap = function (){};
function hesap(){};

----------------------------------
 function* cokluDonus() {
  yield 1;
  yield 2;
  yield 3;
}
var coklu = cokluDonus();
coklu.next();




