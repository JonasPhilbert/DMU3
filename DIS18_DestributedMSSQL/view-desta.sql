CREATE VIEW AlleKunder AS
	SELECT * FROM destA.dbo.Kunder UNION SELECT * FROM destB.dbo.Kunder