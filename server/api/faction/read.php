<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Faction.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate faction object
    $faction = new Faction($db);

    // Faction query
    $result = $faction->read();

    // Get row count
    $num = $result->rowCount();

    // Check if any factions
    if($num > 0) {
        // Faction array
        $faction_arr = array();
        $faction_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $faction_item = array(
                'FactionID' =>$faction_id,
                'FactionName' =>$faction_name,
                'GameSystemID' =>$game_system_id,
                'GameSystemName' =>$game_system_name,
                'IsLegacy' =>$is_legacy
            );

            // Push to "data"
            array_push($faction_arr['data'], $faction_item);
        }

        // Turn to JSON & output
        echo json_encode($faction_arr);

    } else {
        // No factions
        echo json_encode(
            array('message' => 'No factions found')
        );
    }