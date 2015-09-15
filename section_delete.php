<?php
require('mysql_connect.php');
$id = $_POST['client_id'];
$s_id= $_POST['section_id'];
$sql = "DELETE FROM sections WHERE client_id=$id AND section_id = $s_id";

if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);

?>