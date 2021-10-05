package com.app.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.app.demo.pojo.Seat;

public interface JPASeat extends JpaRepository<Seat , Integer> {

	@Transactional
	@Modifying
	@Query("Delete from Seat s where s.schedule.schedule_id=?1")
	public void deleteSeats(String s);
	@Modifying
	@Transactional
	@Query("DELETE from Seat s where s.schedule.schedule_id=?1 and s.seatNo=?2")
	public void deleteSeats1( String schedule_id, int seatNo);

}
