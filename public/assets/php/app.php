<?php
require 'connection.php';

$method = $_SERVER['REQUEST_METHOD'];

//Loading
sleep(3);

switch ($method) {
    case 'POST':
        $action = $_POST["action"];
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $age = $_POST["age"];

        echo "$action";
        //CREATE
        if ($action == "create") {
            create($db, $firstName, $lastName, $age);

        }//DELETE 
        elseif ($action == "delete") {
            $id_delete = $_POST["id_delete"];
            delete($db, $id_delete);

        }//UPDATE 
        elseif ($action == "update") {
            echo "UPDATEEE 1";
            $id = $_POST["id"];
            update($db, $id, $firstName, $age);
        }
        break;

    //READ
    case 'GET':
        $readName = $_GET["data"];
        read($db, $readName);
        break;
}
