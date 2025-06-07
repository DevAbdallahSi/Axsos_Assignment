<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
<div class="container mt-5">
    <div class="card p-4 shadow-sm">
        <h2 class="mb-4">Your Omikuji Result</h2>

        <p><strong>Number:</strong> <c:out value="${sessionScope.number}" /></p>
        <p><strong>City:</strong> <c:out value="${sessionScope.name_city}" /></p>
        <p><strong>Person:</strong> <c:out value="${sessionScope.name_person}" /></p>
        <p><strong>Professional or Hobby:</strong> <c:out value="${sessionScope.professional}" /></p>
        <p><strong>Nice Message:</strong> <c:out value="${sessionScope.nice}" /></p>

        <a href="/" class="btn btn-secondary mt-3">Go Back</a>
    </div>
</div>
</body>
</html>