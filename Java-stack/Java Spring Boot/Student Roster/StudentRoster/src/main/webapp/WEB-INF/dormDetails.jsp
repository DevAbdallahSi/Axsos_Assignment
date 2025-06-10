<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<title>DormDetails</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>
	<h1>${dorm.name}</h1>

	<a href="/dorms" class="text-primary text-decoration-underline">Dashboard</a>
	<c:if test="${not empty students}">
		<form:form action="/dorm/${dorm.id}/assign" method="post"
			modelAttribute="student">
			<div class="mb-3">
				<form:label path="id" class="form-label">Select Student</form:label>
				<form:select path="id" class="form-select">
					<form:options items="${students}" itemValue="id" itemLabel="name" />
				</form:select>
				<form:errors path="id" class="text-danger" />
			</div>
			<button type="submit" class="btn btn-success">Add</button>
		</form:form>
	</c:if>


	<table class="table table-striped mt-3">
		<thead>
			<tr>
				<th>Student</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="student" items="${dorm.students}">
				<tr>
					<td>${student.name}</td>
					<td>
						<form action="/destroy/${student.id}" method="post">
							<input type="hidden" name="_method" value="delete"> <input
								type="submit" value="Delete" class="btn btn-danger">
						</form>
					</td>
				</tr>
			</c:forEach>
		</tbody>

	</table>
</body>
</html>