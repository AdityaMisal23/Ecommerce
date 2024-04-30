package com.app.horizon.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.horizon.dtos.VendorProductDto;
import com.app.horizon.entities.Vendor;
import com.app.horizon.entities.VendorProductAdded;
import com.app.horizon.repos.VendorProductsRepo;
import com.app.horizon.repos.VendorRepo;

import io.swagger.v3.oas.annotations.servers.Server;

@Service
@Transactional
public class VendorProductServiceImpl implements VendorProduct{
	
	@Autowired
	VendorProductsRepo vRepo;
	
	@Autowired
	VendorRepo vendorRepo;
	
	@Override
	public List<VendorProductAdded> getData(long id) {
		// TODO Auto-generated method stub
		return vRepo.findByCustomerIdSortedByInsertionDate(id);
	}

	@Override
	public VendorProductAdded addVendorProduct(VendorProductDto vpdto) {
		// TODO Auto-generated method stub
		VendorProductAdded vpd = new VendorProductAdded();
		vpd.setProductName(vpdto.getProductName());
		vpd.setDateOfAdding(vpdto.getDateOfAdding());
		vpd.setPrice((int)vpdto.getPrice());
		vpd.setQuantity(vpdto.getProductQuantity());
		
		 
		Vendor vendor = vendorRepo.findById(vpdto.getVendorId()).orElseThrow();
		vpd.setVendor(vendor);
		
		return vRepo.save(vpd);
	}

}
