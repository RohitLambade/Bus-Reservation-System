package com.app.demo.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.demo.pojo.Booking;
import com.app.demo.pojo.Buses;
import com.app.demo.pojo.Member;
import com.app.demo.pojo.Password;
import com.app.demo.pojo.Schedule;
import com.app.demo.pojo.Seat;
import com.app.demo.pojo.Transaction;
import com.app.demo.pojo.UnRegistered;
import com.app.demo.service.MailServiceImpl;
//import com.app.demo.service.AdminService;
import com.app.demo.service.MemberService;

@RestController
@RequestMapping("/api/rest")
@CrossOrigin(origins = "http://localhost:4200")
public class MyRestController
{
	@Autowired
	MailServiceImpl mail;
	
	@Autowired
	MemberService MemService;
			
			@PutMapping("/updatewalletmember")
			public boolean updatewalletmember(@RequestBody Member m)
			{
				int id=m.getReguserid();
				int cost=m.getWallet();
				System.out.println(cost);
				MemService.updatemoney(id,cost);
				return true;
			} 
			
			@PutMapping("/changepassword")
			public boolean updateMember(@RequestBody Member m)
			{
				return MemService.updatePass(m);
			}
			//CODE TO GET ALL THE MEMBERS IN THE DATABASE
			@GetMapping("/member")
			public List<Member> getMembers()
			{
				return MemService.getMembers();
			}
			
			@GetMapping("/member/{uname}")
			public Member searchMember(@PathVariable(name="uname") String username)
			{
				return MemService.searchMember(username);
				
			}
			
			//---
			//CODE TO ADD MEMBER IN THE DATABASE
			 @PostMapping("/member") 
			 public boolean addRegisteredUser(@RequestBody Member m) { 
				 mail.send(m.getRegemail(), "Sign Up Succesful",  "Your Ticket with Ticket Number: "+m.getRegusername()
				 +" has been Enrolled successfully.");
				 return MemService.addRegisteredUser(m);
				 }
			 
			 @GetMapping("/dashboard/profile/{reguserid}")
				public Member searchMemberById(@PathVariable(name="reguserid") int reguserid)
				{
					return MemService.searchMemberById(reguserid);
					
				}
		
			 @GetMapping("/findusers/{user}/{pass}")
				public Member findByUname(@PathVariable(name="user") String u, 
							@PathVariable(name="pass") String p)
			 {
				 System.out.println(u);
				 System.out.println(p);
					return MemService.findByRegusernameAndRegpassword(u, p);
				}
			 
			 
			 @GetMapping("/dashboard/bookings/{reguserid}")
				public List<Transaction> getTransactions(@PathVariable(name="reguserid") int reguserid)
				{
					return MemService.getTransactions(reguserid);
				}
			
			
			 
			 //For Admin Module

			 @GetMapping("/profit")
				public Integer getProfit(){
					DateTimeFormatter dtf= DateTimeFormatter.ofPattern("dd-mm-yyyy");
					LocalDate nowdt=LocalDate.now();
					LocalDate lastmonth=nowdt.minusMonths(1);
					LocalDate d1=LocalDate.now().minusMonths(1).withDayOfMonth(1);
					YearMonth thisYear=YearMonth.of(d1.getYear(), d1.getMonth());
					LocalDate d=thisYear.atEndOfMonth();
					LocalDate d2=LocalDate.now().minusMonths(1).withDayOfMonth(d.getDayOfMonth());
					return MemService.getProfitByMonth(d1,d2);
				}
			 
			 @GetMapping("/bus")
				public List<Buses> getAllBus()
				{
					return MemService.getBus();
				}
			@GetMapping("/schedule")
			public List<Schedule> getAllSchedule()
			{
				return MemService.getSchedule();
			}
			@PostMapping("/bus")
			public boolean addVehicles(@RequestBody Buses b) {
				return MemService.addBus(b);
			}
			
			
			
			
			
