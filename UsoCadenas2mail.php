<?php

if(isset($_POST['submit'])){
    $para="";
    $asunto="";
    $nombre="";
    $correo="";
    $mensaje="";
    $headers="";
    $headers .="";
    $cuerpo="";
    $bool="Enviado por: $nombre\n E-mail= $correo\n Mensaje: $mensaje\n";
} else{
    echo "Algo ocurrio mal..."
}
?>