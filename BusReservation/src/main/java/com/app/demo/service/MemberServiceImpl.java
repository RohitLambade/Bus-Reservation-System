package com.app.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.demo.repository.JPABook;
import com.app.demo.repository.JPARepo2;
import com.app.demo.repository.JPARepoBus;
import com.app.demo.repository.JPARepoSchedule;
import com.app.demo.repository.JPASeat;
import com.app.demo.repository.MyJPARepo;
import com.app.demo.DAO.BusDetailRepo;
import com.app.demo.pojo.Booking;
import com.app.demo.pojo.Buses;
import com.app.demo.pojo.Member;
import com.app.demo.pojo.Password;
import com.app.demo.pojo.Schedule;
import com.app.demo.pojo.Seat;
import com.app.demo.pojo.Transaction;
import com.app.demo.pojo.UnRegistered;

@Service
@Transactional
public class MemberServiceImpl implements MemberService
{
	@Autowired
	BusDetailRepo bd1;
	
	@Autowired
	JPABook jpaRepoB;
	
	@Autowired
	JPARepoBus jpabus;
	
	@Autowired
	JPARepoSchedule jpas;
	
	@Autowired
	MyJPARepo jpa;
	
	@Autowired
	JPARepo2 jpaRepo2;
	
	@Autowired
	JPASeat jpaRepoS;
	
	@Override
	public Integer getProfitByMonth(LocalDate d1, LocalDate d2) {
		
		return jpaRepo2.findProfitByMonth(d1, d2);
	}
	
	@Override
	public boolean addRegisteredUser(Member m) 
	{
		jpa.save(m);
		return true;
	}
	
	@Override
	public List<Member> getMembers() {
		// TODO Auto-generated method stub
		return jpa.findAll();
	}
	
	@Override
	public Member findByRegusernameAndRegpassword(String regusername, String regpassword) {
		// TODO Auto-generated method stub
		return jpa.findByRegusernameAndRegpassword(regusername, regpassword);
	}

	@Override
	public List<Transaction> getTransactions(int type) {
		// TODO Auto-generated method stub
		return jpaRepo2.findByreguserid(type);
	}

	@Override
	public boolean changePassword(Password p) {
		// TODO Auto-generated method stub
		System.out.println("in implementetaion");
		String pass=p.getPass();
		String uname=p.getUsername();
		jpa.changePassword(pass, uname);
		return true;
	}

	@Override
	public Member searchMember(String username) {
		// TODO Auto-generated method stub
		return jpa.findByRegusername(username);
	}

	@Override
	public boolean updatePass(Member m) {
		// TODO Auto-generated method stub
		jpa.save(m);
		return true;
	}

	@Override
	public List<Member> getProfile(int type) {
		// TODO Auto-generated method stub
		return jpaRepo2.findByuserid(type);
	}

	@Override
	public Member searchMemberById(int reguserid) {
		// TODO Auto-generated method stub
		return jpa.findByReguserid(reguserid);
	}
	
	
	
	//Admin Module
	
	@Override
	public boolean addBus(Buses bus) {
		jpabus.save(bus);
		return true;
	}

	@Override
	public List<Buses> getBus() {
		return jpabus.findAll();
	}

	@Override
	public boolean addSchedule(Schedule sc) {
		jpas.save(sc);
		return true;
	}

	@Override
	public List<Schedule> getSchedule() {
		return jpas.findAll();
	}

	@Override
	public List<Transaction> getTransactionByruserid(int type) {
		return jpaRepo2.findByreguserid(type);
	}

	@Override
	public List<Member> getUsersFromTransaction() {
		return jpa.getUsersFromTransaction();
	}

	@Override
	public List<Transaction> getTransactionByDate(LocalDate d1, LocalDate d2) {
		return jpaRepo2.findByDateOfPayment(d1, d2);
	}

	@Override
	public List<Buses> getPreferredBus() {
		return jpaRepo2.findByPreferredBus();
	}

	@Override
	public Buses getBusById(String id) {
		return jpabus.findByBusid(id);
	}

	@Override
	public boolean delSchedule(String scheduleid) {
		// TODO Auto-generated method stub
		return false;
	}

	

	//Venkat
	@Override
	public boolean updateSchedule(Schedule s) {
		// TODO Auto-generated method stub
		return bd1.updateSchedule(s);
	}

	@Override
	public boolean deleteSchedule(String sid) {
		// TODO Auto-generated method stub
		return bd1.deleteSchedule(sid);
	}

	@Override
	public List<Schedule> getSchedules() {
		// TODO Auto-generated method stub
		return bd1.getSchedules();
	}

	@Override
	public Schedule searchSchedule(String sid) {
		// TODO Auto-generated method stub
		return bd1.searchSchedule(sid);
	}

	@Override
	public boolean addSeat(Seat s) {
		// TODO Auto-generated method stub
		return bd1.addSeat(s);
	}

	@Override
	public boolean updateSeat(Seat s) {
		// TODO Auto-generated method stub
		return bd1.updateSeat(s);
	}

	@Override
	public boolean deleteSeat(int seatNo) {
		// TODO Auto-generated method stub
		return bd1.deleteSeat(seatNo);
	}

	@Override
	public List<Seat> getSeats() {
		// TODO Auto-generated method stub
		return bd1.getSeats();
	}

	@Override
	public Seat searchSeat(int seatNo) {
		// TODO Auto-generated method stub
		return bd1.searchSeat(seatNo);
	}

	@Override
	public List<Integer> findBySchId(String sch_id) {
		// TODO Auto-generated method stub
		return bd1.findBySchId(sch_id);
	}