			@PostMapping("/schedule/{busid}")
			public boolean addSchedule(@RequestBody Schedule s ,@PathVariable(name="busid") String busid) {
				
				Buses b=MemService.getBusById(busid);
				s.setBusid(b);
				return MemService.addSchedule(s);
			}
			@GetMapping("/transaction/{ruserid}")
			public List<Transaction> getTransactionById(@PathVariable(name="ruserid") int ruserid)
			{
				return MemService.getTransactionByruserid(ruserid);
			}

			@GetMapping("/registered/notbooked")
			public List<Member> getUsersFromTrans(){
				return MemService.getUsersFromTransaction();
			}
			@GetMapping("/transaction/dateofpayment")
			public List<Transaction> getTransactionByDate(){
				DateTimeFormatter dtf= DateTimeFormatter.ofPattern("dd-mm-yyyy");
				LocalDate nowdt=LocalDate.now();
				LocalDate lastmonth=nowdt.minusMonths(1);
				LocalDate d1=LocalDate.now().minusMonths(1).withDayOfMonth(1);
				YearMonth thisYear=YearMonth.of(d1.getYear(), d1.getMonth());
				LocalDate d=thisYear.atEndOfMonth();
				LocalDate d2=LocalDate.now().minusMonths(1).withDayOfMonth(d.getDayOfMonth());
				
				return MemService.getTransactionByDate(d1, d2);
				
			}
			
			@GetMapping("/transaction/preferredbus")
			public List<Buses> getTransactionByBus(){
				return MemService.getPreferredBus();
			}
			
			@DeleteMapping("/schedule/{scheduleid}")
			public boolean deleteSchedule(@PathVariable (name="scheduleid") String scheduleid) {
				return MemService.delSchedule(scheduleid);
			}
			
			
			//Venkat Module
			
			@GetMapping("/Schedule")
			public List<Schedule> getAllSchedules()
			{
				return MemService.getSchedules();
				
			}
			
			@PostMapping("/Schedule")
			public boolean addSchedule(@RequestBody Schedule s)
			{
				return MemService.addSchedule(s);
				
			}
			
			
			@PutMapping("/Schedule")
			public boolean updateSchedule(@RequestBody Schedule s)
			{
				return MemService.updateSchedule(s);
				
			}
			@GetMapping("/Schedule/{sid}")
			public Schedule searchSchedule(@PathVariable(name="sid") String sid)
			{
				return MemService.searchSchedule(sid);
				
			}
			@DeleteMapping("/Schedule/{sid}")
			public boolean DeleteSchedule(@PathVariable(name="sid") String sid)
			{
				return MemService.deleteSchedule(sid);
				
			}
			@GetMapping("/seats")
			public List<Seat> getAllSeats()
			{
				return MemService.getSeats();
				
			}
			
			@PostMapping("/seats")
			public boolean addSeat(@RequestBody Seat s)
			{
				return MemService.addSeat(s);
				
			}
			
			
			@PutMapping("/seats")
			public boolean updateSeat(@RequestBody Seat s)
			{
				return MemService.updateSeat(s);
				
			}
			@GetMapping("/seats/{seatNo}")
			public Seat searchSeat(@PathVariable(name="seatNo") int seatNo)
			{
				return MemService.searchSeat(seatNo);
				
			}
			@DeleteMapping("/seats/{seatNo}")
			public boolean DeleteSeat(@PathVariable(name="seatNo") int seatNo)
			{
				return MemService.deleteSeat(seatNo);
				
			}
			@GetMapping("/seatbySch/{schedule_id}")
			public List<Integer> findBySchId(@PathVariable(name="schedule_id") String schedule_id)
			{
				return MemService.findBySchId(schedule_id);
				
			}
			@GetMapping("/buses")
			public List<Buses> getAllBuses()
			{
				return MemService.getBuses();
				
			}
			
