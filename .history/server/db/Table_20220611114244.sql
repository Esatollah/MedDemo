DROP TABLE IF EXISTS Medikamente, Bestellungen, MB;

CREATE TABLE Medikamente (
	id SERIAL PRIMARY Key,
	Name VARCHAR(128),
	Kassenzeichen VARCHAR(3),
	Menge VARCHAR(6),
    Mengenart VARCHAR(4),
	Box VARCHAR(3),
    Abgabezahl VARCHAR(2)
);

CREATE TABLE Bestellungen (
	OId SERIAL Primary Key,
	ODate Date,
	Anmerkung VARCHAR(255),
	Vorname VARCHAR(24),
	Nachname VARCHAR(26),
	vpin VARCHAR(4),
	vbday VARCHAR(6)
);

CREATE TABLE MB (
	id int REFERENCES Medikamente,
	OId int REFERENCES Bestellungen on delete CASCADE,
	Bestellung_anzahl NUMERIC NOT NULL DEFAULT 1,
	PRIMARY Key (id, OId) 
);

Select Bestellungen.OId, Vorname, Nachname, ODate, Name,Menge, Mengenart
FROM Medikamente, Bestellungen, MB 
Where MB.OId = Bestellungen.OId and MB.id = Medikamente.id;

