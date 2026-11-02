CREATE TABLE Locations (
    LocationID INT IDENTITY(1,1) PRIMARY KEY,
    LocationName VARCHAR(100) NOT NULL,
    Description VARCHAR(255),
    MaxCapacity INT NOT NULL
);