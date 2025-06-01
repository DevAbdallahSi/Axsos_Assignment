<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add Book</title>
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
<div class="container mt-5">
    <h1 class="text-center mb-4">Add a Book</h1>

    <form:form action="/books" method="post" modelAttribute="book" class="card p-4 shadow">
        <div class="mb-3">
            <form:label path="title" class="form-label">Title</form:label>
            <form:input path="title" cssClass="form-control" />
            <form:errors path="title" cssClass="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="description" class="form-label">Description</form:label>
            <form:input path="description" cssClass="form-control" />
            <form:errors path="description" cssClass="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="language" class="form-label">Language</form:label>
            <form:input path="language" cssClass="form-control" />
            <form:errors path="language" cssClass="text-danger" />
        </div>

        <div class="mb-3">
            <form:label path="numberOfPages" class="form-label">Pages</form:label>
            <form:input path="numberOfPages" cssClass="form-control" type="number" />
            <form:errors path="numberOfPages" cssClass="text-danger" />
        </div>

        <div class="d-grid">
            <input type="submit" value="Create Book" class="btn btn-primary" />
        </div>
    </form:form>
</div>
    	<a href="/books"  class="text-primary text-decoration-underline">Books Page</a>

</body>
</html>
