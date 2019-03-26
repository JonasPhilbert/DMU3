use transactions

set transaction isolation level repeatable read
set transaction isolation level read committed -- Prevents dirty reads.
set transaction isolation level read uncommitted
set transaction isolation level serializable


begin tran
--Transaktion
commit tran
--eller
rollback tran

select * 
from sys.dm_tran_locks
