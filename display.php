<?php
require('mysql_connect.php');
$table = $_POST['db'];
$sql = "SELECT * FROM $table";

if (mysqli_query($conn, $sql)) {
	mysqli_
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);

?>