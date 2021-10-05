package com.app.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.demo.pojo.Buses;

public interface JPARepoBus extends JpaRepository <Buses,String>{
	public Buses findByBusid(String id);
	//Venkat
	public List<Buses> findBySource(String src);
	public List<Buses> findByDestination(String dest);
	public List<Buses> findBySourceAndDestination(String source, String destination);
}
