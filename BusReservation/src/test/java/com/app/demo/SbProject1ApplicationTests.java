package com.app.demo;


import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.demo.pojo.Buses;
import com.app.demo.service.MemberService;

@SpringBootTest
class SbProject1ApplicationTests {

	@Autowired
	MemberService ms;
	
	@Test
	void test() {
		int i;
		i=ms.findCostBybusId("NA001");
		assertEquals(i, 1200);
		
	}
	@Test
	void test2() {
		Buses b=new Buses();
		b.setBusid("AC002");
		b.setBusname("GUPTA TRAVELS");
		b.setCost(1300);
		b.setDestination("MUMBAI");
		b.setSource("PUNE");
		boolean res=ms.addBus(b);
		assertEquals(res, true);
		
	}

}