package com.verizon.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.verizon.dao.CustomerRepository;
import com.verizon.model.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepository repo;
	
	@Override
	public Customer getCustomerById(int customerId) {
		

		Customer c = null;
		
		Optional<Customer> optCustomer = repo.findById(customerId);
		if(optCustomer.isPresent())
			c = optCustomer.get();
		
		return c;
	}

	@Override
	public List<Customer> getAllCustomers() {
		return repo.findAll();
	}

	@Override
	public Customer addCustomer(Customer c) {
		// TODO Auto-generated method stub
		return repo.save(c);
	}

	@Override
	public Customer updateCustomer(Customer c) {
		// TODO Auto-generated method stub
		return repo.save(c);
	}

	@Override
	public boolean deleteCustomerById(int customerId) {
boolean isDeleted = false;
		
		if(repo.existsById(customerId)) {
		repo.deleteById(customerId);
			isDeleted = true;
		}
		
		return isDeleted;
	}
	}

