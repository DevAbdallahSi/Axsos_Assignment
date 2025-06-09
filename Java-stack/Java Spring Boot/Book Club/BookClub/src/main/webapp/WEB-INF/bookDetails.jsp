<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Book Details</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>

	<div class="container mt-4 p-4 border rounded bg-light shadow">
	<a href="/books" class="text-primary text-decoration-underline">Back to
		the shelves</a>
		<h1 class="text-primary">${book.title}</h1>
		<p>
			<strong>${book.user.userName}</strong> read <em>${book.title}</em> by
			<strong>${book.author}</strong>
		</p>
		<p>Here are ${book.user.userName}'s thoughts:</p>
		<p>${book.myThoughts}</p>

		<c:if test="${book.user.id == userId}">
			<a href="/editBook/${book.id}" class="btn btn-secondary">Edit</a>
			<form action="/books/${book.id}/delete" method="post" class="d-inline">
				<input type="hidden" name="_method" value="delete" />
				<button class="btn btn-danger">Delete</button>
			</form>
		</c:if>
	</div>
</body>
</html>
