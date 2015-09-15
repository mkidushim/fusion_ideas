<?php
require('mysql_connect.php');
$name = $_POST['name'];
$sql = "INSERT INTO clients (name)
VALUES ('$name')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>