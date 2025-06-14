<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>project Details</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>

	<div class="container mt-4 p-4 border rounded bg-light shadow">
	<a href="/dashboard" class="text-primary text-decoration-underline">Back to
		the dashboard</a>
		<h1 class="text-primary">Project Details</h1>
		
		<p><strong>project</strong> : <em>${project.title}</em> by</p>
		<p><strong>Description</strong> : <em>${project.description}</em></p>
		<p><strong>Due Date</strong> : <em>${project.dueDate}</em> by</p>
		

		<c:if test="${project.owner.id == userId}">
			<form action="/projects/${project.id}/delete" method="post" class="d-inline">
				<input type="hidden" name="_method" value="delete" />
				<button class="btn btn-danger">Delete</button>
			</form>
		</c:if>
	</div>
</body>
</html>