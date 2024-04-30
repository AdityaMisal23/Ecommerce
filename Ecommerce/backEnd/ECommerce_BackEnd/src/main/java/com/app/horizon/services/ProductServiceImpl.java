package com.app.horizon.services;

import java.io.IOException;
import java.security.ProtectionDomain;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.horizon.dtos.ProductDto;
import com.app.horizon.entities.Product;
import com.app.horizon.entities.ProductImage;
import com.app.horizon.entities.Reviews;
import com.app.horizon.entities.SubCategory;
import com.app.horizon.repos.ProductRepository;
import com.app.horizon.repos.SuCategoryRepo;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	private ProductRepository prodDao;
	
	@Autowired 
	SuCategoryRepo suCategoryRepo;
	
	@Override
	public String addNewProduct(ProductDto prod) throws IOException {
		
		String message = "Product failed to added";
		Product product = new Product();
		
		product.setProductName(prod.getProductName().toUpperCase());
		product.setRating(prod.getRating());
		product.setDescription(prod.getDescription());
		product.setStock(prod.getStock());
		product.setSpecifications(prod.getSpecifications());
		product.setBrand(prod.getBrand().toUpperCase());
		product.setPrice(prod.getPrice());
		product.setOffers(20);
		product.setProductType(prod.getProductType().toUpperCase());
		
		product.setReviews(null);
		
		product.setNumberOfPeopleRated(0L);
		
		product.setAvailable(true);
	
		
		
		product.setProductImage(prod.getProductImage().getBytes());
		
		SubCategory subCategory = suCategoryRepo.findById((long)prod.getSubCategory()).orElseThrow();
		
		product.setSubCategory(subCategory);
		
		product.setProductType(prod.getProductType().toUpperCase());
		
		
	    try {
	   	Product persistProduct = prodDao.findByProductNameAndProductTypeAndBrand(prod.getProductName().toUpperCase(), prod.getProductType().toUpperCase(), prod.getBrand().toUpperCase());
	    if(persistProduct == null) {		
		prodDao.save(product);
		message = "Product successfully added";
	    }else
	    {
	    	int stock = persistProduct.getStock() + product.getStock();
	    	persistProduct.setStock(stock);
	    	prodDao.save(persistProduct);
	    	
	    }
		
	    } catch(Exception ex) {
	    	ex.printStackTrace();
	    }
		
		return message;
	}

	@Override
	public Product getProductDetails(Long prodId) {
		
		Optional<Product> optionalProd = prodDao.findById(prodId);
		ProductDto prodDto = null;
		Product product;
        
		if(!optionalProd.isEmpty()) {
			product = optionalProd.get();
			return product;
		}
		
		return null;
	}

	@Override
	public List<ProductDto> getListProductDetails(String productString) {
		
		  List<Product> products = prodDao.findByProductNameStartsWith(productString);
		  
		  List<ProductDto> dtos = new ArrayList<ProductDto>();
		  
		  for(Product p : products) {
			  ProductDto pDto = new ProductDto();
			  pDto.setId(p.getId());
			  pDto.setProductName(p.getProductName());
		  }
		  
		  return dtos;
			
	}
		   

	

	@Override
	public List<Product> getOfferProducts() {
		// TODO Auto-generated method stub
		List<Product> offers = prodDao.findProductByOffers();
		List<ProductDto> dtos = new ArrayList<ProductDto>();
//		System.out.println(offers.get(0));
//		int i=7;
//		HashSet<Integer> hSet = new HashSet<Integer>();
//		for(int j=0; j<7; j++) {
//			int randomNumber = (int)System.currentTimeMillis();
//			while(randomNumber>offers.size() || hSet.contains(randomNumber)) {
//				randomNumber = (int)System.currentTimeMillis();
//			}
//			hSet.add(randomNumber);
//		}
//		for(int rand : hSet) {
//			Product product = offers.get(rand);
//			
//			ProductDto pDto = new ProductDto();
//			pDto.setId(product.getId());
//			pDto.setProductName(product.getProductName());
//			pDto.setProductImage(product.getProductImage());
//			
//			dtos.add(pDto);
//		}
//		for(Product product : offers) {
////			System.out.print(product);
//			ProductDto pDto = new ProductDto();
//			pDto.setId(product.getId());
//			pDto.setProductName(product.getProductName());
////			pDto.setProductImage(product.getProductImage());
//			dtos.add(pDto);
//		}
//		System.out.println(offers);
		return offers;
	}

	@Override
	public List<Product> getProductsByCategory(long id) {
		// TODO Auto-generated method stub
		return prodDao.findBySubCategoryId(id);
	}

}
