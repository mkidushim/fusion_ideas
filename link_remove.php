<?php
require('mysql_connect.php');
$lid = $_POST['link_id'];
$sid = $_POST['section_id'];
$sql = "DELETE FROM links WHERE link_id= $lid AND section_id = $sid";

if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);

?>