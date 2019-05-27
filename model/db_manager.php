<?php
$servername = "localhost";
$username = "wwwplust_marcom";
$password = "contrasena";
$dbname = "wwwplust_Handy_Neighbor";

function sqlSelect($sql){

    global $servername, $username, $password, $dbname;

    // Create connection
    $conn = mysqli_connect( $servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $result = mysqli_query($conn, $sql);

    //Pasa de un objeto mysqli object a un array indexado y asociativo
    while( $row = mysqli_fetch_array($result,MYSQLI_BOTH) ){
        $rows[] = $row;
    }
    //----------------------------------------

    mysqli_close($conn);

    return( $rows );
}

function sqlInsert($sql){

    global $servername, $username, $password, $dbname;

    // Create connection
    $conn = mysqli_connect( $servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if( mysqli_query($conn, $sql) ){
        $retVal = true;
    }else{
        $retVal = false;
    }


    mysqli_close($conn);

    return( $retVal );
}

function sqlDelete($sql){

    global $servername, $username, $password, $dbname;

    // Create connection
    $conn = mysqli_connect( $servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if( mysqli_query($conn, $sql) ){
        $retVal = true;
    }else{
        $retVal = false;
    }


    mysqli_close($conn);

    return( $retVal );
}

?>