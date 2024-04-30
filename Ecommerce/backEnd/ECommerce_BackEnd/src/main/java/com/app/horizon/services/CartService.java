package com.app.horizon.services;

import java.util.List;

import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.CartProductQuantity;

public interface CartService {

	List<CartProductQuantity> getCartData(long id);

	myResponse addcartData(long pId, long cId, int quantity);

	myResponse removeData(long myId);
	
	void removeFullCart(List<Long> Ids);

}
