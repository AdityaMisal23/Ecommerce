package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.dtos.OrderDto;
import com.app.horizon.services.OrderService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderServ;
	
	
	@GetMapping("/AddLive/{cid}")
	public ResponseEntity<?> addDataLive(@PathVariable("cid") String cid){
		long myId = Long.parseLong(cid);
		return ResponseEntity.ok(orderServ.addLiveData(myId));
	}
}
