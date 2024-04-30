package com.app.horizon.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.horizon.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findByProductNameStartsWith(String productString);
	
	Product findByProductNameAndProductTypeAndBrand(String productName,String productType,String brand);
	
	@Query("SELECT p FROM Product p WHERE p.offers >= 40")	
	List<Product> findProductByOffers();

	List<Product> findBySubCategoryId(long id);
	
}
