<?php
require('mysql_connect.php');
$id = $_POST['client_id'];
$name = $_POST['name'];
$sql = "INSERT INTO sections (client_id, name)
VALUES ($id,'$name')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>