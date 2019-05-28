$(document).ready(function(){
    cargarCiudadSelect();
    $("#btn-enviar").click(function() {
        enviar();
    });
});

function cargarCiudadSelect() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("cargando las ciudades");
            $("#ciudades-div").html(this.responseText);
            console.log(this.response);
        }
    };
    xhttp.open("GET", "model/select_ciudad.php");
    xhttp.send();
}

function enviar() {
    if (verificarEntradas()) {
        $.post("model/registro_cliente.php",{
            nombre: $("#nombre").val().trim(),
            correo: $("#correo").val().trim(),
            contrasena: $("#contrasena").val(),
            telefono: $("#telefono").val().trim(),
            id_ciudad: $("#ciudad").val()
        },
        function (data, status){
            if (data !== "1") {
                $("#error-general").html(data);
                $("#error-general").removeClass("hidden");
            } else {
                window.location = "index.html";
                $("#btn-enviar").prop("disabled",true);
            }
        })
    }

}

function verificarEntradas() {
    var nombre = $("#nombre").val().trim();
    var idCiudad = $("#ciudad").val();
    var correo = $("#correo").val().trim();
    var contrasena = $('#contrasena').val();
    var confirmar = $('#confirmar-contrasena').val();
    var telefono = $('#telefono').val().trim();
    var terminos = $('#terminos').is(':checked');

    var continuar = true;

    if (!verificarNombre(nombre)) {
        $("#error-nombre").removeClass("hidden");
        continuar = false;
    } else {
        $("#error-nombre").addClass("hidden");
    }

    if (!verificarCorreo(correo)) {
        $("#error-correo").removeClass("hidden");
        continuar = false;
    } else {
        $("#error-correo").addClass("hidden");
    }

    if (!verificarContrasena(contrasena)) {
        $("#error-contrasena").removeClass("hidden");
        continuar = false;
    } else {
        $("#error-contrasena").addClass("hidden");
    }

    if (!verificarConfirmar(contrasena, confirmar)) {
        $("#error-confirmar").removeClass("hidden");
        continuar = false;
    } else {
        $("#error-confirmar").addClass("hidden");
    }

    if (!verificarTelefono(telefono)) {
        $("#error-telefono").removeClass("hidden");
        continuar = false;
    } else {
        $("#error-telefono").addClass("hidden");
    }

    if (!terminos) {
        $("#error-terminos").removeClass("hidden");
        continuar = false;
    } else {
        $("#error-terminos").addClass("hidden");
    }

    return continuar;
}

function verificarNombre(nombre) {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚ ]*$/;
    return regex.test(nombre) && nombre.length > 0;
}

function verificarCorreo(correo) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(correo);
}

function verificarContrasena(contrasena){
    var regex = /^[a-zA-Z0-9., ]*$/;
    return regex.test(contrasena) && contrasena.length <=20 && contrasena.length >= 6;
}

function verificarConfirmar(contrasena, confirmar){
    return contrasena === confirmar;
}

function verificarTelefono(telefono){
    var regex = /^[0-9]*$/;
    return regex.test(telefono) && telefono.length === 10;
}