<?php
require('mysql_connect.php');
$id = addslashes($_POST['client_id']);
$s_id= addslashes($_POST['section_id']);
$sql = "DELETE FROM sections WHERE client_id=$id AND section_id = $s_id";
if(empty($id) or empty($s_id)){
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