package com.app.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.demo.pojo.Member;

public interface MyJPARepo extends JpaRepository<Member, String>
{
	@Transactional
	@Modifying
	@Query("update Member m set m.wallet = m.wallet+?1 where m.reguserid = ?2")
	public void updatewallet(int cost,int reg);
	public Member findByRegusernameAndRegpassword(String regusername, String regpassword);
	@Modifying
	@Query("update Member r set r.regpassword =?1 where r.regusername =?2")
	public boolean changePassword(String pass,String uname);
	public Member findByRegusername(String username);
	public Member findByReguserid(int reguserid);
	
	//For Admin Module
	@Query("select m from Member m where m.reguserid not in(select t.reg_id from Transaction t)")
	public List<Member> getUsersFromTransaction();
	
	@Transactional
	@Modifying
	@Query("update Member m set m.wallet = ?2 where m.reguserid = ?1")
	public void updatewalletm(int reg,int cost);
	
}
