<?php
session_start();
if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['password2'])
    && isset($_POST['gender']) && isset($_POST['city']) && isset($_POST['aboutme']) && isset($_FILES['photo']['name'])) {
    $login = htmlentities($_POST['login']);
    $password = htmlentities($_POST['password']);
    $password2 = htmlentities($_POST['password2']);
    $genger = htmlentities($_POST['gender']);
    $games = ($_POST['games']);
    $city = $_POST['city'];
    $aboutme = htmlentities($_POST['aboutme']);
    $photo = $_FILES['photo']['name'];
    move_uploaded_file($_FILES['photo']['tmp_name'], dirname(__FILE__) . '/' . $photo);
    $_SESSION['login'] = $login;
    $_SESSION['password'] = $password;
    $_SESSION['password2'] = $password2;
    $_SESSION['gender'] = $genger;
    $_SESSION['games'] = $games;
    $_SESSION['city'] = $city;
    $_SESSION['aboutme'] = $aboutme;
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
.Forimg img{
width: 100%;
height: 100%;
object-fit: contain;
display: inline-block;
}
body{
 background: linear-gradient(to top, pink, lightgreen);
}
</style>
</head>
<body align='center'>
<h1>Лабораторна робота №11</h1>
<h2>Результати обробки форми</h2>
<b>Логін: </b>" . $login = $_SESSION['login'] . "<br><br>
<b>Пароль: </b>";
    if ($password != $password2) {
        $output .= " не співпадає (перший - " . iconv_strlen($password) . " символів, другий - "
            . iconv_strlen($password2) . " символів)<br><br>";
    } else {
        $output .= "$password<br><br>";
    }
    $output .= "<b>Стать:</b> $genger<br><br>
<b>Місто:</b> $city<br><br>
<b>Улюблені ігри:</b>";
    foreach ($games as $item)
        $output .= "<br>" . htmlentities($item);
    $output .= "<br><br>
<b>Про себе: </b>" . nl2br($aboutme) .
        "<br><br>
<b>Фотографія: </b><div class='Forimg'><img src=\"$photo\"></div><br><br>
<a href='../index.php?lang=ua'>Повернутися на головну сторінку</a>
</body></html>";
    echo $output;
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    $genger = $_SESSION['gender'];
    $games = $_SESSION['games'];
    $city = $_SESSION['city'];
    $aboutme = $_SESSION['aboutme'];
} else {
    echo "Введені данні некоректні";
}
?>