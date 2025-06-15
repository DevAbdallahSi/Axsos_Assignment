<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Talk Details</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>

	<div class="container mt-4 p-4 border rounded bg-light shadow">
		<h2>Welcome, ${user.firstName}!</h2>

		<form action="/logout" method="post">
			<button class="btn btn-danger">Logout</button>
		</form>
		<a href="/dashboard" class="text-primary text-decoration-underline">Back
			to the dashboard</a>
		<h1 class="text-primary">${talk.title}</h1>

		<p>This Talk will be in ${talk.date}</p>

		<c:if test="${talk.owner.id == user.id}">
			<form action="/talks/${talk.id}/delete" method="post"
				class="d-inline">
				<input type="hidden" name="_method" value="delete" />
				<button class="btn btn-danger">Delete the Talk</button>
			</form>
			<a href="/talks/${talk.id}/edit" class="btn btn-primary">Edit the
				Talk</a>
			<table class="table table-striped mt-3">

				<thead>
					<tr>
						<th>Atendant Name</th>
						<th>action</th>

					</tr>
				</thead>
				<tbody>
					<c:forEach var="userT" items="${talkjoind}">
						<tr>
							<td>${userT.firstName}</td>
							<td><form action="/talks/${talk.id}/delete" method="post"
									class="d-inline">
									<input type="hidden" name="_method" value="delete" />
									<button class="btn btn-danger">Delete</button>
								</form></td>

						</tr>
					</c:forEach>
				</tbody>
			</table>
	</div>
	</c:if>

	</div>


</body>
</html>