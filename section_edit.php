<?php
require('mysql_connect.php');
$cid = $_POST['client_id'];
$sid = $_POST['section_id'];
$name = $_POST['name'];
$sql = "UPDATE sections SET name='$name' WHERE client_id= $cid AND section_id= $sid";

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>