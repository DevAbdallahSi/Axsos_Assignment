<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Send an Omikuji!</h1>
<form action="/Omikuji/display" method="post">
        <label>Pick any number from 5 to 25</label>
        <input type="number" id="number" name="number" min="5" max="25">
        <label>Enter the name of any city.</label>
        <input type="text" name="name_city">
        <label>Enter the name of any real person</label>
        <input type="text" name="name_person">
        <label>Enter professional endeavor or hobby:</label>
        <input type="text" name="professional">
        <label>Enter any type of living thing.</label>
        <input type="text" name="living">
        <p><label for="w3review">Say something nice to someone:</label></p>
        <textarea id="w3review" name="nice" rows="4" cols="50"></textarea>
        <p>Send and show a friend</p>
        <input type="submit" value="send">
    </form>
 
 
</body>
</html>