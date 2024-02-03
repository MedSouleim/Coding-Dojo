<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Show Fortune</title>
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyA/6D7h06d6L1b2lkMzBeb1Xu7jQJENnC" crossorigin="anonymous">
</head>
<body>
<div class="container mt-5">
    <h2 class="mb-4">Your Fortune:</h2>
    <p>Picked Number: ${number}</p>
    <p>City: ${city}</p>
    <p>Real Person: ${person}</p>
    <p>Professional Endeavor or Hobby: ${endeavor}</p>
    <p>Living Thing: ${livingThing}</p>
    <p>Nice Message: ${niceMessage}</p>
    <a class="btn btn-secondary" href="/omikuji">Go back to Omikuji form</a>
</div>
</body>
</html>
