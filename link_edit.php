<?php
require('mysql_connect.php');
$name = $_POST['name'];
$sid = $_POST['section_id'];
$lid = $_POST['link_id'];
$sql = "UPDATE links SET name='$name' WHERE section_id= $sid and link_id = $lid";

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>