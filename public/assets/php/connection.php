<?php

//DATABASE
$db = new SQLite3('../db/db1.db');

function create($db)
{
}

function read($db)
{
    $result = $db->query('SELECT rowid, * FROM users');

    $users = [];

    while ($data = $result->fetchArray(SQLITE3_ASSOC)) {
        array_push($users, $data);
    }

    foreach ($users as $key => $users) {
        echo $users['firstName'] . ' ' . $users['lastName'] . ' ' . $users['age'];
    }
}

function update($db)
{
}

function delete($db)
{
}

