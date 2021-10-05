package com.app.demo.pojo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Booking {
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO) 
	 private int booking_id;
	 @OneToOne
	 @JoinColumn(name="trans_id",referencedColumnName="trans_id")
	 private Transaction transaction;
	 @OneToOne
		@JoinColumn(name="sch_id",referencedColumnName="schedule_id")
		private Schedule schedule;
	 private int no_of_seats;
	 private int seatNo;
	
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	
	public Transaction getTrans_id() {
		return transaction;
	}
	public void setTrans_id(Transaction trans_id) {
		this.transaction = trans_id;
	}
	public int getNo_of_seats() {
		return no_of_seats;
	}
	public void setNo_of_seats(int no_of_seats) {
		this.no_of_seats = no_of_seats;
	}
	public int getSeatNo() {
		return seatNo;
	}
	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}
	
	public Schedule getSch_id() {
		return schedule;
	}
	public void setSch_id(Schedule sch_id) {
		this.schedule = sch_id;
	}

	public Booking(int booking_id, Transaction trans_id, Schedule sch_id, int no_of_seats, int seatNo) {
		super();
		this.booking_id = booking_id;
		this.transaction = trans_id;
		this.schedule = sch_id;
		this.no_of_seats = no_of_seats;
		this.seatNo = seatNo;
	}
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Booking [booking_id=" + booking_id + ", trans_id=" + transaction + ", sch_id=" + schedule + ", no_of_seats="
				+ no_of_seats + ", seatNo=" + seatNo + "]";
	}
}
