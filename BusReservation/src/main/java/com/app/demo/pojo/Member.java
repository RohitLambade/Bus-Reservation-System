package com.app.demo.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="registereduser")
public class Member 
{
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int reguserid;
		private String regusername;
		private String regemail;
		private String regphone;
		private String regpassword;
		private int wallet;
		
		
		public int getWallet() {
			return wallet;
		}
		public void setWallet(int wallet) {
			this.wallet = wallet;
		}
		public int getReguserid() {
			return reguserid;
		}
		public void setReguserid(int reguserid) {
			this.reguserid = reguserid;
		}
		public String getRegusername() {
			return regusername;
		}
		public void setRegusername(String regusername) {
			this.regusername = regusername;
		}
		public String getRegemail() {
			return regemail;
		}
		public void setRegemail(String regemail) {
			this.regemail = regemail;
		}
		public String getRegphone() {
			return regphone;
		}
		public void setRegphone(String regphone) {
			this.regphone = regphone;
		}
		public String getRegpassword() {
			return regpassword;
		}
		public void setRegpassword(String regpassword) {
			this.regpassword = regpassword;
		}
		@Override
		public String toString() {
			return "Member [reguserid=" + reguserid + ", regusername=" + regusername + ", regemail=" + regemail
					+ ", regphone=" + regphone + ", regpassword=" + regpassword + "]";
		}
		public Member() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
		
		
		
		
		
}
