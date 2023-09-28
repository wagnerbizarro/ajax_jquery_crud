<?php
require 'connection.php';

//echo "CHEGUEI AQUI !";


$method = $_SERVER['REQUEST_METHOD'];

//Loading
sleep(3);


switch ($method) {
    case 'PUT':
        echo "create";
        //$firstName = $_PUT["firstName"];
        //echo $firstName;
        echo $_PUT["firstNama"];
        break;

    case 'POST':
        $readName = $_POST["data"];
        read($db, $readName);
        break;

    case 'GET':
        echo "GET";
        break;

    case 'PATCH':
        echo "update";
        break;

    case 'DELETE':
        echo "delete";
        break;
}
