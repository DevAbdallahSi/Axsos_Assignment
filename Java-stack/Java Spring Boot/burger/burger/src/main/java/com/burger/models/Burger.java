package com.burger.models;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="burgers")
public class Burger{
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @NotNull
	    @NotBlank(message = "burgerName is required.")
	    @Size(min = 5, max = 200)
	    private String burgerName;
	    
	    @NotNull
	    @Size(min = 5, max = 200)
	    @NotBlank(message = "resturantName is required.")
	    private String resturantName;
	    
	    @NotNull(message = "Rating is required.")
	    @Min(value = 0, message = "Rating must be at least 0.")
	    @Max(value = 5, message = "Rating must be at most 5.")
	    private Integer rating;
	    
	    @NotNull
	    @Size(min = 5, max = 200)
	    @NotBlank(message = "notes is required.")
	    private String notes;
	    
	    // This will not allow the createdAt column to be updated after creation
	    @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;

	    public Burger() {
	    }
	    
	    public Burger(String burgerName, String resturantName, Integer rating, String notes) {
	    	this.burgerName = burgerName;
	    	this.resturantName = resturantName;
	    	this.rating = rating;
	    	this.notes=notes;
	    }
	    
	    // other getters and setters removed for brevity
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
		public String getBurgerName() {
			return burgerName;
		}
		public void setBurgerName(String burgerName) {
			this.burgerName = burgerName;
		}
		public String getResturantName() {
			return resturantName;
		}
		public void setResturantName(String resturantName) {
			this.resturantName = resturantName;
		}
		public Integer getRating() {
			return rating;
		}
		public void setRating(Integer rating) {
			this.rating = rating;
		}
		public String getNotes() {
			return notes;
		}
		public void setNotes(String notes) {
			this.notes = notes;
		}
		public void setId(Long id) {
			this.id = id;
		}
		
		
	}

