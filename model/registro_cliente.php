<?php
include("../model/usuario.php");


    $nombre= $_POST['nombre'];
    $correo= $_POST['correo'];
    $contrasena= $_POST['contrasena'];
    $telefono= $_POST['telefono'];
    $id_ciudad= $_POST['id_ciudad'];

    error_log("hola");

    echo insertarUsuario($nombre, $correo, $contrasena, $telefono, $id_ciudad);
?>