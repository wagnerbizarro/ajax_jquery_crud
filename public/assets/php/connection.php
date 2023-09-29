<?php

//DATABASE
$db = new SQLite3('../db/db1.db');

//READ
function read($db, $name){
    if ($name == NULL) {
        $result = $db->query('SELECT rowid, * FROM users');
    } else {
        $result = $db->query("SELECT rowid, * FROM users WHERE firstName ='$name'");
    }

    $users = [];

    //Exibe
    echo "<table id='php_return' class='table table-hover table-striped'>
				<thead>
					<tr>
						<th>ID</th>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Age</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
			<tbody>";

    while ($data = $result->fetchArray(SQLITE3_ASSOC)) {
        array_push($users, $data);
    }

    foreach ($users as $key => $users) {
        //echo $users['firstName'] . ' ' . $users['lastName'] . ' ' . $users['age'] . '<br>';
        $id = $users['rowid'];
        $firstName = $users['firstName'];
        $lastName = $users['lastName'];
        $age =$users['age'];

        echo '<tr>';
        echo '<td>'.$id.'</td>';
        echo '<td>'.$firstName.'</td>';
        echo '<td>'.$lastName.'</td>';
        echo '<td>'.$age.'</td>';
        echo '<td><a href="#" onclick="prepareUpdate('.$id.');">Edit</a></td>';
        echo '<td><a href="#" onclick="Delete('.$users['rowid'].');">Deletar</a></td>';
        echo '</tr>';

    }
}

//CREATE
function create($db, $firstName, $lastName, $age){
    $db->exec("INSERT INTO users(firstName, lastName, age) VALUES('$firstName','$lastName','$age')");
}

//DELETE
function delete($db,$id){
    $db->exec("DELETE FROM users WHERE rowid = $id");
}

//UPDATE
function update($db,$id,$firstName,$lastName,$age){
    $result = $db->query('SELECT rowid, * FROM users');
    echo "UPDATEEEEE";
    echo "$id,$firstName, $lastName,$age";
}


