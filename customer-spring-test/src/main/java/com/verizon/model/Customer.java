package com.verizon.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Entity
@Table(name="customers")
public class Customer {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private int customerId;
private String name;
@Column(name="primarynumber")
private String primaryMobileNumber;
@Column(name="alternatenumber")
private String alternateMobileNumber;
@DateTimeFormat(iso=ISO.DATE)
@Column(name="dob")
private LocalDate dateOfBirth;
public int getCustomerId() {
	return customerId;
}
public void setCustomerId(int customerId) {
	this.customerId = customerId;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPrimaryMobileNumber() {
	return primaryMobileNumber;
}
public void setPrimaryMobileNumber(String primaryMobileNumber) {
	this.primaryMobileNumber = primaryMobileNumber;
}
public String getAlternateMobileNumber() {
	return alternateMobileNumber;
}
public void setAlternateMobileNumber(String alternateMobileNumber) {
	this.alternateMobileNumber = alternateMobileNumber;
}
public LocalDate getDateOfBirth() {
	return dateOfBirth;
}
public void setDateOfBirth(LocalDate dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
}


}
