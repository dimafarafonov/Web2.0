<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=lab12;charset=utf8','root','');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}
$numZap = $_POST['numZap'];
$sql = "DELETE FROM tov WHERE id_tov='".$numZap."'";
$result  = $pdo->query($sql);
//echo "<a href='http://lab13.ztu/'>Back</a>";
header('Location:/');