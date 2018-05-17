<?php
session_start();
if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['password2'])
    && isset($_POST['gender']) && isset($_POST['city']) && isset($_POST['about']) && isset($_FILES['photo']['name'])) {
    $login = htmlentities($_POST['login']);
    $password = htmlentities($_POST['password']);
    $password2 = htmlentities($_POST['password2']);
    $genger = htmlentities($_POST['gender']);
    $games = ($_POST['games']);
    $city = $_POST['city'];
    $about = htmlentities($_POST['about']);
    $photo = $_FILES['photo']['name'];
    move_uploaded_file($_FILES['photo']['tmp_name'], dirname(__FILE__) . '/' . $photo);

    $_SESSION['login'] = $login;
    $_SESSION['password'] = $password;
    $_SESSION['password2'] = $password2;
    $_SESSION['gender'] = $genger;
    $_SESSION['games'] = $games;
    $_SESSION['city'] = $city;
    $_SESSION['about'] = $about;
    $output = "
<html>
<head>
<style>
.Forimg{
height: 300px;
width: 300px;
text-align: center;
margin: 0 auto;
}
body{
 background: linear-gradient(to top, orange, purple);
}
.Forimg img{
width: 100%;
height: 100%;
object-fit: contain;
display: inline-block;
}
</style>
</head>
<body align='center'>
<h1>Lab №11</h1>
<h3>Results of processing forms</h3>
<b>Login: </b>" . $login = $_SESSION['login'] . "<br><br>
<b>Password : </b>";
    if ($password != $password2) {
        $output .= " does not match<br><br>";
    } else {
        $output .= "$password<br><br>";
    }
    $output .= "<b>Genger:</b> $genger<br><br>
<b>City:</b> $city<br><br>
<b>Favorite games:</b>";
    foreach ($games as $item)
        $output .= "<br>" . htmlentities($item);
    $output .= "<br><br>
<b>About: </b>" . nl2br($about) .
        "<br><br>
<b>Photo: </b><div class='Forimg'><img src=\"$photo\"></div><br>
<a href='../index.php?lang=en'>Go back to main page</a>
</body></html>";
    echo $output;
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    $genger = $_SESSION['gender'];
    $games = $_SESSION['games'];
    $city = $_SESSION['city'];
    $about = $_SESSION['about'];
} else {
    echo "The entered data is incorrect";
}
?>