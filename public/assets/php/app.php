<?php
require 'connection.php';

//echo "CHEGUEI AQUI !";
//echo $method = $_SERVER['REQUEST_METHOD'];

$method = $_SERVER['REQUEST_METHOD'];

//Loading
sleep(3);

switch ($method) {
    case 'POST':
        $action = $_POST["action"];

        if ($action == "create") {
            $firstName = $_POST["firstName"];
            $lastName = $_POST["lastName"];
            $age = $_POST["age"];
            create($db, $firstName, $lastName, $age);

        } elseif ($action == "delete") {
            $id_delete = $_POST["id"];
            delete($db, $id_delete);
            
        } elseif ($action == "update") {
            $id_update = $_POST["id"];
            update($db, $id_update);
        }
        break;

    case 'GET':
        $readName = $_GET["data"];
        read($db, $readName);
        break;

    case 'PATCH':
        echo "update";
        break;
}
