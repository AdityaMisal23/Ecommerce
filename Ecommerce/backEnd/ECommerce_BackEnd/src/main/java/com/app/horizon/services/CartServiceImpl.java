package com.app.horizon.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.horizon.dtos.myResponse;
import com.app.horizon.entities.CartProductQuantity;
import com.app.horizon.entities.Customer;
import com.app.horizon.entities.Product;
import com.app.horizon.repos.CartRepo;

@Service
@Transactional
public class CartServiceImpl implements CartService{

	@Autowired
	CartRepo cRepo;
	
	@Autowired
	ProductService productService;
	
	@Autowired
	CustomerService customerService;
	
	@Override
	public List<CartProductQuantity> getCartData(long id) {
		// TODO Auto-generated method stub
		return cRepo.findByCustomer_Id(id);
	}

	@Override
	public myResponse addcartData(long pId, long cId, int quantity) {
		Product product = productService.getProductDetails(pId);
		Customer customer = customerService.getCustomerInfo(cId);
		CartProductQuantity cartProductQuantity = new CartProductQuantity();
		myResponse response = new myResponse();
		if(product!=null && customer!=null) {
			cartProductQuantity.setCustomer(customer);
			cartProductQuantity.setProduct(product);
			cartProductQuantity.setQuantity(quantity);
			cartProductQuantity.setPrice(product.getPrice()*quantity);
			cRepo.save(cartProductQuantity);
			
			response.setStatus(true);
			response.setName("Done");
			return response;
		}
		response.setName("Not Done");
		response.setStatus(false);
		return response;
	}

	@Override
	public myResponse removeData(long myId) {
		cRepo.deleteCartById(myId);
		return new myResponse(myId,true,"Done");
	}

	@Override
	public void removeFullCart(List<Long> Ids) {
		for(long id : Ids) {
			cRepo.deleteCartById(id);
		}
		
	}
	
	

}
