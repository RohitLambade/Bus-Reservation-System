package com.app.demo.DAO;

import java.util.List;

import com.app.demo.pojo.Booking;
import com.app.demo.pojo.Buses;
import com.app.demo.pojo.Schedule;
import com.app.demo.pojo.Seat;
import com.app.demo.pojo.Transaction;
import com.app.demo.pojo.UnRegistered;



public interface BusDetailRepo {
	public boolean addSchedule(Schedule s);
	public boolean updateSchedule(Schedule s);
	public boolean deleteSchedule(String sid);
	public List<Schedule> getSchedules();
	public Schedule searchSchedule(String sid);
	public boolean addSeat(Seat s);
	public boolean updateSeat(Seat s);
	public boolean deleteSeat(int seatNo);
	public List<Seat> getSeats();
	public Seat searchSeat(int seatNo);
	public List<Integer> findBySchId(String sch_id);
	public List<Integer> findBySchIdAndSeatNo(String sch_id,int seatNo);
	
	
	public boolean addBus(Buses b);
	public boolean updateBus(Buses b);
	public boolean deleteBus(String bus_id);
	public List<Buses> getBuses();
	public Buses searchBus(String bus_id);
	public int findCostBybusId(String bus_id);
	public boolean deleteSeat1(String sch_id,int seatNo);
	
	public Transaction addTransaction(Transaction t);
	//public boolean updateTransaction(int id);
	public boolean deleteTransaction(int trans_id);
	public List<Transaction> getTransaction();
	public Transaction searchTransaction(int trans_id);
    public boolean changeTransactionStatus(int trans_id);
	
	public boolean addBooking(Booking b);
	public boolean updateBooking(Booking b);
	public boolean deleteBooking(int booking_id);
	public List<Booking> getBooking();
	public Booking searchBooking(int booking_id);
	public List<String> SchIdFrmBooking(int trans_id);
	public List<Integer> seatNoFrmBooking(int trans_id);
	
	
	public UnRegistered addUnregUser(UnRegistered u);
	public boolean updateUnregUser(UnRegistered u);
	public boolean deleteUnregUser(int unreg_id);
	public List<UnRegistered> getUnregUsers();
	public UnRegistered searchUnregUser(int unreg_id);
	
	


}
