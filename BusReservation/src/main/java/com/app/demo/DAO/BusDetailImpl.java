package com.app.demo.DAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.demo.pojo.Booking;
import com.app.demo.pojo.Buses;
import com.app.demo.pojo.Schedule;
import com.app.demo.pojo.Seat;
import com.app.demo.pojo.Transaction;
import com.app.demo.pojo.UnRegistered;
@Repository
public class BusDetailImpl implements BusDetailRepo{
   @Autowired
	EntityManager eMan;
	@Override
	public boolean addSchedule(Schedule s) {
		// TODO Auto-generated method stub
		eMan.persist(s);
		return true;
	}

	@Override
	public boolean updateSchedule(Schedule s) {
		// TODO Auto-generated method stub
		eMan.merge(s);
		return true;
	}

	@Override
	public boolean deleteSchedule(String sid) {
		// TODO Auto-generated method stub
		Schedule s1=eMan.find(Schedule.class, sid);
		eMan.remove(s1);
		return true;
	}

	@Override
	public List<Schedule> getSchedules() {
		// TODO Auto-generated method stub
		List<Schedule> l1=eMan.createQuery("from Schedule").getResultList();
		return l1;
	}

	@Override
	public Schedule searchSchedule(String sid) {
		// TODO Auto-generated method stub
		Schedule s1=eMan.find(Schedule.class, sid);
		return s1;
	}

	@Override
	public boolean addSeat(Seat s) {
		// TODO Auto-generated method stub
		eMan.persist(s);
		return true;
	}

	@Override
	public boolean updateSeat(Seat s) {
		// TODO Auto-generated method stub
		eMan.merge(s);
		return true;
	}

	@Override
	public boolean deleteSeat(int seatNo) {
		// TODO Auto-generated method stub
		Seat s=eMan.find(Seat.class, seatNo);
		eMan.remove(s);
		return true;
	}

	@Override
	public List<Seat> getSeats() {
		// TODO Auto-generated method stub
		List<Seat> l1=eMan.createQuery("from Seat").getResultList();
		return l1;
	}

	@Override
	public Seat searchSeat(int seatNo) {
		// TODO Auto-generated method stub
		Seat s=eMan.find(Seat.class, seatNo);
		return s;
	}

	@Override
	public List<Integer> findBySchId(String sch_id) {
		// TODO Auto-generated method stub
		Query q=eMan.createQuery("select seatNo from Seat where schedule.schedule_id=:sch_id and available=:avail");
		q.setParameter("sch_id",sch_id );
		q.setParameter("avail", "yes");
		List<Integer> l1=q.getResultList();
		return l1;
	}

	@Override
	public boolean addBus(Buses b) {
		// TODO Auto-generated method stub
		eMan.persist(b);
		return true;
	}

	@Override
	public boolean updateBus(Buses b) {
		// TODO Auto-generated method stub
		eMan.merge(b);
		return true;
	}

	@Override
	public boolean deleteBus(String bus_id) {
		// TODO Auto-generated method stub
		Buses b1=eMan.find(Buses.class, bus_id);
		eMan.remove(bus_id);
		return true;
	}

	@Override
	public List<Buses> getBuses() {
		// TODO Auto-generated method stub
		List<Buses> l1=eMan.createQuery("from Buses").getResultList();
		return l1;
	}

	@Override
	public int findCostBybusId(String bus_id) {
		// TODO Auto-generated method stub
		Query q=eMan.createQuery("select cost from Buses where busid=:bus_id");
		q.setParameter("bus_id", bus_id);
		int cost=(int) q.getSingleResult();
		return cost;
	}

	@Override
	public Buses searchBus(String bus_id) {
		// TODO Auto-generated method stub
		Buses b1=eMan.find(Buses.class, bus_id);
		return b1;
	}

	@Override
	public Transaction addTransaction(Transaction t) {
		// TODO Auto-generated method stub
		eMan.persist(t);
		return t;
	}

	/*
	 * @Override public boolean updateTransaction(int id) { // TODO
	 * Auto-generated method stub eMan.merge(t); return true; }
	 */

