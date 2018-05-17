<?php session_start();
if (isset($_GET['lang']) && $_GET['lang'] != $_COOKIE['lang']) {
    setcookie('lang', $_GET['lang'], time() + 24 * 60 * 60);
    header("Location:" . $_SERVER['PHP_SELF']);
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        .main {
            height: 30px;
            width: 10%;
            text-align: center;
            margin-left: 800px;
            background-color: black;
        }
        .main img {
            width: 23%;
            height: 100%;
            object-fit: contain;
            display: inline-block;
            margin-left: 10px;
        }
    </style>
</head>
<body>
<div align="center">
    <div class="main">
        <a href="index.php?lang=ua"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2000px-Flag_of_Ukraine.svg.png"></a>
        <a href="index.php?lang=ru"><img src="https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg"></a>
        <a href="index.php?lang=en"><img src="http://images.all-free-download.com/images/graphicthumb/colors_of_england_201015.jpg"></a>
    </div>
    <?php
    if (isset($_COOKIE['lang']) && $_COOKIE['lang'] === 'ua') {
        include('templates\uaForm.php');
    } else if (isset($_COOKIE['lang']) && $_COOKIE['lang'] === 'ru') {
        include('templates\ruForm.php');
    } else if (isset($_COOKIE['lang']) && $_COOKIE['lang'] === 'en') {
        include('templates\enForm.php');
    }
    else {
        include('templates\uaForm.php');
    }
    ?>
</div>
</body>
</html>
