USE destB

DROP TABLE IF EXISTS Posteringer
DROP TABLE IF EXISTS Kunder

CREATE TABLE Kunder (
	kundeid INT PRIMARY KEY,
	navn VARCHAR(25),
	postnr CHAR(4)
)

CREATE TABLE Posteringer (
	kundeid INT,
	beloeb INT
)

INSERT INTO Kunder VALUES (1, 'Marden', '8330')
INSERT INTO Kunder VALUES (3, 'From', '8000')
INSERT INTO Kunder VALUES (5, 'Frede', '8000')
INSERT INTO Kunder VALUES (7, 'Pedes', '8210')

INSERT INTO Posteringer VALUES (1, 450)
INSERT INTO Posteringer VALUES (3, 21500)
INSERT INTO Posteringer VALUES (5, 12)
INSERT INTO Posteringer VALUES (7, 771)