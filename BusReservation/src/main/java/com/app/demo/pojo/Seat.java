package com.app.demo.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Seatb")
public class Seat {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
	private int id;
	private int seatNo;
	@OneToOne
	@JoinColumn(name="schedule_id",referencedColumnName="schedule_id")
	private Schedule schedule;
	private String available;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getSeatNo() {
		return seatNo;
	}
	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}
	public Schedule getSchedule() {
		return schedule;
	}
	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}
	public String getAvailable() {
		return available;
	}
	public void setAvailable(String available) {
		this.available = available;
	}
	@Override
	public String toString() {
		return "Seat [id=" + id + ", seatNo=" + seatNo + ", schedule=" + schedule + ", available=" + available + "]";
	}
	public Seat(int seatNo, Schedule schedule, String available) {
		super();
		this.seatNo = seatNo;
		this.schedule = schedule;
		this.available = available;
	}
	public Seat() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
