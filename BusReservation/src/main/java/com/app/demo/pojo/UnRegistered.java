package com.app.demo.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="UnReg")
public class UnRegistered {
	public UnRegistered() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "unreg_generator")
	@SequenceGenerator(name="unreg_generator", sequenceName = "unreg_id", initialValue=200, allocationSize=1)
	private int unreg_id;
	private String name;
	private String email;

	/*
	 * @OneToOne
	 * 
	 * @JoinColumn(name="trans_id",referencedColumnName="trans_id") private
	 * Transaction transaction;
	 */
	public int getUnreg_id() {
		return unreg_id;
	}
	public void setUnreg_id(int unreg_id) {
		this.unreg_id = unreg_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	/*
	 * public Transaction getTransaction() { return transaction; } public void
	 * setTransaction(Transaction transaction) { this.transaction = transaction; }
	 */
	@Override
	public String toString() {
		return "UnRegistered [unreg_id=" + unreg_id + ", name=" + name + ", email=" + email + "]";
	}
	public UnRegistered(int unreg_id, String name, String email, Transaction transaction) {
		super();
		this.unreg_id = unreg_id;
		this.name = name;
		this.email = email;
		//this.transaction = transaction;
	}
	
	 
	
	 

}
