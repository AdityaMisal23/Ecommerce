package com.app.horizon.services;

import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.horizon.dtos.CustomerDto;
import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.Customer;



public interface CustomerService {

	Customer getCustomerDetails(CustomerDto cdto);
	
	myResponse getLoginDetails(String email, String password);

	Customer registerCustomer(CustomerDto cDto);

	Customer uploadImage(MultipartFile file, Long id) throws IOException;

	Customer getCustomerInfo(long id);

	myResponse updateName(String name, long id);
	
	myResponse updatePassword(String password, long id);
	
	myResponse updateProfile(MultipartFile file);

	myResponse joinEx(long id, int num);
	
	public void updateOrderStatus();

	myResponse IsEx(long myId);
}
