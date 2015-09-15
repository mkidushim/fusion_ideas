<?php
require('mysql_connect.php');
$name = addslashes($_POST['name']);
$sid = addslashes($_POST['section_id']);
$lid = addslashes($_POST['link_id']);
$sql = "UPDATE links SET name='$name' WHERE section_id= $sid and link_id = $lid";
if(empty($name) OR empty($sid) or empty($lid)){
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