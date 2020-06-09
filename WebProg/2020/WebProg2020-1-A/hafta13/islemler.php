
<?php
include './mailci.php';

// Connection data (server_address, database, name, poassword)
$hostdb = '185.162.146.126';
$namedb = 'medipol2020';
$userdb = 'medipol2020';
$passdb = 'n!Hol316';

function execDb($query)
{
    global $hostdb;
    global $namedb;
    global $userdb;
    global $passdb;
    $conn = new PDO("mysql:host=" .   $hostdb . "; dbname=" .  $namedb, $userdb, $passdb);
    $hazirlik = $conn->prepare($query);
    $hazirlik->execute();
    $sonuc = $hazirlik->fetchAll();
    return $sonuc;
}

function kayit(
    $kadi,
    $sifre,
    $tamad,
    $email
) {
    $aktivasyon = rand(1000000, 10000000) . rand(1000000, 10000000);
    $sonuc =  execDb("INSERT INTO kullanici (kadi, sifre, tamad, email, pp, aktivasyon, kayittarih, aktifmi)  values('$kadi','$sifre','$tamad','$email','','$aktivasyon', CURDATE(), '0');");
    mailGonder($email, "sosyal ağ hesap aktifleştirme", '<a href="localhost:1905/aktiflestirme.php?key=' . $aktivasyon . '">tıklayınız</a>');
}
