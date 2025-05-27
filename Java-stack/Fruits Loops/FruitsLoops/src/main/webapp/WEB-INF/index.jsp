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
	<h1>Fruit Stor</h1>
	<table class="table">
  <thead>
    <tr>
      <th scope="col">Fruit</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
   <c:forEach var="fruit" items="${fruits}">
        <tr>
            <td>${fruit.name}</td>
            <td>${fruit.price}</td>
        </tr>
    </c:forEach>
  </tbody>
</table>
	
</body>
</html>