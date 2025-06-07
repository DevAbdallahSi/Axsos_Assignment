<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Person Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h1>Person Details</h1>
    <table class="table table-striped mt-3">
        <thead>
            <tr>
                <th>Name</th>
                <th>License Number</th>
                <th>State</th>
                <th>Expiration Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${person.firstName} ${person.lastName}</td>
                <td>${person.license.number}</td>
                <td>${person.license.state}</td>
                <td>${person.license.expirationDate}</td>
            </tr>
        </tbody>
    </table>
</body>
</html>