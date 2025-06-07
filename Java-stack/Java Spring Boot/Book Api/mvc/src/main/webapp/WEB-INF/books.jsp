<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Books page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<h1>Books</h1>
	<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Language</th>
      <th scope="col">Pages</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
   <c:forEach var="book" items="${books}">
        <tr>
            <td>${book.id}</td>
		    <td><a href="/book/${book.id}/details">${book.title}</a></td>
		    <td>${book.language}</td>
		    <td>${book.numberOfPages}</td>
		    <td>
		    <form action="/books/${book.id}" method="post">
			    <input type="hidden" name="_method" value="delete">
			    <input type="submit" value="Delete" class="btn btn-danger">
			</form>
			</td>
        </tr>
        
    </c:forEach>
  </tbody>
</table>
<a href="/home" class="btn btn-primary">Add Book Page</a>

	
</body>
</html>