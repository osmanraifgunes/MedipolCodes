<?php
Session_start();
if (!isset( $_SESSION["medipoltwitterkullanici"])) {
    header('Location: /login.php');
}
?>