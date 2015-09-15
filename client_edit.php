<?php
require('mysql_connect.php');
$name = $_POST['name'];
$id = $_POST['client_id'];
$sql = "UPDATE clients SET name='$name' WHERE client_id= $id";

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>