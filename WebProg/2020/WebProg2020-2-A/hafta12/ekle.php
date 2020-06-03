<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>
    <?php
    if (count($_POST) > 0) {
        $sunucu = "sql2.freemysqlhosting.net";
        $kadi = "sql2338732";
        $sifre = "yM6%xC1%";
        $vtabami = "sql2338732";
        $port = "3306";
        $baglanti = new mysqli($sunucu, $kadi, $sifre, $vtabami, $port);
        $sonuc = $baglanti->query("INSERT INTO Ogretmen (adi, soyadi, bolumu) VALUES ('" . $_POST["aktoradi"] . "','" . $_POST["aktorsoyadi"] . "','" . $_POST["aktorbolumu"]. "')");
        #INSERT INTO Ogretment (Adi, Soyadi, Numarasi) VALUES ('ali', 'kıraç','tiyatro')
    }
    ?>
    <div class="container m-3">
        <form method="POST">
            <div class="form-group">
                <label>adı</label>
                <input name="aktoradi" type="text" class="form-control">
            </div>

            <div class="form-group">
                <label>soy adı</label>
                <input name="aktorsoyadi" type="text" class="form-control">
            </div>


            <div class="form-group">
                <label>bölümü</label>
                <input name="aktorbolumu" type="text" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">kaydet</button>
        </form>
        <a  href="/index.php">listeye git</a>
    </div>
</body>

</html>