	@Override
	public boolean updateBus(Buses b) {
		// TODO Auto-generated method stub
		return bd1.updateBus(b);
	}

	@Override
	public int findCostBybusId(String bus_id) {
		// TODO Auto-generated method stub
		return bd1.findCostBybusId(bus_id);
	}

	@Override
	public boolean deleteBus(String bus_id) {
		// TODO Auto-generated method stub
		return bd1.deleteBus(bus_id);
	}

	@Override
	public List<Buses> getBuses() {
		// TODO Auto-generated method stub
		return bd1.getBuses();
	}

	@Override
	public Buses searchBus(String bus_id) {
		// TODO Auto-generated method stub
		return bd1.searchBus(bus_id);
	}

	@Override
	public Transaction addTransaction(Transaction t) {
		// TODO Auto-generated method stub
		return bd1.addTransaction(t);
	}

	
	 @Override public void updateTransaction(int id) {
		 jpaRepo2.updateTransaction(id); 
		 }
	 

	@Override
	public boolean deleteTransaction(int trans_id) {
		// TODO Auto-generated method stub
		return bd1.deleteTransaction(trans_id);
	}

	@Override
	public List<Transaction> getTransaction() {
		// TODO Auto-generated method stub
		return bd1.getTransaction();
	}

	@Override
	public Transaction searchTransaction(int trans_id) {
		// TODO Auto-generated method stub
		return bd1.searchTransaction(trans_id);
	}

	@Override
	public boolean addBooking(Booking b) {
		// TODO Auto-generated method stub
		return bd1.addBooking(b);
	}

	@Override
	public boolean updateBooking(Booking b) {
		// TODO Auto-generated method stub
		return bd1.updateBooking(b);
	}

	@Override
	public boolean deleteBooking(int booking_id) {
		// TODO Auto-generated method stub
		return bd1.deleteBooking(booking_id);
	}

	@Override
	public List<Booking> getBooking() {
		// TODO Auto-generated method stub
		return bd1.getBooking();
	}

	@Override
	public Booking searchBooking(int booking_id) {
		// TODO Auto-generated method stub
		return bd1.searchBooking(booking_id);
	}
	
	@Override
	public List<Buses> searchSource(String src) {
		return jpabus.findBySource(src);
	}

	@Override
	public List<Buses> searchDestination(String dest) {
		return jpabus.findByDestination(dest);
	}

	@Override
	public List<Buses> findBySourceAndDestination(String source, String destination) {
		return jpabus.findBySourceAndDestination(source,destination);
		
	}

	@Override
	public List<Schedule> findByDate_Of_Jrny(LocalDate loc) {
		// TODO Auto-generated method stub
		return jpas.findByDate_Of_Jrny(loc);
	}

	@Override
	public List<Schedule> findByJoin(String source, String destination, LocalDate loc) {
		// TODO Auto-generated method stub
		return jpas.findByJoin(source, destination, loc);
	}

	@Override
	public List<Buses> findByJoinbus(String source, String destination, LocalDate loc) {
		
		return  jpas.findByJoinbus(source, destination, loc);
	}

	@Override
	public UnRegistered addUnregUser(UnRegistered u) {
		// TODO Auto-generated method stub
		return bd1.addUnregUser(u);
	}

	@Override
	public boolean updateUnregUser(UnRegistered u) {
		// TODO Auto-generated method stub
		return bd1.updateUnregUser(u);
	}

	@Override
	public boolean deleteUnregUser(int unreg_id) {
		// TODO Auto-generated method stub
		return bd1.deleteUnregUser(unreg_id);
	}

	@Override
	public List<UnRegistered> getUnregUsers() {
		// TODO Auto-generated method stub
		return bd1.getUnregUsers();
	}

	@Override
	public UnRegistered searchUnregUser(int unreg_id) {
		// TODO Auto-generated method stub
		return bd1.searchUnregUser(unreg_id);
	}

	@Override
	public void DeleteBooking(String sid) {
		// TODO Auto-generated method stub
		jpaRepoB.deleteBook(sid);
		
	}

	@Override
	public void DeleteSeats(String sid) {
		// TODO Auto-generated method stub
		jpaRepoS.deleteSeats(sid);
		
	}

	@Override
	public List<Integer> findBySchIdAndSeatNo(String sch_id, int seatNo) {
		// TODO Auto-generated method stub
		return bd1.findBySchIdAndSeatNo(sch_id, seatNo);
	}

	@Override
	public boolean changeTransactionStatus(int trans_id) {
		// TODO Auto-generated method stub
		return bd1.changeTransactionStatus(trans_id);
	}

	@Override
	public List<String> SchIdFrmBooking(int trans_id) {
		// TODO Auto-generated method stub
		return bd1.SchIdFrmBooking(trans_id);
	}

	@Override
	public List<Integer> seatNoFrmBooking(int trans_id) {
		// TODO Auto-generated method stub
		return bd1.seatNoFrmBooking(trans_id);
	}

	@Override
	public boolean deleteSeats1(String sch_id, int seatNo) {
		// TODO Auto-generated method stub
          jpaRepoS.deleteSeats1(sch_id, seatNo);
		return true;
	}

	@Override
	public void updateWallet(int cost,int reg) {
		// TODO Auto-generated method stub
		jpa.updatewallet(cost,reg);
	}

	@Override
	public void updatemoney(int reg, int cost) {
		// TODO Auto-generated method stub
		jpa.updatewalletm(reg, cost);
	}
	
}
//.findById(reguserid).get();