<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
    <link rel="stylesheet" href="icerik/css/stil.css">
</head>

<body>
    <?php
    include './parcali/header.php';
    
    include './islemler.php';
    if (count($_POST) > 0) {
        if (strlen($_POST['kadi']) != 0  && strlen($_POST['tamad']) != 0 && strlen($_POST['email']) != 0 && strlen($_POST['sifre']) != 0) {
            kayit($_POST['kadi'], $_POST['sifre'], $_POST['tamad'], $_POST['email']);
            mail($_POST['email'],"aktivasyon yapınız.","linke tıklayınız.");
            echo "<p style=\"color:green;\">başarılı kayıt oldunuz. Mail ile aktif edin.</p>";
           
        } else {
            echo "<p style=\"color:red;\">zorunlu alanları doldurunuz.</p>";
        }
    }
    ?>
    <div class="pure-g">
        <div class="pure-u-1-5 ">
            <div class="cerceveli">
                hashtagler
            </div>
        </div>
        <div class="pure-u-3-5 ">
            <div class="anaicerik cerceveli">

                <form class="pure-form pure-form-aligned" method="POST" action="/register.php" enctype="multipart/form-data">
                    <fieldset>
                        <div class="pure-control-group">
                            <label for="aligned-password">kullanıcı adı</label>
                            <input required type="text" id="aligned-password" placeholder="kullanıcı adı" name="kadi" />
                        </div>

                        <div class="pure-control-group">
                            <label for="aligned-password">şifre</label>
                            <input type="password" placeholder="Şifre" name="sifre" />
                        </div>

                        <div class="pure-control-group">
                            <label for="aligned-password">Ad soyad</label>
                            <input type="text" id="aligned-password" placeholder="Ad soyad" name="tamad" />
                        </div>
                        <div class="pure-control-group">
                            <label for="aligned-email">email</label>
                            <input type="text" name="email" placeholder="Email Address" />
                        </div>
                        <div class="pure-controls">
                            <button type="submit" class="pure-button pure-button-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div class="pure-u-1-5 ">
            <div class="cerceveli">
                hesap
            </div>
        </div>
    </div>

    <?php
    include './parcali/footer.php';
    ?>
</body>

</html>