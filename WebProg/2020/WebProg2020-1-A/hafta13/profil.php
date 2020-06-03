<?php
include './yetki.php';
?>
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
    ?>

    <?php
    if ($_FILES) {
        $target_dir =  $_SERVER['DOCUMENT_ROOT'] . '\\up2\\';
        $target_file = $target_dir . basename($_FILES["fotograf"]["name"]);
        //echo is_writable( $target_dir );
        
        echo var_dump($target_file);
        move_uploaded_file($_FILES["fotograf"]["tmp_name"], $target_file);
        //echo $_FILES ["fotograf"]["error"];
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

                <form class="pure-form pure-form-aligned" method="POST" action="/profil.php" enctype="multipart/form-data">
                    <fieldset>
                        <div class="pure-control-group">
                            <label for="aligned-password">Ad soyad</label>
                            <input type="text" id="aligned-password" placeholder="Ad soad" />
                        </div>
                        <div class="pure-control-group">
                            <label for="aligned-email">Fotoğraf</label>
                            <input type="file" id="aligned-email" name="fotograf" placeholder="Email Address" accept="image/*" />
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