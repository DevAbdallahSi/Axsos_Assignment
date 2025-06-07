<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>Dorms</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body class="container mt-5">
	<a href="/dorms/new" class="text-primary text-decoration-underline">new
		dorm</a>
	<a href="/students/new" class="text-primary text-decoration-underline">new
		student</a>

	<h1>Dorms</h1>
	<table class="table table-striped mt-3">
		<thead>
			<tr>
				<th>Dorm</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="dorm" items="${dorms}">
				<tr>
					<td>${dorm.name}</td>
					<td><a href="/dorm/${dorm.id}" class="text-primary text-decoration-underline">Student details</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>