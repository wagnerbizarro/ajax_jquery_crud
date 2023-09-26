<?php
require 'connection.php';

//echo "CHEGUEI AQUI !";


$method = $_SERVER['REQUEST_METHOD'];

//Loading
sleep(3);


switch ($method) {
    case 'PUT':
        echo "create";
        break;
    
    case 'POST':
        echo "read";
        //echo (read($db));
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

