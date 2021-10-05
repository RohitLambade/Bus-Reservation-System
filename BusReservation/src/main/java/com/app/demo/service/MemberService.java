package com.app.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.app.demo.pojo.Booking;
import com.app.demo.pojo.Buses;
import com.app.demo.pojo.Member;
import com.app.demo.pojo.Password;
import com.app.demo.pojo.Schedule;
import com.app.demo.pojo.Seat;
import com.app.demo.pojo.Transaction;
import com.app.demo.pojo.UnRegistered;

public interface MemberService 
{
		public void updatemoney(int reg, int cost);
		public boolean addRegisteredUser(Member m);
		//public Member searchMember(int reguserid);
		public List<Member> getMembers();
		public Member findByRegusernameAndRegpassword(String regusername, String regpassword);
		public boolean changePassword(Password p);
		public List<Transaction> getTransactions(int type);
		public Member searchMember(String username);
		public Member searchMemberById(int reguserid);
		public boolean updatePass(Member m);
		public List<Member> getProfile(int type);
		
		//Admin Module
		
		public boolean addBus(Buses bus);
		public List<Buses> getBus();
		public boolean addSchedule(Schedule sc);
		public List<Schedule> getSchedule();
		public Integer getProfitByMonth(LocalDate d1, LocalDate d2);
		
		
		public List<Transaction> getTransactionByruserid(int type);
		public List<Member> getUsersFromTransaction();
		public List<Transaction> getTransactionByDate(LocalDate d1, LocalDate d2);
		public List<Buses> getPreferredBus();
		public Buses getBusById(String id);
		public boolean delSchedule(String scheduleid);
		
		//Venkat
		//public boolean addSchedule(Schedule s);
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
		public void updateWallet(int cost,int reg);
		
		//public boolean addBus(Buses b);
		public boolean updateBus(Buses b);
		public boolean deleteBus(String bus_id);
		public List<Buses> getBuses();
		public Buses searchBus(String bus_id);
		public int findCostBybusId(String bus_id);
		public Transaction addTransaction(Transaction t);
		public void updateTransaction(int id);
		public boolean deleteTransaction(int trans_id);
		public List<Transaction> getTransaction();
		public Transaction searchTransaction(int trans_id);
		public boolean changeTransactionStatus(int trans_id);
		
		public boolean addBooking(Booking b);
		public boolean updateBooking(Booking b);
		public boolean deleteBooking(int booking_id);
		public List<Booking> getBooking();
		public Booking searchBooking(int booking_id);
		public List<Buses> searchSource(String src);
		public List<Buses> searchDestination(String dest);
		public List<Buses> findBySourceAndDestination(String source, String destination);
		public List<Schedule> findByDate_Of_Jrny(LocalDate loc);
		public List<Schedule> findByJoin(String source, String destination, LocalDate loc);
		public List<Buses> findByJoinbus(String source, String destination, LocalDate loc);

		public UnRegistered addUnregUser(UnRegistered u);
		public boolean updateUnregUser(UnRegistered u);
		public boolean deleteUnregUser(int unreg_id);
		public List<UnRegistered> getUnregUsers();
		public UnRegistered searchUnregUser(int unreg_id);
		
		public void DeleteBooking(String sid);
		public void DeleteSeats(String sid);
		
		
		public List<String> SchIdFrmBooking(int trans_id);
		public List<Integer> seatNoFrmBooking(int trans_id);
		public boolean deleteSeats1(String sch_id, int seatNo);
		
		
}
