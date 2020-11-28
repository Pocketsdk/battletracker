<?php
    class Faction {
        // DB stuff
        private $conn;
        private $table = 'faction';

        // Faction Properties
        public $faction_id;
        public $faction_name;
        public $game_system_id;
        public $game_system_name;
        public $is_legacy;

        // Constructor with DB
        public function __construct($db) {
            $this->conn = $db;
        }

        // Get Factions
        public function read() {
            // Create query
            $query = 'SELECT 
                    s.GameSystemName as game_system_name,
                    f.FactionID as faction_id,
                    f.FactionName as faction_name,
                    f.IsLegacy as is_legacy,
                    f.GameSystemID as game_system_id
                FROM
                    ' . $this->table . ' f
                LEFT JOIN 
                    gamesystem s ON f.GameSystemID = s.GameSystemID
                ORDER BY
                    f.FactionName ASC';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Execute query
            $stmt->execute();

            return $stmt;
        }
}