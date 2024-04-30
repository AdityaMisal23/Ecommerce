package com.app.horizon.repos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.horizon.entities.CartProductQuantity;


@Repository
public interface CartRepo extends JpaRepository<CartProductQuantity, Long>{
	List<CartProductQuantity> findByCustomer_Id(long id);
	
	@Modifying
	 @Query("DELETE FROM CartProductQuantity c WHERE c.id = :id")
	@Transactional
	  void deleteCartById(Long id);

}
