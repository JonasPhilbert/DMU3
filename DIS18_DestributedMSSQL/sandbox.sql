DROP VIEW IF EXISTS AlleKunder

SELECT * FROM AlleKunder

DROP TRIGGER IF EXISTS Indsaettelse

INSERT INTO AlleKunder VALUES (10, 'Testman10', '1234')
INSERT INTO AlleKunder VALUES (11, 'Testman11', '1234')

SELECT * FROM destA.dbo.Kunder
SELECT * FROM destB.dbo.Kunder