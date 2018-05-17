<h1>Лабораторна робота №11</h1>
<form action="templates/uaTemplate.php" method="post" enctype="multipart/form-data">
    <table>
        <tr>
            <td><label for="login">Логін:</label></td>
            <td><input type="text" name="login" id="login" value="<?php
                if (isset($_SESSION['login'])) {
                    echo $_SESSION['login'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label for="password">Пароль:</label></td>
            <td><input type="password" name="password" id="password" value="<?php
                if (isset($_SESSION['password'])) {
                    echo $_SESSION['password'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label for="password2">Пароль (ще раз):</label></td>
            <td><input type="password" name="password2" id="password2" value="<?php
                if (isset($_SESSION['password2'])) {
                    echo $_SESSION['password2'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label>Стать:</label></td>
            <td><input name="gender"
                       type="radio" <?php if (isset($_SESSION['gender']) && $_SESSION['gender'] === 'чоловік') {
                    echo 'checked';
                } ?> value="чоловік">чоловік
                <input name="gender"
                       type="radio" <?php if (isset($_SESSION['gender']) && $_SESSION['gender'] === 'жінка') {
                    echo 'checked';
                } ?> value="жінка">жінка
            </td>
        </tr>
        <tr>
            <td><label>Місто:</label></td>
            <td><select name="city">
                    <option value="Житомир" <?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Житомир") {
                        echo 'selected';
                    } ?>>Житомир
                    </option>
                    <option value="Київ"<?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Київ") {
                        echo 'selected';
                    } ?>>Київ
                    </option>
                    <option value="Львів" <?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Львів") {
                        echo 'selected';
                    } ?>>Львів
                    </option>
                </select>
            </td>

        </tr>
        <tr>
            <td><label>Улюблені ігри:</label></td>
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
            <td><input name="games[]" value="шахи"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("шахи", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>шахи
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
            <td><label for="aboutme">Про себе:</label></td>
            <td><textarea id="aboutme" name="aboutme"><?php
                    if (isset($_SESSION['aboutme'])) {
                        echo $_SESSION['aboutme'];
                    }
                    ?></textarea></td>
        </tr>
        <tr>
            <td><label>Фотографія:</label></td>
            <td><input name="photo" type="file"></td>
        </tr>
        <tr>
            <td align="center" colspan="2">
                <button type="submit">Зареєструватися</button>
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