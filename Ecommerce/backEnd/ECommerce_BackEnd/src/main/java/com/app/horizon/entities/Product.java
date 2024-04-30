package com.app.horizon.entities;

import java.io.IOException;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

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
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Product extends BaseEntity{
	
	private String productName;
	
	private int rating;
	
	private String description;
	
	private Long numberOfPeopleRated;
	

	
	@Lob
	@Column(columnDefinition = "BLOB")
	private byte[] productImage;

	
	private int stock;
	
	private String specifications;
	
	private String brand;
	
	private double price;
	
	@OneToMany(mappedBy = "product",cascade = CascadeType.ALL, orphanRemoval = true)
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<Reviews> reviews = new ArrayList<Reviews>();

	
	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY)
	private SubCategory subCategory;
	
	private boolean isAvailable;
	
	private String productType;
	
	
	private double offers;
	


	
	
}
