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
				<c:forEach var="project" items="${notContain}">
					<tr>
						<td><a href="/projectDetails/${project.id}"
							class="btn btn-primary">${project.title}</a></td>
						<td>${project.owner.userName}</td>
						<td>${project.dueDate}</td>
						<td>
							<form action="/projects/${project.id}/join" method="post"
								style="display: inline;">
								<button class="btn btn-sm btn-primary">Join</button>
							</form>
						</td>
						
					</tr>
				</c:forEach>
			</tbody>
		</table>


		<h3>Your Projects</h3>
		<table class="table table-striped mt-3">

			<thead>
				<tr>
					<th>Project</th>
					<th>Lead</th>
					<th>Due Date</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="project" items="${list}">
					<tr>
						<td><a href="/projectDetails/${project.id}"
							class="btn btn-primary">${project.title}</a></td>
						<td>${project.owner.userName}</td>
						<td>${project.dueDate}</td>
						<td><c:choose>
								<%-- JSTL comment: If user is owner --%>
								<c:when test="${project.owner.id == user.id}">
									<a href="/projects/${project.id}/edit" class="btn btn-primary">Edit</a>
								</c:when>

								<%-- JSTL comment: Otherwise --%>
								<c:otherwise>
									<form action="/projects/${project.id}/leave" method="post"
										style="display: inline;">
										<button type="submit" class="btn btn-danger">Leave
											Team</button>
									</form>
								</c:otherwise>
							</c:choose></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>

</body>
</html>