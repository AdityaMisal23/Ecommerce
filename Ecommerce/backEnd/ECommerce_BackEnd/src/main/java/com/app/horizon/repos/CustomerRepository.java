package com.app.horizon.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.horizon.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{
	Customer getByEmail(String email);

	
}
