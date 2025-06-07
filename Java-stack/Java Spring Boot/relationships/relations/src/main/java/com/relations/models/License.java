package com.relations.models;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name="licenses")
public class License {
 
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 
 private String number;
 
 @DateTimeFormat(pattern = "yyyy-MM-dd")
 private Date expirationDate;
 
 private String state;
 
 @OneToOne(fetch=FetchType.LAZY)
 @JoinColumn(name="person_id")
 private Person person;
 
 @Column(updatable=false)
 @DateTimeFormat(pattern="yyyy-MM-dd")
 private Date createdAt;
 @DateTimeFormat(pattern="yyyy-MM-dd")
 private Date updatedAt;
 
 public License() {
    
 }
 @PrePersist
 protected void onCreate(){
 	this.createdAt = new Date();
 }
 public Long getId() {
 	return id;
 } 
 @PreUpdate
 protected void onUpdate(){
 	this.updatedAt = new Date();
 }
public String getNumber() {
	return number;
}
public void setNumber(String number) {
	this.number = number;
}
public Date getExpirationDate() {
	return expirationDate;
}
public void setExpirationDate(Date expirationDate) {
	this.expirationDate = expirationDate;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public Person getPerson() {
	return person;
}
public void setPerson(Person person) {
	this.person = person;
}
public void setId(Long id) {
	this.id = id;
}
}