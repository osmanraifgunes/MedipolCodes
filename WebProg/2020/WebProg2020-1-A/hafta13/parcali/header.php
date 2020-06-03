<?php
Session_start();
if (!isset( $_SESSION["medipoltwitterkullanici"])) {
    header('Location: /login.php');
}
?>

<div class="pure-menu pure-menu-horizontal anamenu">
    <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-selected">
            <a href="/index.php" class="pure-menu-link">Medipol</a>
        </li>
        <li class="pure-menu-item">
            <a href="/akis.php" class="pure-menu-link">Akış</a>
        </li>
        <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Paylaşım</a>
        </li>
        <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Bağlan</a>
        </li>

        <li class="pure-menu-item">
            <a href="/register.php" class="pure-menu-link">Kayıt</a>
        </li>

        <li class="pure-menu-item">
            <a href="/login.php" class="pure-menu-link">Gririş</a>
        </li>
        
        <li class="pure-menu-item">
            <a href="/logout.php" class="pure-menu-link">Çıkış</a>
        </li>
    </ul>


</div>