<?php
require 'connection.php';

//Loading
sleep(3);





//Read
if (isset($_POST['data'])) {
    //$action = $_POST['data'];
    //echo $action;
    echo (read($db));
}
