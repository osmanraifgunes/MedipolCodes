<?php
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
    $sth = $conn->prepare($query);
    $sth->execute();
    $sonuc = $sth->fetchAll();
    return $sonuc;
    
}
