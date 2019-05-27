$(document).ready(function(){
    cargarCiudadSelect();
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