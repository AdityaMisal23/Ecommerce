package com.app.horizon.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.horizon.entities.Vendor;

@Repository
public interface VendorRepo extends JpaRepository<Vendor, Long>{

	Vendor getByEmail(String email);

}
