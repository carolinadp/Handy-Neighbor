<?php

    function insertarCiudad($nombre){
        $sql = "INSERT INTO Ciudad (nombre) VALUES ('". $nombre . "');";
        return sqlInsert($sql);
    }

    function cargarCiudades() {
        $sql = "SELECT id, nombre FROM Ciudad";
        return sqlSelect($sql);
    }

    function selectCiudades(){
        $result = cargarCiudades();
        $ans = "<label for=\"ciudad\">Ciudad</label><select class='form-control' id='ciudad' name='ciudad'>";
        foreach ($result as $row ){
            $nombre = $row["nombre"];
            $id = $row["id"];
            $ans = $ans . "<option value=" . $id . ">" . $nombre . "</option>";
        }
        $ans = $ans . "</select>";
        return $ans;
    }

?>