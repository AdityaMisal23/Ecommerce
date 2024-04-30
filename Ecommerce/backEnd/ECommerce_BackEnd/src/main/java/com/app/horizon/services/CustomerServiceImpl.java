package com.app.horizon.services;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.apache.tomcat.jni.Address;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.multipart.MultipartFile;

import com.app.horizon.dtos.CustomerDto;
import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.Customer;
import com.app.horizon.entities.CustomerAddress;
import com.app.horizon.entities.Exclusive;
import com.app.horizon.entities.OrderProductQuantity;
import com.app.horizon.entities.OrderStatus;
import com.app.horizon.repos.CustomerRepository;
import com.app.horizon.repos.OrderProductQuantityRepo;

import java.time.Duration;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustomerRepository cRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	OrderProductQuantityRepo qRepo;
	
	
	
	@Override
	public Customer getCustomerDetails(CustomerDto cDto){
		Customer customer = cRepo.getByEmail(cDto.getEmail());
//		System.out.print(customer);
//		customer.getCart();
//		customer.getOrder();
//		customer.getAddress();
		return customer;
	}

	@Override
	public Customer registerCustomer(CustomerDto cDto) {
		Customer customer = new Customer();
		customer.setFirstName(cDto.getFirstName());
		customer.setLastName(cDto.getLastName());
		customer.setEmail(cDto.getEmail());
		customer.setPassword(cDto.getPassword());
		customer.setCoins(0);
		CustomerAddress customerAddress = new CustomerAddress();
		customerAddress.setCity(cDto.getHomeAddress().getCity());
		customerAddress.setPincode(cDto.getHomeAddress().getPincode());
		customerAddress.setState(cDto.getHomeAddress().getState());
		customerAddress.setFullAddress(cDto.getHomeAddress().getFullAddress());
		customerAddress.setCustomer(customer);
		customer.getAddress().add(customerAddress);
		customer.setIsExclusive(0);
		customer.setMobile(cDto.getMobileNumber());
		
		return cRepo.save(customer);
	}

	@Override
	public Customer uploadImage(MultipartFile file, Long id) throws IOException {
		// TODO Auto-generated method stub
		System.out.println("hello");
		Customer customer = cRepo.findById(id).orElseThrow();
		if(customer!=null) {
			customer.setCustomerImage(file.getBytes());
		}
        System.out.println("hello");
        return cRepo.save(customer);
        
		
	}

	@Override
	public myResponse getLoginDetails(String email, String password) {
		myResponse response = new myResponse();
		Customer customer = cRepo.getByEmail(email);
		if(customer!=null) {
			if(customer.getPassword().equals(password)) {
				response.setId(customer.getId());
				response.setStatus(true);
				response.setName(customer.getFirstName());
				return response;
			}
		}
		response.setStatus(false);
		response.setId(-1);
		return response;
	}

	@Override
	public Customer getCustomerInfo(long id) {
		// TODO Auto-generated method stub
		return cRepo.findById(id).orElseThrow();
	}

	@Override
	public myResponse updateName(String name, long id) {
		System.out.println(name);
		Customer customer = cRepo.findById(id).orElseThrow();
		myResponse my = new myResponse();
		if(customer!=null) {
			String[] names  = name.split(" ");
			customer.setFirstName(names[0]);
			customer.setLastName(names[1]);
			my.setStatus(true);
			return my;
		}
		my.setStatus(false);
		return my;
		
		
		
	}

	@Override
	public myResponse updatePassword(String password, long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public myResponse updateProfile(MultipartFile file) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public myResponse joinEx(long id, int num) {
		Customer customer = cRepo.getById(id);
		myResponse response = new myResponse();
		if(customer!=null) {
			if(num==1) {
				customer.setIsExclusive(1);
			}	
			else {
				customer.setIsExclusive(2);
			}
			response.setStatus(true);
			response.setName("Done");
			return response;
		}
		response.setStatus(false);
		response.setName("Failed");
		return response;
		
	}

	@Override
	@Scheduled(fixedDelay = 60000)
	public void updateOrderStatus() {
		// TODO Auto-generated method stub
		List<OrderProductQuantity> list = qRepo.findAll();
		LocalDateTime currentDateTime = LocalDateTime.now();
		for(OrderProductQuantity order : list) {
			Duration duration = Duration.between(order.getOrderDate(), currentDateTime);
			long minutesDifference = duration.toMinutes();
			if(minutesDifference>=2) {
				order.setOrderStatus(OrderStatus.valueOf("DELIVERD"));
				order.setDeliverDate(currentDateTime);
			}
		}
		
	}

	@Override
	public myResponse IsEx(long myId) {
		Customer customer = cRepo.getById(myId);
		myResponse response = new myResponse();
		if(customer!=null) {
			response.setStatus(true);
			if(customer.getIsExclusive()==1) {
				response.setName("1");
			}
			else if(customer.getIsExclusive()==2) {
				response.setName("2");
			}
			else {
				
			}
			return response;
		}
		response.setStatus(false);
		response.setName("-1");
		
		return response;
	}

}
