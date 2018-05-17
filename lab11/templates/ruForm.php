<h1>Лабораторная робота №11</h1>
<form action="templates/ruTemplate.php" method="post" enctype="multipart/form-data">
    <table>
        <tr>
            <td><label>Логин:</label></td>
            <td><input type="text" name="login" value="<?php
                if (isset($_SESSION['login'])) {
                    echo $_SESSION['login'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label>Пароль:</label></td>
            <td><input type="password" name="password" value="<?php
                if (isset($_SESSION['password'])) {
                    echo $_SESSION['password'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label>Пароль (еще раз):</label></td>
            <td><input type="password" name="password2" value="<?php
                if (isset($_SESSION['password2'])) {
                    echo $_SESSION['password2'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label>Пол:</label></td>
            <td><input name="gender"
                       type="radio" <?php if (isset($_SESSION['gender']) && $_SESSION['gender'] === 'мужчина') {
                    echo 'checked';
                } ?> value="мужчина">мужчина
                <input name="gender"
                       type="radio" <?php if (isset($_SESSION['gender']) && $_SESSION['gender'] === 'женщина') {
                    echo 'checked';
                } ?> value="женщина">женщина
            </td>
        </tr>
        <tr>
            <td><label>Город:</label></td>
            <td><select name="city">
                    <option value="Житомир" <?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Житомир") {
                        echo 'selected';
                    } ?>>Житомир
                    </option>
                    <option value="Киев"<?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Киев") {
                        echo 'selected';
                    } ?>>Киев
                    </option>
                    <option value="Львов" <?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Львов") {
                        echo 'selected';
                    } ?>>Львов
                    </option>
                </select>
            </td>
        </tr>
        <tr>
            <td><label>Любимые игры:</label></td>
            <td><input name="games[]" value="футбол"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("футбол", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>футбол
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input name="games[]" value="баскетбол"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("баскетбол", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>баскетбол
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input name="games[]" value="волейбол"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("волейбол", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>волейбол
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input name="games[]" value="шахматы"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("шахматы", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>шахматы
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input name="games[]" value="World of Tanks"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("World of Tanks", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>World of Tanks
            </td>
        </tr>
        <tr>
            <td><label>О себе:</label></td>
            <td><textarea name="about"><?php
                    if (isset($_SESSION['about'])) {
                        echo $_SESSION['about'];
                    }
                    ?></textarea></td>
        </tr>
        <tr>
            <td><label>Фотография:</label></td>
            <td><input required="required" name="photo" type="file"></td>
        </tr>
        <tr>
            <td align="center" colspan="2">
                <button type="submit">Зарегестрироваться</button>
            </td>
        </tr>
    </table>
</form>
</div>
<style>
    body{
        background: url("https://img1.goodfon.ru/original/2560x1600/6/85/minimalizm-gradient-background-129.jpg");
    }
</style>