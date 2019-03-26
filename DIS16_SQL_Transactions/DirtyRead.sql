use transactions

-- T1
begin tran
	update Students set age = 90 where name = 'Jan'
	-- T2
rollback tran

-- T2
begin tran
	select * from Students where name = 'Jan'
commit tran