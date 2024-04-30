package com.app.horizon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.horizon.services.CartService;

@RestController
@RequestMapping("/Cart")
@CrossOrigin("http://localhost:3000")
public class CartController {
	
	@Autowired
	CartService cartService;
	
	
	@GetMapping("/GetData/{id}")
	public ResponseEntity<?> getCartData(@PathVariable("id") String id ){
		long myId = Long.parseLong(id);
		return ResponseEntity.ok(cartService.getCartData(myId));
	}
	
	@PostMapping("/AddData")
	public ResponseEntity<?> addcartData(@RequestParam("pId") long pId , @RequestParam("cId") long cId, @RequestParam("quantity") int quantity){
		return ResponseEntity.ok(cartService.addcartData(pId, cId, quantity));
	}
	
	@DeleteMapping("/RemoveCart/{id}")
	public ResponseEntity<?> removeData(@PathVariable("id") String id){
		long myId = Long.parseLong(id);
		System.out.println(myId);
		return ResponseEntity.ok(cartService.removeData(myId));
	}
}
