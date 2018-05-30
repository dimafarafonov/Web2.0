<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=lab12;charset=utf8','root','');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}

$sql = "SELECT * FROM tov";
$result = $pdo->query($sql);

echo "<h1>Створення БАЗИ ДАНИХ</h1>";
echo "<table border='1' cellpadding='5px' style='border-collapse: collapse'><tr><th>Номер</th><th>Назва</th><th>Ціна</th><th>Кількість</th><th>Дата</th></tr>";
foreach($result as $row) {
    echo "<tr><td>".$row['id_tov']."</td><td>".$row['name']. "</td><td>".$row['price']. "</td><td>".$row['number'].
        "</td><td>".$row['date'] . "</td></tr>";
}
echo "</table>";
include 'buttons.tpl';