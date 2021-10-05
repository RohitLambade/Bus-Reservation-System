package com.app.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.app.demo.pojo.Booking;
public interface JPABook extends JpaRepository<Booking , Integer> {
	@Transactional
	@Modifying
	@Query("delete Booking b where b.schedule.schedule_id=?1")
	public void deleteBook(String id);
}