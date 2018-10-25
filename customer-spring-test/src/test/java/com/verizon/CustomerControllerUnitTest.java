package com.verizon;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import com.verizon.model.Customer;
import com.verizon.restapi.CustomerController;
import com.verizon.service.CustomerService;
import com.verizon.testutil.TestUtil;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = CustomerController.class)
public class CustomerControllerUnitTest {

	private MockMvc mockMvc;
	
	@Autowired
	private WebApplicationContext webAppContext;
	
	@MockBean
	private CustomerService customerServiceMock;
	@Before
	public void setUp() throws Exception {
		mockMvc = MockMvcBuilders.webAppContextSetup(webAppContext).build();
	}

	@After
	public void tearDown() throws Exception {
		mockMvc = null;
	}

	@Test
	public void testGetAllCustomers() throws Exception{
		assertThat(this.customerServiceMock).isNotNull();
		
		List<Customer> list = new ArrayList<>();
		list.add(new Customer());
		
		when(customerServiceMock.getAllCustomers()).thenReturn(list);
		
		this.mockMvc.perform(get("/customers"))
					.andExpect(status().isOk())
					.andDo(print());
		
	}
	

	
	@Test
	public void testGetCustomerById() throws Exception{
		assertThat(this.customerServiceMock).isNotNull();
		
		Customer c = new Customer();
		int id = 1;
		
		when(customerServiceMock.getCustomerById(id)).thenReturn(c);
		
		this.mockMvc.perform(get("/customers/"+id))
					.andExpect(status().isOk())
					.andDo(print());
			
		this.mockMvc.perform(post("/customers/"+id))
					.andExpect(status().is4xxClientError())
					.andDo(print());
		
	}
	
	
	@Test
	public void testAddCustomer() throws Exception{
		assertThat(this.customerServiceMock).isNotNull();
		
		Customer c = new Customer();
		
		when(customerServiceMock.addCustomer(Mockito.any(Customer.class))).thenReturn(c);
			
		this.mockMvc.perform(post("/customers").contentType(TestUtil.APPLICATION_JSON_UTF8)
												.content(TestUtil.convertObjectToJsonBytes(c)))
					.andDo(print())
					.andExpect(status().isOk());
		
	}
	
	
	@Test
	public void testUpdateCustomer() throws Exception{
		assertThat(this.customerServiceMock).isNotNull();
		
		Customer c = new Customer();
		
		when(customerServiceMock.updateCustomer(Mockito.any(Customer.class))).thenReturn(c);
		
		this.mockMvc.perform(put("/customers").contentType(TestUtil.APPLICATION_JSON_UTF8)
												.content(TestUtil.convertObjectToJsonBytes(c)))
					.andDo(print())
					.andExpect(status().isOk());
		
	}
	
	
	@Test
	public void testDeleteEmployee() throws Exception{
		assertThat(this.customerServiceMock).isNotNull();
		
		int id = 1;
		
		when(customerServiceMock.deleteCustomerById(id)).thenReturn(true);
		
		this.mockMvc.perform(delete("/customers/"+ id))
					.andExpect(status().isOk())
					.andDo(print());
	}

}
