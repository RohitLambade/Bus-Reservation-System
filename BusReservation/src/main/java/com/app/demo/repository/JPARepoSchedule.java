package com.app.demo.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.demo.pojo.Buses;
import com.app.demo.pojo.Schedule;

public interface JPARepoSchedule extends JpaRepository <Schedule,String>{
	@Query("select s from Schedule s where s.Date_Of_Jrny = ?1")
	public List<Schedule> findByDate_Of_Jrny(LocalDate loc);
	@Query("select s from Schedule s join Buses b on s.busid=b.busid where b.source=?1 and b.destination=?2 and s.Date_Of_Jrny=?3")
	public List<Schedule> findByJoin(String source, String destination, LocalDate loc);
	@Query("select b from Buses b join Schedule s on s.busid=b.busid where b.source=?1 and b.destination=?2 and s.Date_Of_Jrny=?3")
	public List<Buses> findByJoinbus(String source, String destination, LocalDate loc);
}
