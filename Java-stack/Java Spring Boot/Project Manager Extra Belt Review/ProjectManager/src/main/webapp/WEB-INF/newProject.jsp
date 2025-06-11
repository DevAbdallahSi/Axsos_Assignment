

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>New project</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h1 class="mb-4">create project</h1>
    <form:form action="/project/form" method="post" modelAttribute="project" class="w-50">
        <div class="mb-3">
            <form:label path="title" class="form-label">title</form:label>
            <form:input path="title" class="form-control" />
            <form:errors path="title" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="description" class="form-label">description</form:label>
            <form:input path="description" class="form-control" />
            <form:errors path="description" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="dueDate" class="form-label">Due Date (MM/dd/yyyy): </form:label>
            <form:input path="dueDate" class="form-control" type="text" placeholder="MM/dd/yyyy"/>
            <form:errors path="dueDate" class="text-danger" />
        </div>
        <button type="submit" class="btn btn-success">Create</button>
    </form:form>
</body>
</html>
