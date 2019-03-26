use transactions

drop table Students

create table Students (
	id int primary key identity,
	name varchar(255),
	age int,
	grade int
)

insert into Students values ('Kragen', 21, 12)
insert into Students values ('Svenskeren', 23, 7)
insert into Students values ('Marden', 34, 10)
insert into Students values ('Jan', 28, 7)