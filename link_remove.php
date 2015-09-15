<?php
require('mysql_connect.php');
$lid = addslashes($_POST['link_id']);
$sid = addslashes($_POST['section_id']);
$sql = "DELETE FROM links WHERE link_id= $lid AND section_id = $sid";
if(empty($sid) or empty($lid)){
	echo "input empty";
	return;
}
if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);

?>