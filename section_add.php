<?php
require('mysql_connect.php');
$id = addslashes($_POST['client_id']);
$name = addslashes($_POST['name']);
$sql = "INSERT INTO sections (client_id, name)
VALUES ($id,'$name')";
if (empty($id) or empty($name)){
	echo "input empty";
	return;
}
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>