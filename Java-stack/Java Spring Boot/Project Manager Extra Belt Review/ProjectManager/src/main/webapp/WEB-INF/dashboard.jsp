<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dashboard</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>
	<%@ page session="true"%>
	

	<div class="container mt-5">
	
		<h2>Welcome, ${user.userName}!</h2>

		<form action="/logout" method="post">
			<button class="btn btn-danger">Logout</button>
		</form>
		
		<a href="/newProject" class="btn btn-primary">+ new project</a>
		<h3>All projects</h3>
		<table class="table table-striped mt-3">
			<thead>
				<tr>
					<th>Project</th>
					<th>Team Lead</th>
					<th>Due Date</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="project" items="${projects}">
					<tr>
						<td><a href="/bookDetails/${project.id}" class="btn btn-primary">${project.title}</a>
						</td>
						<td>${book.author}</td>
						<td>${book.user.userName}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
		
				<h3>All projects</h3>
		<table class="table table-striped mt-3">
		
			<thead>
				<tr>
					<th>Project</th>
					<th>Team Lead</th>
					<th>Due Date</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="project" items="${projects}">
					<tr>
						<td><a href="/bookDetails/${project.id}" class="btn btn-primary">${project.title}</a>
						</td>
						<td>${book.author}</td>
						<td>${book.user.userName}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	
</body>
</html>