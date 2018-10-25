package com.verizon.service;

import java.util.List;

import com.verizon.model.Customer;


public interface CustomerService {

Customer getCustomerById(int customerId);
	
	List<Customer> getAllCustomers();
	
	Customer addCustomer(Customer c);
	
	Customer updateCustomer(Customer c);
	
	boolean deleteCustomerById(int customerId);
	
}
