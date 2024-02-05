<!-- show.jsp -->

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Show Book</title>
</head>
<body>

<h1>Book Information</h1>

<c:if test="${not empty book}">
    <table>
        <tr>
            <td>Title:</td>
            <td>${book.title}</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>${book.description}</td>
        </tr>
        <tr>
            <td>Language:</td>
            <td>${book.language}</td>
        </tr>
        <tr>
            <td>Number of Pages:</td>
            <td>${book.numberOfPages}</td>
        </tr>
    </table>
</c:if>

</body>
</html>
