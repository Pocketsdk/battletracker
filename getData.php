<?php
	include_once('db_connection.php');
	$player = isset($_GET['player']) ? mysqli_real_escape_string($conn, $_GET['player']) :  "";
	$sql_player = "SELECT * FROM `pdk40k`.`player`;";
	$get_data_query_player = mysqli_query($conn, $sql_player) or die(mysqli_error($conn));
		if(mysqli_num_rows($get_data_query_player)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query_player)){
			extract($r);
			$result[] = array("PlayerID" => $playerID, "GamerTag" => $gamerTag);
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "To-Do not found!");
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);