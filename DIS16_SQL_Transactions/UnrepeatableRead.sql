use transactions

-- T1
begin tran
	select * from Students where name = 'Marden'
	-- T2
	select * from Students where name = 'Marden'
commit tran

-- T2
begin tran
	update Students set grade = 12 where name = 'Marden'
commit tran