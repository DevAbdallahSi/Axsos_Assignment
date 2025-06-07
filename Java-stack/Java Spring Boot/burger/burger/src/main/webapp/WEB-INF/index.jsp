<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Book</title>
<!-- Bootstrap 5 CDN -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"rel="stylesheet">
</head>
<body class="bg-light">
	<h1>Burger Tracker</h1>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">Burger Name</th>
				<th scope="col">Resturant Name</th>
				<th scope="col">Rating (out of 5)</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="burger" items="${burgers}">
				<tr>
					<td>${burger.burgerName}</td>
					<td>${burger.resturantName}</td>
					<td>${burger.rating}</td>
		    		<td><a href="/burgers/edit/${burger.id}">edit</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Add a Book</h1>

		<form:form action="/burger" method="post" modelAttribute="burger"
			class="card p-4 shadow">
			<div class="mb-3">
				<form:label path="burgerName" class="form-label">BurgerName</form:label>
				<form:input path="burgerName" cssClass="form-control" />
				<form:errors path="burgerName" cssClass="text-danger" />
			</div>

			<div class="mb-3">
				<form:label path="resturantName" class="form-label">ResturantName</form:label>
				<form:input path="resturantName" cssClass="form-control" />
				<form:errors path="resturantName" cssClass="text-danger" />
			</div>

			<div class="mb-3">
			    <form:label path="rating" class="form-label">Rating</form:label>
			    <input type="number" min="0" max="5" class="form-control"
			           name="rating" value="${burger.rating}" />
			    <form:errors path="rating" cssClass="text-danger" />
			</div>

			<div class="mb-3">
				<form:label path="notes" class="form-label">Notes</form:label>
				<form:input path="notes" cssClass="form-control"  />
				<form:errors path="notes" cssClass="text-danger" />
			</div>

			<div class="d-grid">
				<input type="submit" value="Create RestoBerg" class="btn btn-primary" />
			</div>
		</form:form>
	</div>

</body>
</html>