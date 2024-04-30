package com.app.horizon.dtos;



import java.sql.Blob;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Lob;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
	
//	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
    private String productName;
	
	private int rating;
	
	private String description;
	
	
	
    private int stock;
	
	private String specifications;
	
	private String brand;
	
	private double price;
	

	public MultipartFile productImage;
	
	
	private List<String> reviews;
	
	
    private long subCategory;
	
	private String productType;
	
    
}
