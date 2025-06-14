package com.ProjectManager.models;


import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
    
@Entity
@Table(name="users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull()
    @NotEmpty(message="Username is required!")
    @Size(min=3, max=30, message="Username must be between 3 and 30 characters")
    private String userName;
    
    @NotEmpty(message="Email is required!")
    @NotNull
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotEmpty(message="Password is required!")
    @NotNull
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
    @Transient
    @NotEmpty(message="Confirm Password is required!")
    @Size(min=8, max=128, message="Confirm Password must be between 8 and 128 characters")
    private String confirm;
    
    @OneToMany(mappedBy = "owner")
    private List<Project> ownedProjects;
    
    @ManyToMany
    @JoinTable(
        name = "users_projects", // custom name of the join table 
        joinColumns = @JoinColumn(name = "user_id"), // FK to this entity
        inverseJoinColumns = @JoinColumn(name = "project_id")) // FK to the other entity
    	private List<Project> joinedProjects;
    
    
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof User)) return false;
//        User user = (User) o;
//        return this.id != null && this.id.equals(user.getId());
//    }
//
////    @Override
////    public int hashCode() {
////        return 31;
////    }



    
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
	
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
  
    public User() {}
    public User(String userName,String email,String password,String confirm) {
    	this.userName=userName;
    	this.email=email;
    	this.password=password;
    	this.confirm=confirm;
    }


	public List<Project> getOwnedProjects() {
		return ownedProjects;
	}
	public void setOwnedProjects(List<Project> ownedProjects) {
		this.ownedProjects = ownedProjects;
	}
	public List<Project> getJoinedProjects() {
		return joinedProjects;
	}
	public void setJoinedProjects(List<Project> joinedProjects) {
		this.joinedProjects = joinedProjects;
	}
	public Long getId() {
  		return id;
  	}

  	public void setId(Long id) {
  		this.id = id;
  	}

  	public String getUserName() {
  		return userName;
  	}

  	public void setUserName(String userName) {
  		this.userName = userName;
  	}

  	public String getEmail() {
  		return email;
  	}

  	public void setEmail(String email) {
  		this.email = email;
  	}

  	public String getPassword() {
  		return password;
  	}

  	public void setPassword(String password) {
  		this.password = password;
  	}

  	public String getConfirm() {
  		return confirm;
  	}

  	public void setConfirm(String confirm) {
  		this.confirm = confirm;
  	}
  	 @PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	    	this.updatedAt = new Date();
	    }
    
  
}