	@Override
	public boolean deleteTransaction(int trans_id) {
		// TODO Auto-generated method stub
		Transaction t=eMan.find(Transaction.class, trans_id);
		eMan.remove(t);
		return true;
	}

	@Override
	public List<Transaction> getTransaction() {
		// TODO Auto-generated method stub
	  List<Transaction> l1=eMan.createQuery("from Transaction").getResultList();
		return l1;
	}

	@Override
	public Transaction searchTransaction(int trans_id) {
		// TODO Auto-generated method stub
		Transaction t=eMan.find(Transaction.class, trans_id);
		return t;
	}

	@Override
	public boolean addBooking(Booking b) {
		// TODO Auto-generated method stub
		eMan.persist(b);
		return true;
	}

	@Override
	public boolean updateBooking(Booking b) {
		// TODO Auto-generated method stub
		eMan.merge(b);
		return true;
	}

	@Override
	public boolean deleteBooking(int booking_id) {
		// TODO Auto-generated method stub
		Booking b= eMan.find(Booking.class,booking_id);
		eMan.remove(b);
		return true;
	}

	@Override
	public List<Booking> getBooking() {
		// TODO Auto-generated method stub
		List<Booking> l1=eMan.createQuery("from Booking").getResultList();
		return l1;
	}

	@Override
	public Booking searchBooking(int booking_id) {
		// TODO Auto-generated method stub
		Booking b= eMan.find(Booking.class,booking_id);
		return b;
	}

	@Override
	public UnRegistered addUnregUser(UnRegistered u) {
		// TODO Auto-generated method stub
		eMan.persist(u);
		return u;
	}

	@Override
	public boolean updateUnregUser(UnRegistered u) {
		// TODO Auto-generated method stub
		eMan.merge(u);
		return true;
	}

	@Override
	public boolean deleteUnregUser(int unreg_id) {
		// TODO Auto-generated method stub
		UnRegistered u=eMan.find(UnRegistered.class,unreg_id);
		eMan.remove(u);
		return true;
	}

	@Override
	public List<UnRegistered> getUnregUsers() {
		// TODO Auto-generated method stub
		List<UnRegistered> l1=eMan.createQuery("from UnRegistered").getResultList();
		return l1;
	}

	@Override
	public UnRegistered searchUnregUser(int unreg_id) {
		// TODO Auto-generated method stub
		UnRegistered u=eMan.find(UnRegistered.class,unreg_id);	
		return u;
	}

	@Override
	public List<Integer> findBySchIdAndSeatNo(String sch_id, int seatNo)
	{
		Query q=eMan.createQuery("select id from Seat where schedule.schedule_id=:sch_id and seatNo=:seatNo");
		q.setParameter("sch_id",sch_id );
		q.setParameter("seatNo", seatNo);
		List<Integer> l1=q.getResultList();
		return l1;
	}

	@Override
	public boolean changeTransactionStatus(int trans_id) {
		// TODO Auto-generated method stub
		Query q=eMan.createQuery("update Transaction set cancelled_status=:cancel where trans_id=:trans_id");
		q.setParameter("cancel","yes");
		q.setParameter("trans_id",trans_id);
		
		return true;
	}

	@Override
	public List<String> SchIdFrmBooking(int trans_id) {
		// TODO Auto-generated method stub
		
		Query q=eMan.createQuery("select schedule.schedule_id from Transaction where trans_id=:trans_id");
		q.setParameter("trans_id",trans_id);
		List<String> l1=q.getResultList();
	    return l1;
	}

	@Override
	public List<Integer> seatNoFrmBooking(int trans_id) {
		// TODO Auto-generated method stub
		Query q=eMan.createQuery("select seatNo from Booking where transaction.trans_id=:trans_id");
		q.setParameter("trans_id",trans_id);
	    List<Integer> l1=q.getResultList();
	    return l1;
	}

	@Override
	public boolean deleteSeat1(String sch_id, int seatNo) {
		// TODO Auto-generated method stub
		Query q=eMan.createQuery("DELETE from Seat where schedule.schedule_id=:sch_id and seatNo=:seatNo ");
		q.setParameter("sch_id",sch_id);
		q.setParameter("seatNo",seatNo);
	   
		return true;
	}

	
	
	
	

	

	
	
	

}
