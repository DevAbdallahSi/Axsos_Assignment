<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Welcome to Football League Platform!</title>
	<!-- Bootstrap CSS CDN -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container py-5">
	<h1 class="text-center mb-5">Welcome</h1>

	<div class="row justify-content-center">
		<!-- Login Form -->
		<div class="col-md-5">
			<div class="card shadow">
				<div class="card-body">
					<h3 class="card-title text-center mb-4">Login</h3>
					<form:form action="/login" method="post" modelAttribute="newLogin">
						<div class="mb-3">
						<form:label path="email" class="form-label">Email:</form:label>
						<form:input path="email" class="form-control"/>
						<form:errors path="email" cssClass="text-danger"/>

						</div>

						<div class="mb-3">
							<form:label path="password" class="form-label">Password:</form:label>
							<form:input path="password" type="password" class="form-control"/>
							<form:errors path="password" cssClass="text-danger"/>
						</div>

						<div class="d-grid">
							<input type="submit" class="btn btn-primary" value="Login"/>
						</div>
					</form:form>
				</div>
			</div>
		</div>

		<!-- Signup Form -->
		<div class="col-md-7 mt-4 mt-md-0">
			<div class="card shadow">
				<div class="card-body">
					<h3 class="card-title text-center mb-4">Sign Up</h3>
					<form:form action="/register" method="post" modelAttribute="newUser">
						<div class="mb-3">
							<form:label path="username" class="form-label">Username:</form:label>
							<form:input path="username" class="form-control"/>
							<form:errors path="username" cssClass="text-danger"/>
						</div>

						<div class="mb-3">
							<form:label path="password" class="form-label">Password:</form:label>
							<form:input path="password" type="password" class="form-control"/>
							<form:errors path="password" cssClass="text-danger"/>
						</div>

						<div class="mb-3">
							<form:label path="confirmPassword" class="form-label">Confirm Password:</form:label>
							<form:input path="confirmPassword" type="password" class="form-control"/>
							<form:errors path="confirmPassword" cssClass="text-danger"/>
						</div>

						<div class="mb-3">
							<form:label path="phonenumber" class="form-label">Phone Number:</form:label>
							<form:input path="phonenumber" class="form-control"/>
							<form:errors path="phonenumber" cssClass="text-danger"/>
						</div>

						<div class="mb-3">
							<form:label path="email" class="form-label">Email:</form:label>
							<form:input path="email" class="form-control"/>
							<form:errors path="email" cssClass="text-danger"/>
						</div>

						<div class="mb-3">
							<form:label path="address" class="form-label">Address:</form:label>
							<form:input path="address" class="form-control"/>
							<form:errors path="address" cssClass="text-danger"/>
						</div>

						<div class="d-grid">
							<input type="submit" class="btn btn-success" value="Sign Up"/>
						</div>
					</form:form>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Bootstrap JS Bundle CDN -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
