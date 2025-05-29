<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ninja Gold Game</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
 
    <div class="intut_gold p-3">
        <label class="form-label fw-bold">Your Gold :</label><br>
        <input type="text" class="form-control w-25" value="${sessionScope.gold}" readonly>
    </div>
 
    <section class="container d-flex justify-content-around flex-wrap mt-4">
        <form class="border p-3 m-2" action="/processMoney" method="POST">
            <h2>Farm</h2>
            <p>(earns 10-20 gold)</p>
            <button name="Farm" class="btn btn-success">Find Gold!</button>
        </form>
        <form class="border p-3 m-2" action="/processMoney" method="POST">
            <h2>Cave</h2>
            <p>(earns 10-20 gold)</p>
            <button name="Cave" class="btn btn-success">Find Gold!</button>
        </form>
        <form class="border p-3 m-2" action="/processMoney" method="POST">
            <h2>House</h2>
            <p>(earns 10-20 gold)</p>
            <button name="House"  class="btn btn-success">Find Gold!</button>
        </form>
        <form class="border p-3 m-2" action="/processMoney" method="POST">
            <h2>Quest</h2>
            <p>(earns /takes 0-50 gold)</p>
            <button name="Quest"  class="btn btn-success">Find Gold!</button>
        </form>
    </section>
 
    <div class="activities mt-4 p-3">
        <p class="fw-bold">Activities:</p>
        <div class="border p-2" style="height: 200px; overflow-y: auto;">
            <c:forEach var="activity" items="${sessionScope.activities}">
                <p class="m-0" style="color: ${activity.color}">${activity.text}</p>
            </c:forEach>
        </div>
    </div>
 
</body>
</html>