			@PostMapping("/buses")
			public boolean addBus(@RequestBody Buses b)
			{
				return MemService.addBus(b);
				
			}
			
			
			@PutMapping("/buses")
			public boolean updateBuses(@RequestBody Buses b)
			{
				return MemService.updateBus(b);
				
			}
			@GetMapping("/buses/{bus_id}")
			public Buses searchBuses(@PathVariable(name="bus_id") String bus_id)
			{
				return MemService.searchBus(bus_id);
				
			}
			@DeleteMapping("/buses/{bus_id}")
			public boolean DeleteBuses(@PathVariable(name="bus_id") String bus_id)
			{
				return MemService.deleteBus(bus_id);
				
			}
			@GetMapping("/CostByBusId/{busid}")
			public int FindcostByBusId(@PathVariable(name="busid") String busid)
			{
				return MemService.findCostBybusId(busid);
				
			}
			@GetMapping("/Transaction")
			public List<Transaction> getAllTransactions()
			{
				return MemService.getTransaction();
				
			}
			
			@PostMapping("/Transaction")
			public Transaction addTransaction(@RequestBody Transaction t)
			{
				System.out.println("in r transaction");
				return MemService.addTransaction(t);
				
			}
			
			
			
			 @PutMapping("/Transaction") 
			 public boolean updateTransaction(@RequestBody Transaction t) { 
				 int id = t.getTrans_id();
				 MemService.updateTransaction(id);
				 return true;
			 
			 }
			@GetMapping("/Transaction/{trans_id}")
			public Transaction searchTransaction(@PathVariable(name="trans_id") int trans_id)
			{
				
				return MemService.searchTransaction(trans_id);
				
			}
			@GetMapping("/UpdateWallet/{trans_id}")
			public Transaction updateWallet(@PathVariable(name="trans_id") int id)
			{
				System.out.println("in megssage");
				Transaction t= MemService.searchTransaction(id);
				int reg = t.getReg_id();
				System.out.println(reg);
				int cost = t.getTotal_cost();
				MemService.updateWallet(cost,reg);
				return t;
				
			}
			
			@DeleteMapping("/Transaction/{trans_id}")
			public boolean DeleteTransaction(@PathVariable(name="trans_id") int trans_id)
			{
				return MemService.deleteTransaction(trans_id);
				
			}
			
			@GetMapping("/Booking")
			public List<Booking> getAllBookings()
			{
				return MemService.getBooking();
				
			}
			
			@PostMapping("/Booking")
			public boolean addBooking(@RequestBody Booking b)
			{
				return MemService.addBooking(b);
				
			}
			
			
			@PutMapping("/Booking")
			public boolean updateBooking(@RequestBody Booking b)
			{
				return MemService.updateBooking(b);
				
			}
			@GetMapping("/Booking/{booking_id}")
			public Booking searchBooking(@PathVariable(name="booking_id") int booking_id)
			{
				return MemService.searchBooking(booking_id);
				
			}
			@DeleteMapping("/Booking/{booking_id}")
			public boolean DeleteBooking(@PathVariable(name="booking_id") int booking_id)
			{
				return MemService.deleteBooking(booking_id);
				
			}
			@GetMapping("/findbysource/{source}")
			public List<Buses> searchSource(@PathVariable(name="source") String src)
			{
			return MemService.searchSource(src);
			}
			@GetMapping("/findbydestination/{destination}")
			public List<Buses> searchDestination(@PathVariable(name="destination") String dest)
			{
			return MemService.searchDestination(dest);
			}
			@GetMapping("/findsrcdest/sourceanddestination")
			public List<Buses> findBySourceAndDestination(@RequestParam String src, 
						@RequestParam String dest) {
				return MemService.findBySourceAndDestination(src, dest);
			}
			@GetMapping("/finddates/{date}/{src}/{dest}")
			public List<Schedule> findByJoin(@PathVariable(name="date") String dt, 
						@PathVariable(name="src") String src,@PathVariable(name="dest") String dest) {
				System.out.println(src);
			System.out.println(dest);
			System.out.println(dt);
			LocalDate loc;
			DateTimeFormatter obj=DateTimeFormatter.ofPattern("yyyy-MM-dd");
			loc=LocalDate.parse(dt,obj);
			System.out.println(loc);
				return MemService.findByJoin(src,dest,loc);
			}
			@GetMapping("/finddatesbus/{date}/{src}/{dest}")
			public List<Buses> findByJoinBus(@PathVariable(name="date") String dt, 
						@PathVariable(name="src") String src,@PathVariable(name="dest") String dest) {
				System.out.println(src);
			System.out.println(dest);
			System.out.println(dt);
			LocalDate loc;
			DateTimeFormatter obj=DateTimeFormatter.ofPattern("yyyy-MM-dd");
			loc=LocalDate.parse(dt,obj);
			System.out.println(loc);
				return MemService.findByJoinbus(src,dest,loc);
			}

