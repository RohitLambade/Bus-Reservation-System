package com.app.demo.repository;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.demo.pojo.Buses;
import com.app.demo.pojo.Member;
import com.app.demo.pojo.Transaction;
public interface JPARepo2 extends JpaRepository<Transaction, Integer>{
	@Query("select t from Transaction t where t.reg_id=?1")
	public List<Transaction> findByreguserid(int type);
	@Query("select m from Member m where m.reguserid=?1")//..
	public List<Member> findByuserid(int type);//..
	
	//Admin Module
	@Query("select sum(total_cost) from Transaction t where t.dateOfBooking between ?1 and ?2")
	public Integer findProfitByMonth(LocalDate d1,LocalDate d2);
	@Query("select t from Transaction t where t.dateOfBooking between ?1 and ?2")
	public List<Transaction> findByDateOfPayment(LocalDate d1,LocalDate d2);
	@Query("select b from Buses b join Transaction t on t.bus_id.busid=b.busid group by b.busid,b.busname,b.source,b.destination,b.cost order by count(b.busid) desc" )
	public List<Buses> findByPreferredBus();
	
	//Venkat
	@Query("select t from Transaction t where t.trans_id=?1")
	public Transaction searchTransaction(int trans_id);
	@Modifying
	@Transactional
	@Query("update Transaction t set t.cancelled_status='YES' where t.trans_id=?1")
	public void updateTransaction(int id);
}
