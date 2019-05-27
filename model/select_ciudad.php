<?php
    include("db_manager.php");
    include("ciudad.php");

    $result = selectCiudades();

    echo $result;

?>