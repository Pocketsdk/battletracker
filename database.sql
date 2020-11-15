DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Faction;
DROP TABLE IF EXISTS SubFaction;

CREATE TABLE IF NOT EXISTS Player (
    PlayerId int(10) PRIMARY KEY AUTO_INCREMENT,
    GamerTag varchar(20) NOT NULL,
    PlayerFirstName varchar(20) NULL,
    PlayerLastName varchar(20) NULL
);

CREATE TABLE IF NOT EXISTS Faction (
    FactionId int(10) PRIMARY KEY AUTO_INCREMENT,
    FactionName varchar(40) NOT NULL,
    IsLegacy boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS SubFaction (
    SubFactionID int(10) PRIMARY KEY AUTO_INCREMENT,
    FactionID int(10) NOT NULL,
    SubfactionName varchar(20) NOT NULL,
    IsLegacy boolean NOT NULL,
    CONSTRAINT FK_Faction_SubFaction FOREIGN KEY (FactionID) REFERENCES Faction(FactionId),
);

INSERT INTO Player (PlayerId, GamerTag, PlayerFirstName, PlayerLastName) VALUES 
(NULL, 'PocketsDK', 'Doug', 'Kirchhof'),
(NULL, 'Gr1mlock', 'Damien', NULL),
(NULL, 'Critter', NULL, NULL);

INSERT INTO Faction (FactionId, FactionName, IsLegacy) VALUES
(NULL, 'Space Marines', false),
(NULL, 'Necrons', false),
(NULL, 'Tyrannids', false);

INSERT INTO SubFaction (SubFactionID, FactionId, SubfactionName, IsLegacy) VALUES
(NULL, 1, 'Ultramarines', false),
(NULL, 2, 'Novak', false),
(NULL, 3, 'Kraken', false);