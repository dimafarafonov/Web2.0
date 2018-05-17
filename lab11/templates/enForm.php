<h1>Lab №11</h1>
<form action="templates/enTemplate.php" method="post" enctype="multipart/form-data">
    <table>
        <tr>
            <td><label>Login:</label></td>
            <td><input type="text" name="login" placeholder="Enter your login" value="<?php
                if (isset($_SESSION['login'])) {
                    echo $_SESSION['login'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label>Password:</label></td>
            <td><input type="password" placeholder="Enter your password" name="password" value="<?php
                if (isset($_SESSION['password'])) {
                    echo $_SESSION['password'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label>Password (again):</label></td>
            <td><input type="password" placeholder="Enter your password again" name="password2" value="<?php
                if (isset($_SESSION['password2'])) {
                    echo $_SESSION['password2'];
                }
                ?>"></td>
        </tr>
        <tr>
            <td><label>Gender:</label></td>
            <td><input name="gender"
                       type="radio" <?php if (isset($_SESSION['gender']) && $_SESSION['gender'] === 'man') {
                    echo 'checked';
                } ?> value="man">man
                <input name="gender"
                       type="radio" <?php if (isset($_SESSION['gender']) && $_SESSION['gender'] === 'female') {
                    echo 'checked';
                } ?> value="female">female
            </td>
        </tr>
        <tr>
            <td><label>City:</label></td>
            <td><select name="city">
                    <option value="Zhitomir" <?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Zhitomir") {
                        echo 'selected';
                    } ?>>Zhitomir
                    </option>
                    <option value="Kiev"<?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Kiev") {
                        echo 'selected';
                    } ?>>Kiev
                    </option>
                    <option value="Lviv" <?php if (isset($_SESSION['city']) && $_SESSION['city'] === "Lviv") {
                        echo 'selected';
                    } ?>>Lviv
                    </option>
                </select>
            </td>
        </tr>
        <tr>
            <td><label>Favorite games:</label></td>
            <td><input name="games[]" value="football "
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("football ", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>football
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input name="games[]" value="basketball "
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("basketball ", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>basketball
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input name="games[]" value="volleyball"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("volleyball", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>volleyball
            </td>
        </tr>
        <tr>
            <td></td>
            <td><input name="games[]" value="chess"
                       type="checkbox" <?php if (isset($_SESSION['games']) && in_array("chess", $_SESSION['games'])) {
                    echo 'checked';
                } ?>>chess
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
            <td><label>About:</label></td>
            <td><textarea name="about"><?php
                    if (isset($_SESSION['about'])) {
                        echo $_SESSION['about'];
                    }
                    ?></textarea></td>
        </tr>
        <tr>
            <td><label>Photo:</label></td>
            <td><input required="required" name="photo" type="file"></td>
        </tr>
        <tr>
            <td align="center" colspan="2">
                <button type="submit">Submit</button>
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