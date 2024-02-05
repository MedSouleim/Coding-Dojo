<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
    <title>All Books</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-TM6oVZOd18Yo9f44rZFJ6K2lqP9s1WpOpG8iA6MCg1urp6b7ApmMrv5VZHiCD+3E"
          crossorigin="anonymous">
</head>
<body>

<div class="container mt-5">
    <h1 class="mb-4">All Books</h1>

    <table class="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Language</th>
            <th>Number of Pages</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="book" items="${books}">
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.language}</td>
                <td>${book.numberOfPages}</td>
                <td>
                    <a class="btn btn-info btn-sm" href="<spring:url value='/books/${book.id}'/>">Details</a>
                    <!-- Add buttons for edit and delete if needed -->
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>

</body>
</html>
