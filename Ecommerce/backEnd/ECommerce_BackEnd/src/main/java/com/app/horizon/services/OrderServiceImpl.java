package com.app.horizon.services;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.criteria.Order;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.app.horizon.dtos.OrderDto;
import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.CartProductQuantity;
import com.app.horizon.entities.Customer;
import com.app.horizon.entities.OrderProductQuantity;
import com.app.horizon.entities.OrderStatus;
import com.app.horizon.entities.Product;
import com.app.horizon.repos.CartRepo;
import com.app.horizon.repos.CustomerRepository;
import com.app.horizon.repos.OrderRepository;
import com.app.horizon.repos.ProductRepository;

import java.time.Duration;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	
	
	
	@Autowired
	OrderRepository orderDao;
	
	@Autowired
	CustomerRepository customerDao;
	
	@Autowired
	ProductRepository prodDao;
	
	@Autowired
	CartRepo cRepo;
	
	@Autowired
	CartService cartService;

	@Override
	public String addProductTOCart(OrderDto orderDto) {
		String msg = "Product failed to add in cart.";
		
		
		Optional<Customer> persistantCustomer = customerDao.findById(orderDto.getCustomerId());
		Optional<Product> persistantProduct = prodDao.findById(orderDto.getProductId());
		
		Customer customer;
		Product product;
		
		if(persistantCustomer.isEmpty()) {
			return "Customer with this ID doesn't exist.";
		}else {
			customer = persistantCustomer.get();
			product  = persistantProduct.get();
		}
		
		
		OrderProductQuantity order =  new OrderProductQuantity();
		
		order.setOrderDate(LocalDateTime.now());
		order.setDeliverDate(LocalDateTime.now().plus(3,ChronoUnit.DAYS));
		order.setCustomer(customer);
		order.setProduct(product);
		
		
		if(product.getStock() >= orderDto.getQuantity()) {
		order.setQuantity(orderDto.getQuantity());
		}else {
			return "Product is Out of Stock";
		}
		
		product.setStock(product.getStock() - orderDto.getQuantity());
		
		customer.getOrder().add(order);
		
		prodDao.save(product);
		
		customerDao.save(customer);
		
	    
		return msg;
	}

	@Override
	public myResponse addLiveData(long myId) {
		Customer customer = customerDao.getById(myId);
		myResponse response = new myResponse();
		
		
		
		List<Long> ids = new ArrayList<Long>();
		if(customer!=null) {
			List<CartProductQuantity> list1 = customer.getCart();

			for(CartProductQuantity cart : list1) {
				OrderProductQuantity order = new OrderProductQuantity();
				order.setProduct(cart.getProduct());
				order.setOrderDate(LocalDateTime.now());
				order.setOrderStatus(OrderStatus.valueOf("LIVE"));
				order.setPrice(cart.getPrice());
				order.setQuantity(cart.getQuantity());
				order.setCustomer(customer);
				orderDao.save(order);
				ids.add(cart.getId());	
			}
			
			response.setStatus(true);
			response.setName("Done");
			cartService.removeFullCart(ids);
			return response;
			
		}
		response.setStatus(false);
		response.setName("Failed");
		return response;
	}
	
	
	 @Scheduled(fixedDelay = (60000*2)) // Run every minute
	    public void updateOrderStatus() {
		 	LocalDateTime currentDateTime = LocalDateTime.now();
	        List<OrderProductQuantity> list = orderDao.findAll(); 
	        
	        for(OrderProductQuantity order : list) {
	        	Duration duration = Duration.between(order.getOrderDate(), currentDateTime);
	        	long minutesDifference = duration.toMinutes();
	        	if(minutesDifference>=2 && order.getOrderStatus()!=OrderStatus.valueOf("DELIVERD")) {
	        		order.setOrderStatus(OrderStatus.valueOf("DELIVERD"));
	        		order.setDeliverDate(currentDateTime);	
	        		orderDao.save(order);
	        	}
	        }

	     
	    }

	
}
