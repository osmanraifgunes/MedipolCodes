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
    <div class="pure-g">
        <div class="pure-u-1-5 ">
            <div class="cerceveli">
                hashtagler
            </div>
        </div>
        <div class="pure-u-3-5 ">
            <div class="anaicerik cerceveli">
                merhaba. lohin olmak için üst menü de girişe tıklayınız
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