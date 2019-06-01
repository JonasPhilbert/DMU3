use dis23
go

drop table if exists brugere
go

create table brugere (
	brugerid varchar(255),
	passw varchar(255)
)
go

insert into brugere values ('jones', '1234')
go

select * from brugere
go