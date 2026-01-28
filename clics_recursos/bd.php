<?php

// coneccion a BD via mysqli
function convosql_connect()
{
	// informacion del servidor de BD LOCAL
	$server = 'localhost';
  $usser  = 'root';
  $passw  = '';
  $baseDatos = 'recursos_convos';
	$connection = mysqli_connect($server,$usser,$passw,$baseDatos) or die("bd.php - Conexion fallida:".mysqli_connect_error());
	return $connection;

  // informacion del servidor
	/* $server = '10.3.22.38';
  $usser  = 'userconteo';
  $passw  = 'kk95eS820hfg3&7yhuj';
  $baseDatos = 'recursos_convos';
	$connection = mysqli_connect($server,$usser,$passw,$baseDatos) or die("bd.php - Conexion fallida:".mysqli_connect_error());
	return $connection; */
}

?>