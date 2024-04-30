package com.app.horizon.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class OrderProductQuantity extends BaseEntity{
   

	
	private LocalDateTime orderDate ;
	
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDateTime deliverDate;
	
	@OneToOne
	private Product product;
	
	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;
	
	private Double price;

	@ManyToOne
	private Customer customer;
	private int quantity;

}
