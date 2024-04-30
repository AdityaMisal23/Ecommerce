package com.app.horizon.controllers;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.horizon.dtos.ProductDto;
import com.app.horizon.services.ProductService;

@RestController
@RequestMapping("/Product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	
	@Autowired
	private ProductService prodServ;
	
	@PostMapping("/AddProduct")
	public ResponseEntity<?> addNewProduct(@RequestParam MultipartFile productImage, @RequestParam String productName, @RequestParam String description, @RequestParam String brand, @RequestParam int stock, @RequestParam double price, @RequestParam String productType, @RequestParam int subCategoryId) {
		try{
		ProductDto prod = new ProductDto();
		prod.setBrand(brand);
		prod.setProductImage(productImage);
		prod.setDescription(description);
		prod.setPrice(price);
		prod.setProductName(productName);
		prod.setProductType(productType);
		prod.setRating(0);
		prod.setStock(stock);
		prod.setSubCategory(subCategoryId);
		System.out.println(prod);
		 prodServ.addNewProduct(prod);
		 return ResponseEntity.status(HttpStatus.OK).body(true);
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return ResponseEntity.badRequest().body(false);
	}
	
	@GetMapping(value = "/getProduct/{prodId}")
	public ResponseEntity<?> getProduct(@PathVariable String prodId){
		
		long pid = Long.parseLong(prodId);
		System.out.println("in get product ");
		
		try {
			
		return ResponseEntity.status(HttpStatus.OK).body(prodServ.getProductDetails(pid));
		
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return ResponseEntity.badRequest().body("Failed to fetch the details.");
		
	}

	@GetMapping("/{productString}")
	public ResponseEntity<?> getListProduct(@PathVariable String productString){
		System.out.println("in getListProduct");
		
		try {
			
			return ResponseEntity.status(HttpStatus.OK).body(prodServ.getListProductDetails(productString));
			
			}catch(Exception ex) {
				ex.printStackTrace();
			}
			return ResponseEntity.badRequest().body("Failed to fetch the details.");
		
	}
	
	@GetMapping("/Offers")
	public ResponseEntity<?> getOfferProducts(){
		System.out.print("Helloooooooooooo");
//		System.out.println(prodServ.getOfferProducts());
		return ResponseEntity.ok(prodServ.getOfferProducts());
//		return null;
	}
	@GetMapping("/getCategoryProducts/{id}")
	public ResponseEntity<?> getProductOncategory(@PathVariable("id") String id){
		long myId = Long.parseLong(id);
		return ResponseEntity.ok(prodServ.getProductsByCategory(myId));
	}
	
}
