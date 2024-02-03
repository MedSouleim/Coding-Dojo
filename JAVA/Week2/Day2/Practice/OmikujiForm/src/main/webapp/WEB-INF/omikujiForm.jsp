<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Omikuji Form</title>
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyA/6D7h06d6L1b2lkMzBeb1Xu7jQJENnC" crossorigin="anonymous">
</head>
<body>
<div class="container mt-5">
    <h2 class="mb-4">Omikuji Form</h2>
    <form action="/omikuji/process" method="post">
        <div class="form-group">
            <label for="number">Pick any number from 5 to 25:</label>
            <input type="number" class="form-control" id="number" name="number" required min="5" max="25">
        </div>
        <div class="form-group">
            <label for="city">Enter the name of any city:</label>
            <input type="text" class="form-control" id="city" name="city" required>
        </div>
        <div class="form-group">
            <label for="person">Enter the name of any real person:</label>
            <input type="text" class="form-control" id="person" name="person" required>
        </div>
        <div class="form-group">
            <label for="endeavor">Enter a professional endeavor or hobby:</label>
            <input type="text" class="form-control" id="endeavor" name="endeavor" required>
        </div>
        <div class="form-group">
            <label for="livingThing">Enter any type of living thing:</label>
            <input type="text" class="form-control" id="livingThing" name="livingThing" required>
        </div>
        <div class="form-group">
            <label for="niceMessage">Say something nice to someone:</label>
            <input type="text" class="form-control" id="niceMessage" name="niceMessage" required>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
</div>
</body>
</html>
