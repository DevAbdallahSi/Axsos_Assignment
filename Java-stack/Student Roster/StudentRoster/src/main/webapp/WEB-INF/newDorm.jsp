<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>New Dorm</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">

    <h1 class="mb-4">Add a New Dorm</h1>
        	<a href="/dorms"  class="text-primary text-decoration-underline">dashboard</a>
    
    <form:form action="/dorms/form" method="post" modelAttribute="dorm" class="w-50">
        <div class="mb-3">
            <form:label path="name" class="form-label"> Name</form:label>
            <form:input path="name" class="form-control" />
            <form:errors path="name" class="text-danger" />
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
    </form:form>
</body>
</html>