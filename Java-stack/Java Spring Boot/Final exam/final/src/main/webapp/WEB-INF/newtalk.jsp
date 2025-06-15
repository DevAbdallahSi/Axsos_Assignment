
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<title>New talk</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body class="container mt-5">
		<h2>Welcome, ${user.firstName}!</h2>

	<form action="/logout" method="post">
		<button class="btn btn-danger">Logout</button>
	</form>
	<h1 class="mb-4">add a Talk</h1>
	<form:form action="/talk/form" method="post"
		modelAttribute="talk" class="w-50">
		<div class="mb-3">
			<form:label path="title" class="form-label"> Talk Title</form:label>
			<form:input path="title" class="form-control" />
			<form:errors path="title" class="text-danger" />
		</div>

		<div class="mb-3">
			<form:label path="date" class="form-label">Talk Date </form:label>
			<form:input path="date" class="form-control" type="date"
				placeholder="MM/dd/yyyy" />
			<form:errors path="date" class="text-danger" />
		</div>

		<div class="mb-3">
			<form:label path="details" class="form-label">Talk Details</form:label>
			<form:input path="details" class="form-control" />
			<form:errors path="details" class="text-danger" />
		</div>

		<button type="submit" class="btn btn-success">Create</button>
	</form:form>
	<a href="/dashboard" class="text-primary text-decoration-underline">Back
		to the dashboard</a>
</body>
</html>