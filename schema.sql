CREATE TABLE Locations (
    LocationID INT IDENTITY(1,1) PRIMARY KEY,
    LocationName VARCHAR(100) NOT NULL,
    Description VARCHAR(255),
    MaxCapacity INT NOT NULL
);
CREATE TABLE Visits (
    VisitID INT IDENTITY(1,1) PRIMARY KEY,
    LocationID INT NOT NULL,
    CheckInTime DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    CheckOutTime DATETIME2 NULL,

    FOREIGN KEY (LocationID) REFERENCES Locations(LocationID)
);
/*Current Occupancy*/
SELECT
    l.LocationName,
    COUNT(v.VisitID) AS CurrentOccupancy
FROM Locations l
LEFT JOIN Visits v
    ON l.LocationID = v.LocationID
    AND v.CheckOutTime IS NULL
GROUP BY l.LocationID, l.LocationName;

/*Check outs*/
UPDATE Visits
SET CheckOutTime = SYSUTCDATETIME()
WHERE VisitID = 1
  AND CheckOutTime IS NULL;

GO
/*Occupancy Count*/
CREATE VIEW CurrentOccupancy AS
SELECT
    l.LocationID,
    l.LocationName,
    l.MaxCapacity,
    COUNT(v.VisitID) AS OccupancyCount
FROM Locations l
LEFT JOIN Visits v
    ON l.LocationID = v.LocationID
    AND v.CheckOutTime IS NULL
GROUP BY l.LocationID, l.LocationName, l.MaxCapacity;

GO

SELECT * FROM CurrentOccupancy;

SELECT * FROM Locations;
SELECT * FROM Visits;