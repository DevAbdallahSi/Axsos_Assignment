package com.ProductsandCategories.models;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class UserLogin {

    @NotNull
    @Email(message = "Email should be valid")
    @Size(min = 5, max = 200, message = "Email must be between 5 and 200 characters")
    private String email;
    
    @NotNull
    @Size(min = 5, max = 200, message = "Password must be between 5 and 200 characters")
    private String password;
    
    public UserLogin() {
    }
    
    public UserLogin(String email, String password) {
        this.email = email;
        this.password = password;
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
}
