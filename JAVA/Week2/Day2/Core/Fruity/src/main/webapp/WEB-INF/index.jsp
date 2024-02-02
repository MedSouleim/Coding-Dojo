<%--
  Created by IntelliJ IDEA.
  User: medso
  Date: 2/1/2024
  Time: 9:47 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>FruityLoops</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
        .ghalla {
            margin-bottom: 10px;
        }
        .table {
            background-color: pink;
            border: 4px solid pink;
            width: 200%;
        }
        body{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
    </style>
</head>
<body>
<h1>Fruit Store</h1>
<div class="ghalla">
    <table class="table table-success table-striped-columns">
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
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
</div>
</body>
</html>
