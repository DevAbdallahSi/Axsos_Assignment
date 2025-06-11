package com.ProductsandCategories.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ProductsandCategories.models.Category;
import com.ProductsandCategories.models.Product;
import com.ProductsandCategories.models.User;
import com.ProductsandCategories.services.CategoryServic;
import com.ProductsandCategories.services.ProductServic;
import com.ProductsandCategories.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class ProductController {
	
	@Autowired 
	private CategoryServic categoryServic;
	@Autowired 
	private ProductServic productServic;
	@Autowired
	private UserService userService;


@GetMapping("/home")
public String index(Model model,HttpSession session) {
	if (session.getAttribute("userId")==null) {
        return "redirect:/loginPage";
	}
	Long userId = (long)session.getAttribute("userId");
	User user = userService.findUserById(userId);
	
	model.addAttribute("user",user);
	model.addAttribute("products",productServic.allProduct());
	model.addAttribute("Category",categoryServic.allCategory());
	return "index";
}

@GetMapping("/newProduct")
public String newProduct(Model model,HttpSession session) {
	if (session.getAttribute("userId")==null) {
        return "redirect:/loginPage";
	}
	Long userId = (long)session.getAttribute("userId");
	User user = userService.findUserById(userId);
	
	model.addAttribute("user",user);
model.addAttribute("product",new Product());
return "newProduct";
}


@PostMapping("/product/form")
public String createProduct(@Valid @ModelAttribute ("product") Product product,BindingResult result,Model model,HttpSession session) {
	if (session.getAttribute("userId")==null) {
        return "redirect:/loginPage";
	}
	Long userId = (long)session.getAttribute("userId");
	User user = userService.findUserById(userId);
	
	model.addAttribute("user",user);
	if(result.hasErrors()) {
		model.addAttribute("product" ,product);
		return "newProduct";
	}
	productServic.createProduct(product);
	return "redirect:/home";
	}


@GetMapping("/products/{id}")
public String productDetails(Model model,@PathVariable("id") Long id,HttpSession session) {
	if (session.getAttribute("userId")==null) {
        return "redirect:/loginPage";
	}
	Long userId = (long)session.getAttribute("userId");
	User user = userService.findUserById(userId);
	
	model.addAttribute("user",user);
	
	Product product = productServic.findProductById(id);
	model.addAttribute("product"  , product);
	model.addAttribute("unassigned", categoryServic.getCategoriesByNotContain(product));// جيب// جميع ال كاتيجوري التي لا تحتوي هذا البروديكت
	return "productDetails";
}
@PostMapping("/products/{id}/addCategory")
public String addCategory(@PathVariable("id") Long productId,
                          @RequestParam("categoryId") Long categoryId,HttpSession session,Model model) {
	if (session.getAttribute("userId")==null) {
        return "redirect:/loginPage";
	}
	Long userId = (long)session.getAttribute("userId");
	User user = userService.findUserById(userId);
	
	model.addAttribute("user",user);
    // 1. Fetch product by productId
    Product product = productServic.findProductById(productId);

    // 2. Fetch category by categoryId
    Category category = categoryServic.findCategoryById(categoryId);

    // 3. Add category to product (depends on your model relationship)

    // 4. Save updated product
    productServic.addCategory(category, product);

    // 5. Redirect to product details or list page
    return "redirect:/products/" + productId;
}

			



}
