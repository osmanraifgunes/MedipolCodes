<?php
    $sifre = $_POST['sifre'];
    $eposta = $_POST['eposta'];
    if($eposta == 'org@gmail.com' && $sifre == '123' )
    {
        header("Location: http://localhost:9090/deneme.php?em=$eposta&sf=$sifre"); 
        exit();
    }
    else{
        echo "kullanıcı adı veya şifre yanlış";
    }
?>