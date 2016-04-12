<?php
	// Definition of Functions
	session_start();
	function checkLogin($user, $password, $passfile) {
			$dom = new DOMDocument();
			$dom->load($passfile); // Variablenname Makro keine '', großschreiben
		
			$namen = $dom->getElementsByTagName('user'); // getElementById() 1 Element
		foreach($namen as $i) {
			if($i->nodeValue == $user && $i->nextSibling->nodeValue == $password) { // alle Tagcontents in $i UND next Element in Tagcontainer
				return true;
			}
		} return false;
	}
	function check() {
		if(!$_SESSION['user']) header("Location: index.php?message=Zugriff nicht erlaubt");
	}
	function register($user, $pw, $pw2, $xml) {
	if($pw != $pw2) return false;
	$dom = new DomDocument();
	$dom->load($xml);
	
	$item = $dom->createElement("item");
	$usertxt = $dom->createElement("user");
	$passwort = $dom->createElement("pwd");
	
	$text_usr = $dom->createTextNode($user);
    $text_pwd = $dom->createTextNode($pw);

	$usertxt->appendChild($text_usr);
	$passwort->appendChild($text_pwd);
	
	$item->appendChild($usertxt);
	$item->appendChild($passwort);
	
	$dom->firstChild->appendChild($item);

	$dom->save($xml);
	return true;
	header("Location: forum.php");
	}
	function checkUsername($user, $xml) {

	$dom = new DOMDocument();
	$dom->load($xml);
	
	
	$namen = $dom->getElementsByTagName('user');

	foreach($namen as $i) {
		if($i->nodeValue == $user) {
		return true;
		}
	}
	return false;
	

}
	function chk_type($xml) {
		$dom = new DOMDocument();
		$dom->load($xml);
			
		$cnt_types[0] = $dom->getElementsByTagName('pdf');
		$cnt_types[1] = $dom->getElementsByTagName('txt');
		$cnt_types[2] = $dom->getElementsByTagName('dia');
		$cnt_types[2] = $dom->getElementsByTagName('ref');
		$cnt_types[2] = $dom->getElementsByTagName('doc');
		
		return $cnt_types;
	}
?>
