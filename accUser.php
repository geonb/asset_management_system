<?php
	session_start();
// nur fürs Testing
$_SESSION['user'] = 'dm131520';
// nur fürs Testing


	if(!$_SESSION['user']) header("Location: index.php?message=Zugriff nicht erlaubt");
?>
 <html>
   <head>
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title> Phaidra Schnittstelle </title>
<link rel="stylesheet" type="text/css" href="styles/explorer.css">
<script type="text/javascript" src="scripts/explorer.js"></script>
<script type="text/javascript" src="scripts/workbench.js"></script>
<script type="text/javascript" src="scripts/fieldDefinition.js"></script>
<script src="scripts/jQuery_1_9_1.js"></script>
</head>
<body onload="init_wb();">
<div id='menu_wb' class='spalte'>
<div>
<input type='button' id='wb_m' class='show_wb' value='Projektliste' title='zeigt eine Liste der erstellten Projekte' onMouseover='func_sWb()' onMouseout='func_cWb()'></input> 
</div> 
<div>
<input type='button' id='wb_m' class='add_wb' value='neues Projekt' title='neues Projekt anlegen' onclick='func_aWb()'></input> 		      	
</div>
<div id='nav_wb' class='nav_cl'>
</div>
</div>
<div id='new_bg'>
<div id='nav_nb'>
</div>
</div>
<div id="wrapper" class="rechts">
	<div id="main">
	<div id="links" class="spalte">
	</div>
	<div id="mitte" class="spalte">
	
	</div>
	</div>
</div>
</body>
</html>
