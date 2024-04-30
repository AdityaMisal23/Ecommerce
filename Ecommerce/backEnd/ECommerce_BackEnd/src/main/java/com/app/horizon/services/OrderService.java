package com.app.horizon.services;

import com.app.horizon.dtos.OrderDto;
import com.app.horizon.dtos.myResponse;

public interface OrderService {

	String addProductTOCart(OrderDto orderDto);

	myResponse addLiveData(long myId);

	
}
