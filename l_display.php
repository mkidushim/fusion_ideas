<?php
require('mysql_connect.php');
$sql = "SELECT * FROM links";
$query = mysqli_query($conn, $sql);
if ($query) {
	while ($out = mysqli_fetch_array($query)) {
    // $data_array[$out['name']] = $out['value'];
	echo "<li class='list-group-item'>Name:<b>$out[name]</b> Section ID: $out[section_id] Link ID: $out[link_id]</li>";
	}
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>