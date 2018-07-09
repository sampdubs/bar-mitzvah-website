<?php

$servername = "localhost";
$username = "sampw";
$password = "";
$dbname = "formInfo_db";

$conn = mysqli_connect($servername, $username, $password, $dbname) or die();

function alert($msg) {
    echo '<script type="text/javascript">alert("' . $msg . '")</script>';
}


$firstName = mysqli_real_escape_string($conn, $_POST["first-name"]);
$lastName = mysqli_real_escape_string($conn, $_POST["last-name"]);
$email = mysqli_real_escape_string($conn, $_POST["email"]);
$guestNum = mysqli_real_escape_string($conn, $_POST["guest-number"]);
$partyNum = mysqli_real_escape_string($conn, $_POST["partiers-number"]);
$comments = mysqli_real_escape_string($conn, $_POST["comments"]);


$sqli = "INSERT INTO rsvpInfo (firstName, lastName, email, guestNum, partyNum, comment) 
VALUES ('$firstName', '$lastName', '$email', '$guestNum', '$partyNum', '$comments')";

if (mysqli_query($conn, $sqli)){
  echo('
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>Thank you</title>
            <link rel="stylesheet" href="style.css" type="text/css"/>
            <link rel="icon" href="thumbnail.jpg">
        </head>
        <body>
          <p id = "thank-you">Thank you for RSVPing, ' . ucfirst($firstName) . ' ' . ucfirst($lastName) . '. Click <a href = "index.html">here</a> to continue.</p>
        </body>
    </html>
    ');
} else {
  echo('There was an error!: '. mysqli_error($conn));
}

?>