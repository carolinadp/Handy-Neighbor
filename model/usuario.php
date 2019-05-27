<?php
    include("db_manager.php");
    function insertarUsuario($nombre, $correo, $contrasena, $telefono, $id_ciudad){
        $sql = "INSERT INTO Usuario (nombre, correo, contrasena, telefono, id_ciudad) VALUES ('". $nombre . "','". $correo . "','". $contrasena . "','". $telefono . "',". $id_ciudad . ");";
        return sqlInsert($sql);

    }

    function consultarUsuario($id_usuario){
        $sql = "SELECT nombre, correo, contrasena, telefono, id_ciudad FROM Usuario WHERE id_usuario = ". $id_usuario .";";
        return sqlSelect($sql);
    }

?>