-- [10.10.10.1\SQLEXPRESS].destA.dbo
delete from lige.dbo.Kunder where kundeid > -1
insert into lige.dbo.Kunder values (0, 'Jan', '1999');
insert into lige.dbo.Kunder values (2, 'Janne', '1991');
go

delete from [10.10.10.1\SQLEXPRESS].ulige.dbo.Kunder where kundeid > -1
insert into [10.10.10.1\SQLEXPRESS].ulige.dbo.Kunder values (1, 'Jones', '1996')
insert into [10.10.10.1\SQLEXPRESS].ulige.dbo.Kunder values (3, 'Alex', '1992')
go

drop view if exists DesTalleKunder
go

create view DestAlleKunder as
	select * from lige.dbo.Kunder
	union
	select * from [10.10.10.1\SQLEXPRESS].ulige.dbo.Kunder
go

select * from DestAlleKunder
go

drop trigger if exists Indsaettelse
go

create trigger Indsaettelse
on DestAlleKunder
instead of insert as
begin
	if (select kundeid from inserted) % 2 = 0 begin
		insert into lige.dbo.Kunder select * from inserted
	end

	if (select kundeid from inserted) % 2 != 0 begin
		insert into [10.10.10.1\SQLEXPRESS].ulige.dbo.Kunder select * from inserted
	end
end
go

insert into DestAlleKunder values (5, 'Jannik', '2000')
go

select * from DestAlleKunder
go

--insert into [10.10.10.1\SQLEXPRESS].ulige.dbo.Kunder values(9001, 'Ikke Jan', '9001')


Set XACT_ABORT 
ON Begin distributed tran
Insert into lige.dbo.Kunder values (6, 'From', '1120')
Insert into [10.10.10.1\SQLEXPRESS].ulige.dbo.Kunder values (9, 'James Local', 'Male')
Commit tran
go

select * from DestAlleKunder
go

declare @i as int = 20
while @i < 1000 begin
	insert into DestAlleKunder values (@i, CONCAT('Jan', @i), 'Male')
	set @i = @i + 1
end

select * from Kunder