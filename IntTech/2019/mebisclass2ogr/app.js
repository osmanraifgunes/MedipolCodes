const express = require('express');
var multer = require('multer')
var dosyayukleme = multer({ dest: 'yuklemeler/' })

const bp = require('body-parser');
const db = require('./dbislemleri')
const app = express();
const port = 3000;
app.use(express.static('yuklemeler'))

app.set('view engine', 'ejs');  // tüm responselar buradan ge.er

app.use(bp.urlencoded({ extended: false }))
app.get('/search', db.personelgetir);
app.post('/search', db.arama);
app.get('/bolum/:id', db.bolumgetir);
app.get('/ekle', db.bolumEkleGet);
app.post('/ekle', dosyayukleme.single('ProfilResmi'), db.bolumEklePost);
app.get('/testReq', db.testSenkron);

app.listen(port, () => console.log('Example app listening on port:' + port))