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
	<div class="container mt-4 p-4 border rounded bg-light shadow">
    <h3 class="text-primary">${book.title}</h3>
    <p><strong>Description:</strong> ${book.description}</p>
    <p><strong>Language:</strong> ${book.language}</p>
    <p><strong>Pages:</strong> ${book.numberOfPages}</p>
</div>

	<a href="/books"  class="text-primary text-decoration-underline">Books Page</a>
	
</body>
</html>