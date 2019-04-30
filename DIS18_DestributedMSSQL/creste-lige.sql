USE lige
GO

DROP VIEW IF EXISTS AlleKunder
DROP TABLE IF EXISTS Bestillinger
DROP TABLE IF EXISTS Kunder

CREATE TABLE Kunder (
	kundeid INT PRIMARY KEY,
	navn VARCHAR(25),
	postnr CHAR(4)
)

CREATE TABLE Bestillinger (
	kundeid INT,
	varenavn VARCHAR(25),
	antalvare INT
)

INSERT INTO lige VALUES (0, 'Jan', '8260')
INSERT INTO lige VALUES (2, 'Bones', '8220')
INSERT INTO lige VALUES (4, 'Alexander', '8600')
INSERT INTO lige VALUES (6, 'Kragen', '1100')

INSERT INTO Bestillinger VALUES (0, 'Raspberry Pi 3B', 1)
INSERT INTO Bestillinger VALUES (2, 'Apple iSmoke', 3)
INSERT INTO Bestillinger VALUES (4, 'Lenovo ThinkPad T9001', 1)
INSERT INTO Bestillinger VALUES (6, 'Toiletpapir', 12)