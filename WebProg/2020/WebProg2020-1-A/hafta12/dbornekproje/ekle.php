<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>
    <?php
    function printer()
    {
        echo "Ben yazıcıyım!" . PHP_EOL;
        while (true) {
            $string = yield;
            echo  'a <br/>' . $string . PHP_EOL;
        }
    }

    $printer = printer();
    $printer->send('Merhaba Dünya!');
    $printer->send('Elveda Dünya!');

    if (count($_POST) > 0) {
        $servername = "sql2.freemysqlhosting.net";
        $username = "sql2338732";
        $password = "yM6%xC1%";
        $dbname = "sql2338732";
        $conn = new mysqli($servername, $username, $password, $dbname, 3306);
        $sonuc = $conn->query("INSERT INTO Ogrenci (adi, soyadi, numarasi) VALUES ('" . $_POST["adi"] . "','" . $_POST["soyadi"] . "','" . $_POST["numarasi"] . "')");
    }
    ?>
    <div class="container m-5">
        <form method="POST">
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Ad</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="adi" id="staticEmail" placeholder="osman raif ...">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Soyad</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="soyadi" id="inputPassword" placeholder="Güneş ...">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Numara</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="numarasi" id="inputPassword" placeholder="1453 ...">
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-12">
                    <button class="btn btn-success btn-block" type="submit">kaydet</button>
                </div>
            </div>
        </form>
        <a href="/index.php"> listeye git</a>

    </div>
</body>

</html>