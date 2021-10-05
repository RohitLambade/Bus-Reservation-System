package com.app.demo.pojo;
//import java.time.LocalDate;
//import java.util.Date;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name="MySchedule")
public class Schedule {
	@Id
	private String schedule_id;
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="busid",referencedColumnName="busid")
	private Buses busid;
	private LocalDate Date_Of_Jrny;
	
	public String getSchedule_id() {
		return schedule_id;
	}
	public void setSchedule_id(String schedule_id) {
		this.schedule_id = schedule_id;
	}
	public Buses getBusid() {
		return busid;
	}
	public void setBusid(Buses busid) {
		this.busid = busid;
	}
	public LocalDate getDate_Of_Jrny() {
		return Date_Of_Jrny;
	}
	public void setDate_Of_Jrny(LocalDate date_Of_Jrny) {
		Date_Of_Jrny = date_Of_Jrny;
	}
	public Schedule(String schedule_id, Buses busid, LocalDate date_Of_Jrny) {
		super();
		this.schedule_id = schedule_id;
		this.busid = busid;
		Date_Of_Jrny = date_Of_Jrny;
	}
	public Schedule() {
		super();
		// TODO Auto-generated constructor stub
	}
	
		
	
}
