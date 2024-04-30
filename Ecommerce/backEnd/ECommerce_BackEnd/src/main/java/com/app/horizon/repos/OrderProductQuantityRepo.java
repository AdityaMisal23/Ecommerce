package com.app.horizon.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.horizon.entities.OrderProductQuantity;

public interface OrderProductQuantityRepo extends JpaRepository<OrderProductQuantity, Long>{

}
