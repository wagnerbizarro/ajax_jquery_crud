<?php

//DATABASE
$db = new SQLite3('../db/db1.db');

//CREATE
function create($db, $firstName, $lastName, $age)
{
    $db->exec("INSERT INTO users(firstName, lastName, age) VALUES('$firstName','$lastName','$age')");
}

//READ
function read($db, $name)
{
    if ($name == NULL) {
        $result = $db->query('SELECT rowid, * FROM users');
    } else {
        $result = $db->query("SELECT rowid, * FROM users WHERE firstName ='$name'");
    }

    $users = [];

    while ($data = $result->fetchArray(SQLITE3_ASSOC)) {
        array_push($users, $data);
    }

    foreach ($users as $key => $users) {
        echo $users['firstName'] . ' ' . $users['lastName'] . ' ' . $users['age'] . '<br>';
    }
}

//UPDATE
function update($db)
{
}

//DELETE
function delete($db)
{
}
