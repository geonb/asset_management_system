<?php

include("config/configure.inc.php");
include("config/function.inc.php");

$name = $_POST['name'];
$passwort = $_POST['passwort'];
$passwort2 = $_POST['passwort2'];



$checkUsername = checkUsername($name, PASS_PATH);

if($checkUsername) {
	header("Location: index.php?message=Username bereits vorhanden");
	exit();
}

$register = register($name, $passwort, $passwort2, PASS_PATH);

if($register) {
	header("Location: accUser.php?message=Erfolgreich Registriert");	
}
else {
	header("Location: index.php?message=Registrierung fehlgeschlagen");	
}

?>
