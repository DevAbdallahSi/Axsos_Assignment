
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>new Book</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="container mt-5">
	<a href="/books" class="btn btn-primary">All books</a>
    <h1 class="mb-4">Add a book to your shelf!</h1>
    <form:form action="/newBook/form" method="post" modelAttribute="book" class="w-50">
        <div class="mb-3">
            <form:label path="title" class="form-label">title</form:label>
            <form:input path="title" class="form-control" />
            <form:errors path="title" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="author" class="form-label">author</form:label>
            <form:input path="author" class="form-control" />
            <form:errors path="author" class="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="myThoughts" class="form-label">myThoughts </form:label>
            <form:input path="myThoughts" class="form-control" />
            <form:errors path="myThoughts" class="text-danger" />
        </div>


        <button type="submit" class="btn btn-success">Post</button>
    </form:form>
</body>
</html>