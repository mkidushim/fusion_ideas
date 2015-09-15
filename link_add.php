<?php
require('mysql_connect.php');
$name = $_POST['name']; 
$sid = $_POST['section_id'];
$sql = "INSERT INTO links (name, section_id)
VALUES ('$name', $sid)";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>