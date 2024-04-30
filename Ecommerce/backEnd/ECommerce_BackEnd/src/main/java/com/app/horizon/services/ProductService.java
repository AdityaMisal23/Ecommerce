package com.app.horizon.services;

import java.io.IOException;
import java.util.List;

import com.app.horizon.dtos.ProductDto;
import com.app.horizon.entities.Product;


public interface ProductService {

	String addNewProduct(ProductDto prod) throws IOException;

	Product getProductDetails(Long prodId);

	List<ProductDto> getListProductDetails(String productString);

	List<Product> getOfferProducts();

	List<Product> getProductsByCategory(long id);

}
