
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<title>New project</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body class="container mt-5">
	<h1 class="mb-4">new product</h1>
	    <a href="/home" class="btn btn-outline-primary mb-3">Home</a>
	
	<form:form action="/product/form" method="post"
		modelAttribute="product" class="w-50">
		<div class="mb-3">
			<form:label path="name" class="form-label">Name</form:label>
			<form:input path="name" class="form-control" />
			<form:errors path="name" class="text-danger" />
		</div>

		<div class="mb-3">
			<form:label path="description" class="form-label">description</form:label>
			<form:input path="description" class="form-control" />
			<form:errors path="description" class="text-danger" />
		</div>

		<div class="mb-3">
			<form:label path="price" class="form-label">price </form:label>
			<form:input path="price" type="number" step="0.01" min="0"
				class="form-control" id="price" />
			<form:errors path="price" class="text-danger" />
		</div>
		<button type="submit" class="btn btn-success">Create</button>
	</form:form>
</body>
</html>