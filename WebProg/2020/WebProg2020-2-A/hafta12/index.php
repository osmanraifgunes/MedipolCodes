<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>
    <div class="container m-3">
        <?php
        $sunucu = "sql2.freemysqlhosting.net";
        $kadi = "sql2338732";
        $sifre = "yM6%xC1%";
        $vtabami = "sql2338732";
        $port = "3306";
        $baglanti = new mysqli($sunucu, $kadi, $sifre, $vtabami, $port);
        $sonuc = $baglanti->query("select * from Ogretmen");
        ?>
        <?php
        for ($i = 0; $i < $sonuc->num_rows; $i++) {
            $satir = $sonuc->fetch_row();
        ?>
            <ul class="list-group mt-2">
                <li class="list-group-item">
                    <?php echo $satir[0]  ?>
                </li>
                <li class="list-group-item">
                    <?php echo $satir[1]  ?>
                </li>
                <li class="list-group-item">
                    <?php echo $satir[2]  ?>
                </li>
                <li class="list-group-item">
                    <?php echo $satir[3]  ?>
                </li>
            </ul>
        <?php } ?>
        <a class="btn btn-success mt-3" href="/ekle.php">kayıt ekle</a>
    </div>
</body>

</html>