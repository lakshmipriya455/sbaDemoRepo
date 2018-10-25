package com.verizon.restapi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.verizon.model.Customer;
import com.verizon.service.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/customers")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	
	@GetMapping
	public ResponseEntity<List<Customer>> getAllCustomers() {
		return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("id") int id) {
	
		ResponseEntity<Customer> resp;
		Customer c = customerService.getCustomerById(id);
		
		if(c == null)
			resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		else
			resp = new ResponseEntity<>(c, HttpStatus.OK);
		
		return resp;
		
	}
	
	
	@PostMapping
	public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
		
		ResponseEntity<Customer> resp = null;
		
		if(resp == null) {
			Customer c = customerService.addCustomer(customer);
			if(c == null)
				resp = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			else
				resp = new ResponseEntity<>(c, HttpStatus.OK);
		}
		
		return resp;
		
	}
	@PutMapping
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
		
		ResponseEntity<Customer> resp = null;
		
		if(resp == null) {
			Customer c = customerService.updateCustomer(customer);
			if(c == null)
				resp = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			else
				resp = new ResponseEntity<>(c, HttpStatus.OK);
		}
		
		return resp;
		
	}
	
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCustomer(@PathVariable("id") int id) {
		ResponseEntity<Void> resp = null;
		
		if(customerService.deleteCustomerById(id))
			resp = new ResponseEntity<>(HttpStatus.OK);
		else
			resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
		return resp;
	}
	
}
