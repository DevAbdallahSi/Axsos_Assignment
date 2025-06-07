<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <div class="card shadow p-4">
        <h2>Welcome, <c:out value="${user}" />!</h2>
        <p>You are successfully logged in.</p>
        <a href="/logout" class="btn btn-danger">Logout</a>
    </div>
</div>
</body>
</html>
