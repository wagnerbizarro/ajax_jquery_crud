<?php
require 'connection.php';

//echo "CHEGUEI AQUI !";


$method = $_SERVER['REQUEST_METHOD'];

//Loading
sleep(3);


switch ($method) {
    case 'POST':
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $age = $_POST["age"];
        create($db, $firstName, $lastName, $age);
        echo "Cadastrado com sucesso !<br>";
        break;

    case 'GET':
        $readName = $_GET["data"];
        read($db, $readName);
        break;

    case 'PATCH':
        echo "update";
        break;

    case 'DELETE':
        echo "delete";
        break;
}
