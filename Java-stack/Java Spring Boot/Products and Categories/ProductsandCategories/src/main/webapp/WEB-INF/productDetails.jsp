<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<title>New Ninjas</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body class="container mt-5">
    <a href="/home" class="btn btn-outline-primary mb-3">Home</a>

	<h1 class="mb-4">${product.name}</h1>
	<ul>
		<c:forEach var="categorie" items="${product.categories}">
			<li>${categorie.name}</li>
		</c:forEach>

	</ul>
	<form action="/products/${product.id}/addCategory" method="post">
		<div class="mb-3">
			<label for="categorySelect">Select Category:</label> <select
				name="categoryId" class="form-select">
				<c:forEach var="category" items="${unassigned}">
					<option value="${category.id}">${category.name}</option>
				</c:forEach>
			</select>
		</div>

		<button type="submit" class="btn btn-success">Add</button>
	</form>

</body>
</html>