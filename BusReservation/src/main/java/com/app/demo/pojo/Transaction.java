package com.app.demo.pojo;

import java.time.LocalDate;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
@Table(name="Transaction")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private int trans_id;
	
	
	
	/*
	 * @OneToOne //@Column(nullable = true)
	 * 
	 * @JoinColumn(name="reguserid",referencedColumnName="reguserid")
	 */
	private int reg_id;
	
	public int getReg_id() {
		return reg_id;
	}
	public void setReg_id(int reg_id) {
		this.reg_id = reg_id;
	}
	/*
	 * @Id
	 * 
	 * @GeneratedValue(strategy = GenerationType.AUTO)
	 */
	private int unreg_id;
	
	/*
	 * @OneToOne
	 * 
	 * @JoinColumn(name="unreg_id",referencedColumnName="unreg_id")
	 * //@Column(nullable = true) private UnRegistered unreg_id;
	 */
	
	
	public int getUnreg_id() {
		return unreg_id;
	}
	public void setUnreg_id(int unreg_id) {
		this.unreg_id = unreg_id;
	}
	private int total_cost;
	private String cancelled_status;
	
	@OneToOne
	@JoinColumn(name="busid",referencedColumnName="busid")
	private Buses bus_id;
	
	@JsonFormat(pattern="dd/MM/yyyy")
	private LocalDate dateOfBooking=LocalDate.now();
	
	@OneToOne
	@JoinColumn(name="schedule_id",referencedColumnName="schedule_id")
	private Schedule schedule;
	public int getTrans_id() {
		return trans_id;
	}
	public void setTrans_id(int trans_id) {
		this.trans_id = trans_id;
	}


	/*
	 * public UnRegistered getUnreg_id() { return unreg_id; } public void
	 * setUnreg_id(UnRegistered unreg_id) { this.unreg_id = unreg_id; }
	 */
	public int getTotal_cost() {
		return total_cost;
	}
	public void setTotal_cost(int total_cost) {
		this.total_cost = total_cost;
	}
	public String getCancelled_status() {
		return cancelled_status;
	}
	public void setCancelled_status(String cancelled_status) {
		this.cancelled_status = cancelled_status;
	}
	public Buses getBus_id() {
		return bus_id;
	}
	public void setBus_id(Buses bus_id) {
		this.bus_id = bus_id;
	}
	public LocalDate getDateOfBooking() {
		return dateOfBooking;
	}
	public void setDateOfBooking(LocalDate dateOfBooking) {
		this.dateOfBooking = dateOfBooking;
	}
	public Schedule getSchedule() {
		return schedule;
	}
	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}
	
	public Transaction(int reg_id, int unreg_id, int total_cost, String cancelled_status, Buses bus_id,
			LocalDate dateOfBooking, Schedule schedule) {
		super();
		this.reg_id = reg_id;
		this.unreg_id = unreg_id;
		this.total_cost = total_cost;
		this.cancelled_status = cancelled_status;
		this.bus_id = bus_id;
		this.dateOfBooking = dateOfBooking;
		this.schedule = schedule;
	}
	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	

}