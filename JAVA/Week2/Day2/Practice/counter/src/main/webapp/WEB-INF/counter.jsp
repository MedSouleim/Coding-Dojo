<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <title>Counter Page</title>
</head>
<body>
<h1>Counter: ${counter}</h1>
<a href="<c:url value="/increment"/>">Increment</a><br>
<a href="<c:url value="/incrementByTwo"/>">Increment by Two</a><br>
<a href="<c:url value="/reset"/>">Reset Counter</a>
</body>
</html>
