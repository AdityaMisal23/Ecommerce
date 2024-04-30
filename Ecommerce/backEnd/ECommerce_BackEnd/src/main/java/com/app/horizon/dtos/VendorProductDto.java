package com.app.horizon.dtos;

import java.time.LocalDateTime;

import org.hibernate.query.criteria.LiteralHandlingMode;
import org.springframework.context.annotation.Description;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class VendorProductDto {
	private String productName;
	private int productQuantity;
	private double price;
	LocalDateTime dateOfAdding;
	long vendorId;
}
