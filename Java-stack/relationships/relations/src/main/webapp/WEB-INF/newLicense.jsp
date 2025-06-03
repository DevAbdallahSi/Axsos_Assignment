<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>New License</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h1 class="mb-4">Assign License</h1>
    <form:form action="/licenses" method="post" modelAttribute="license" class="w-50">
        <div class="mb-3">
            <form:label path="number" class="form-label">License Number</form:label>
            <form:input path="number" class="form-control" />
            <form:errors path="number" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="state" class="form-label">State</form:label>
            <form:input path="state" class="form-control" />
            <form:errors path="state" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="expirationDate" class="form-label">Expiration Date</form:label>
            <form:input path="expirationDate" type="date" class="form-control" />
            <form:errors path="expirationDate" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="person" class="form-label">Person</form:label>
            <form:select path="person" class="form-select">
                <c:forEach var="onePerson" items="${persons}">
                    <form:option value="${onePerson.id}">
                        ${onePerson.firstName} ${onePerson.lastName}
                    </form:option>
                </c:forEach>
            </form:select>
            <form:errors path="person" class="text-danger" />
        </div>

        <button type="submit" class="btn btn-success">Assign License</button>
    </form:form>
</body>
</html>