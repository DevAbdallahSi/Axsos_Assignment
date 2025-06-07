<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>customer name: <c:out value="${name}"/></h1>
<h1>item name: <c:out value="${itemName}"/></h1>
<h1>item Price: <c:out value="${price}"/></h1>
<h1>description: <c:out value="${description}"/></h1>
<h1>Vendor: <c:out value="${vendor}"/></h1>

</body>
</html>