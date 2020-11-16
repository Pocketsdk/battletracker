DROP TABLE IF EXISTS SubFaction;
DROP TABLE IF EXISTS Tactic;
DROP TABLE IF EXISTS Faction;
DROP TABLE IF EXISTS League;
DROP TABLE IF EXISTS GameSystem;
DROP TABLE IF EXISTS Player;


CREATE TABLE IF NOT EXISTS GameSystem (
    GameSystemID int(10) PRIMARY KEY AUTO_INCREMENT,    /* Primary Key */
    GameSystemName varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS Player (
    PlayerID int(10) PRIMARY KEY AUTO_INCREMENT,    /* Primary Key */
    GamerTag varchar(20) NOT NULL,
    PlayerFirstName varchar(20) NULL,
    PlayerLastName varchar(20) NULL
);

CREATE TABLE IF NOT EXISTS Faction (
    FactionID int(10) PRIMARY KEY AUTO_INCREMENT,   /* Primary Key */
    GameSystemID int(10) NOT NULL,                  /* Foreign Key */
    FactionName varchar(40) NOT NULL,               
    IsLegacy boolean NOT NULL,
    CONSTRAINT FK_GameSystem_Faction FOREIGN KEY (GameSystemID) REFERENCES GameSystem(GameSystemID)
);

CREATE TABLE IF NOT EXISTS SubFaction (
    SubFactionID int(10) PRIMARY KEY AUTO_INCREMENT,    /* Primary Key */
    GameSystemID int(10) NOT NULL,                      /* Foreign Key */
    FactionID int(10) NOT NULL,                         /* Foreign Key */
    SubfactionName varchar(20) NOT NULL,
    IsLegacy boolean NOT NULL,
    CONSTRAINT FK_GameSystem_SubFaction FOREIGN KEY (GameSystemID) REFERENCES GameSystem(GameSystemID),
    CONSTRAINT FK_Faction_SubFaction FOREIGN KEY (FactionID) REFERENCES Faction(FactionID)
);

CREATE TABLE IF NOT EXISTS Tactic (
    TacticID int(10) PRIMARY KEY AUTO_INCREMENT,    /* Primary Key */
    GameSystemID int(10) NOT NULL,                  /* Foreign Key */
    FactionID int(10) NOT NULL,                     /* Foreign Key */
    TacticName varchar (20) NOT NULL,
    CONSTRAINT FK_GameSystem_Tactic FOREIGN KEY (GameSystemID) REFERENCES GameSystem(GameSystemID),
    CONSTRAINT FK_Faction_Tactic FOREIGN KEY (FactionID) REFERENCES Faction(FactionID)
);

CREATE TABLE IF NOT EXISTS League (
    LeagueID int(10) PRIMARY KEY AUTO_INCREMENT,    /* Primary Key */
    GameSystemID int(10) NOT NULL,                  /* Foreign Key */
    LeagueStartDate DATE NOT NULL, 
    LeagueEndDate DATE NULL,     
    LeagueName varchar(30) NOT NULL,
    CONSTRAINT FK_GameSystem_League FOREIGN KEY (GameSystemID) REFERENCES GameSystem(GameSystemID)            
);

INSERT INTO Player (PlayerID, GamerTag, PlayerFirstName, PlayerLastName) VALUES 
(NULL, 'PocketsDK', 'Doug', 'Kirchhof'),
(NULL, 'Gr1mlock', 'Damien', NULL),
(NULL, 'Critter', NULL, NULL);

INSERT INTO GameSystem (GameSystemID, GameSystemName) VALUES
(NULL, 'Warhammer 40k'),
(NULL, 'Age of Sigmar'),
(NULL, 'Kill Team');

INSERT INTO Faction (FactionID, GameSystemID, FactionName, IsLegacy) VALUES
(NULL, 1, 'Space Marines', false),
(NULL, 1, 'Necrons', false),
(NULL, 1, 'Tyrannids', false);

INSERT INTO SubFaction (SubFactionID, GameSystemID, FactionID, SubfactionName, IsLegacy) VALUES
(NULL, 1, 1, 'Ultramarines', false),
(NULL, 1, 2, 'Novak', false),
(NULL, 1, 3, 'Kraken', false);

INSERT INTO Tactic (TacticID, GameSystemID, FactionID, TacticName) VALUES
(NULL, 1, 1, 'Bolter Fusillades'),
(NULL, 1, 1, 'Born Heros');

INSERT INTO League (LeagueID, GameSystemID, LeagueStartDate, LeagueEndDate, LeagueName) VALUES
(NULL, 1, '2020-10-10', NULL, 'Path To Glory'),
(NULL, 1, '2020-10-10', NULL, 'Nova'),
(NULL, 1, '2020-10-10', NULL, 'Redclaw');