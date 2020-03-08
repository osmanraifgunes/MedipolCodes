const express = require('express');
var multer  = require('multer')
var yukle = multer({ dest: 'uploads/' })

//const ejs = require('ejs');
const bp = require('body-parser');

const app = express()
const port = 3000
const login = require("./dbOps")

app.use(express.static('uploads'))
app.set('view engine', 'ejs')
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', login.listele);
app.get('/liste', login.listele);
app.get('/detay/:bolumid', login.userDetay);
app.get('/ekle', login.bolumEkleGet);
app.post('/ekle', yukle.any(), login.bolumEklePost);
app.get('/testprms', login.promiseTest);
app.get('/testclbck', login.calbackTest);
app.get('/sirali', login.sirali);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))