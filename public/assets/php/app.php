<?php
require 'connection.php';

echo "CHEQUEI AQUI 1!<br>";

if(isset($_GET['read'])){
    sleep(2);
    echo "CHEQUEI AQUI 2!<br>";
}