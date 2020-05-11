<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>
    <?php
    $servername = "sql2.freemysqlhosting.net";
    $username = "sql2338732";
    $password = "yM6%xC1%";
    $dbname = "sql2338732";
    $conn = new mysqli($servername, $username, $password, $dbname, 3306);
    $sonuc = $conn->query("SELECT * FROM Ogrenci");
    ?>
    <div class="container m-5">
        <?php for ($i = 0; $i < $sonuc->num_rows; $i++) { ?>
            <?php $row = $sonuc->fetch_row() ?>
            <ul class="list-group mb-3">
                <li class="list-group-item">
                    <?= $row[0] ?>
                </li>
                <li class="list-group-item">
                    <?= $row[1] ?>
                </li>
                <li class="list-group-item">
                    <?= $row[2] ?>
                </li>
                <li class="list-group-item">
                    <?= $row[3] ?>
                </li>
            </ul>

        <?php } ?>
        <a class="btn btn-success mt-3" href="/ekle.php"> yeni kayıt</a>

    </div>
</body>

</html>