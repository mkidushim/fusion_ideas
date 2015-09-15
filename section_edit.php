<?php
require('mysql_connect.php');
$cid = addslashes($_POST['client_id']);
$sid = addslashes($_POST['section_id']);
$name = addslashes($_POST['name']);
$sql = "UPDATE sections SET name='$name' WHERE client_id= $cid AND section_id= $sid";
if(empty($cid) or empty($name) or empty($sid)){
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