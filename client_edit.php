<?php
require('mysql_connect.php');
$name = addslashes($_POST['name']);
$id = addslashes($_POST['client_id']);
$sql = "UPDATE clients SET name='$name' WHERE client_id= $id";
if($name == "" OR $id == ""){
	echo "input empty";
	return;
}
if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>