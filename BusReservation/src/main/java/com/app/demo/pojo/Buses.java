package com.app.demo.pojo;
import javax.persistence.*;

@Entity
@Table(name="Mybus")
public class Buses {
	@Id
	private String busid;
	private String busname;
	private String source;
	private String destination;
	private int cost;
	public String getBusname() {
		return busname;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
	}
	public void setBusname(String busname) {
		this.busname = busname;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	@Override
	public String toString() {
		return "Bus [busid=" + busid + ", busname=" + busname + ", source=" + source + ", destination=" + destination
				+ ", cost=" + cost + "]";
	}
	public Buses(String busid, String busname, String source, String destination, int cost) {
		super();
		this.busid = busid;
		this.busname = busname;
		this.source = source;
		this.destination = destination;
		this.cost = cost;
	}
	public Buses() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
