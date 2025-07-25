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

		<h2>Welcome, ${user.firstName}!</h2>

		<form action="/logout" method="post">
			<button class="btn btn-danger">Logout</button>
		</form>

		<a href="/newtalk" class="btn btn-primary">+ add a Talk</a>

		<h3>TALkTracker Dashboard</h3>
		<table class="table table-striped mt-3">
			<thead>
				<tr>
					<th>ID</th>
					<th>Talk Title</th>
					<th>Date</th>
					<th>Speaker</th>
					<th>Attended</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="talk" items="${allTalk}">
					<tr>

						<c:if test="${talk.owner.id == userId}">
							<td>${talk.id}</td>
							<td><a href="/showTalk/${talk.id}" class="btn btn-primary">${talk.title}</a></td>
							<td>${talk.date}</td>
							<td>${talk.owner.firstName}</td>
						</c:if>

						<%-- JSTL comment: Otherwise --%>
						<c:if test="${talk.owner.id != userId}">

							<td>${talk.id}</td>
							<td><a href="/showTalk/${talk.id}" class="btn btn-primary">${talk.title}</a></td>
							<td>${talk.date}</td>
							<td>${talk.owner.firstName}</td>

							<td><c:if test="${talk.members}">

									<form action="/talk/${talk.id}/join" method="post"
										style="display: inline;">
										<button class="btn btn-sm btn-primary">Attend</button>
									</form>
								</c:if> <c:if test="${talk.owner.id == userId}">
									<form action="/projects/${project.id}/leave" method="post"
										style="display: inline;">
										<button type="submit" class="btn btn-danger">Not
											Attend</button>
									</form></td>
						</c:if>

						</c:if>

					</tr>
				</c:forEach>
			</tbody>
		</table>
</body>
</html>