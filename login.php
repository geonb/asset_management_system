<?php
	include("config/configure.inc.php");
	include("config/function.inc.php");

	session_start();

	$user = file_get_contents(CISLOGIN.'?u='.$_GET['u'].'&h='.$_GET['h']);
	$user = unserialize($user);

	if(is_object($user)) {
		foreach ($user as $key=>$val) $_SESSION[$key] = $val;
		header("Location: accUser.php");
	}
	else {
		header("Location: index.php?message='login fehlgeschlagen'");
	}
?>