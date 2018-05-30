<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=lab12;charset=utf8','root','');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}

$row = $pdo->query("SELECT COUNT(id_tov) FROM tov")->fetch();

$num = $row[0] + 1;
$name = $_POST['name'];
$price = $_POST['price'];
$number = $_POST['number'];
$date = $_POST['date'];


$sql =  "INSERT INTO tov (id_tov, name, price, number, date) VALUES ('".$num."', '". $name."', '". $price."
', '".$number. "', '". $date."')";
$affacted_rows = $pdo->exec($sql);
include 'index.php';


