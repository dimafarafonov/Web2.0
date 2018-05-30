<? session_start();?>
<form enctype="multipart/form-data" action="insert.php" method="POST">
    <table>
        <tr>
            <td><label for="name"> Назва:</label></td>
            <td><input type="text" name="name" id="name"></td>
        </tr>
        <tr>
            <td><label for="price"> Ціна:</label></td>
            <td><input type="text" name="price" id="price"></td>
        </tr>
        <tr>
            <td><label for="number"> Кількість:</label></td>
            <td><input type="text" name="number" id="number"></td>
        </tr>
        <tr>
            <td><label for="date">Дата:</label> </td>
            <td><input type="date" name="date" id="date"/></td>
        </tr>
        <tr>
            <td></td>
            <td><label><input type="submit" name="ok" value="Додати"></label>
            </td>
        </tr>
    </table>
</form>