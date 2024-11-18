<?php
include 'conexion_be.php';

$nombre_completo = $_POST['nombre_completo'];
$correo = $_POST['correo'];
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

$query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena)
          VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')";
    
//no repetir
$ver_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo = '$correo' ");   
if(mysqli_num_rows($ver_correo) > 0){
    echo '
         <script>
              alert("este correo ya fue registrado, intenta con otro");
              window.location = "../index.html";
         </script>
    ';
    exit();
} 
//verificar un solo usuario
$ver_user = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario = '$usuario' ");   
if(mysqli_num_rows($ver_user) > 0){
    echo '
         <script>
              alert("este usuario ya fue registrado, intenta con otro");
              window.location = "../index.html";
         </script>
    ';
    exit();
} 

$ejecutar = mysqli_query($conexion, $query);  

if($ejecutar){
    echo '
        <script>
            alert("Usuario almacenado correctamente");
            window.location = "../index.html";
        </script>
    ';
}else{
    echo '
    <script>
        alert("Usuario no almacenado ");
        window.location = "../index.html";
    </script>
';
}

mysqli_close($conexion);
?>