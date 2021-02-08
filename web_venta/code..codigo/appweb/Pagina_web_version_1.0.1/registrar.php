<?php
//Recibir los datos almacenarlos en variables 
include 'conexion.php';
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];
$clave = $_POST["clave"];
$telefono = $_POST["telefono"];

//Consulta para insertar
$insertar = "INSERT INTO datos_usuario(nombre, apellidos, correo, usuario, clave, telefono) 
VALUES('$nombre', '$apellidos', '$correo', '$usuario','$clave','$telefono')";

//Ejecutar consulta

$resultado = mysqli_query($conexion, $insertar);
// en caso de fallo de consulta
if(!$resultado){
    echo 'Error al registrarse';
}else{
    echo 'Usuario registrado exitosamente';
}

//cerrar conexion
mysqli_close($conexion);




