<?php
require('mysql_connect.php');
$id = addslashes($_POST['client_id']);
$sql = "DELETE FROM clients WHERE client_id= $id";
if($id == ""){
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