			@GetMapping("/finddates/{date}")
			public List<Schedule> findByDate_Of_Jrny(@PathVariable(name="date") String d) throws ParseException
			{
				//Date date1=new LocalDate("mm/dd/yyyy").parse(d);
				LocalDate loc;
				DateTimeFormatter obj=DateTimeFormatter.ofPattern("yyyy-MM-dd");
				loc=LocalDate.parse(d,obj);
				System.out.println(loc);
				return MemService.findByDate_Of_Jrny(loc);
			//return vservice.findByDate_Of_Jrny(date1);
			}
			
			@GetMapping("/unreg")
			public List<UnRegistered> getAllUnRegUsers()
			{
				return MemService.getUnregUsers();
				
			}
			
			@PostMapping("/unreg")
			public UnRegistered addUnRegUser(@RequestBody UnRegistered u)
			{
				return MemService.addUnregUser(u);
				
			}
			
			
			@PutMapping("/unreg")
			public boolean updateUnReg(@RequestBody UnRegistered u)
			{
				return MemService.updateUnregUser(u);
				
			}
			@GetMapping("/unreg/{unreg_id}")
			public UnRegistered searchUnRegUser(@PathVariable(name="unreg_id") int unreg_id)
			{
				return MemService.searchUnregUser(unreg_id);
				
			}
			@DeleteMapping("/unreg/{unreg_id}")
			public boolean DeleteUnRegUser(@PathVariable(name="unreg_id") int unreg_id)
			{
				return MemService.deleteUnregUser(unreg_id);
				
			}
			
			@DeleteMapping("/dbooking/{id}")
			public void DeleteBooking(@PathVariable(name="id") String sid)
			{
				 MemService.DeleteBooking(sid);
				
			}
			@DeleteMapping("/dseats/{id}")
			public void DeleteSeats(@PathVariable(name="id") String sid)
			{
				 MemService.DeleteSeats(sid);
				
			}
			@GetMapping("/changeStatus/{trans_id}")
			public boolean changeStatus(@PathVariable(name="trans_id") int trans_id)
			{
				return MemService.changeTransactionStatus(trans_id);
				
			}
			@GetMapping("/SchIdFrmBooking/{trans_id}")
			public List<String> SchIdFrmBooking(@PathVariable(name="trans_id") int trans_id) 
			{
				return MemService.SchIdFrmBooking(trans_id);
			}
			@GetMapping("/seatNoFrmBooking/{trans_id}")
			public List<Integer> seatNoFrmBooking(@PathVariable(name="trans_id") int trans_id)
			{
				return MemService.seatNoFrmBooking(trans_id);
			}
			@DeleteMapping("/deleteSeat1/{sch_id}/{seatNo}")
			public boolean deleteSeat1(@PathVariable(name="sch_id") String sch_id,@PathVariable(name="seatNo") int seatNo)
			{
				return MemService.deleteSeats1(sch_id, seatNo);
			}
			
			
}
