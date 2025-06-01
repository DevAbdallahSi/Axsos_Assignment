
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@ page isErrorPage="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>burger details</title>
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"rel="stylesheet">

</head>
<body>
	<form:form action="/burgers/edit/${burger.id}" method="post" modelAttribute="burger" class="card p-4 shadow">
	    <input type="hidden" name="_method" value="put">
	
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