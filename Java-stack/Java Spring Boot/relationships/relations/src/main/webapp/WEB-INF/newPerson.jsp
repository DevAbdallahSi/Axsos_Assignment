<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>New Person</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h1 class="mb-4">Add a New Person</h1>
    <form:form action="/persons" method="post" modelAttribute="person" class="w-50">
        <div class="mb-3">
            <form:label path="firstName" class="form-label">First Name</form:label>
            <form:input path="firstName" class="form-control" />
            <form:errors path="firstName" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="lastName" class="form-label">Last Name</form:label>
            <form:input path="lastName" class="form-control" />
            <form:errors path="lastName" class="text-danger" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form:form>
</body>
</html>
