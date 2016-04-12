<?php
	session_start();
	if(!$_SESSION['user']) header("Location: index.php?message=Zugriff nicht erlaubt");
	
	if (!isset($_GET['id'])) { 
	    $_GET['id'] = 1;                 // Wenn id nicht gesetzt, auf 1 setzen 
	} else { 
	    $_GET['id'] = (int) $_GET['id']; // Ansonsten von String nach Integer casten 
	} 	

   // Funktionen
   static $rootpath = "C:/xampp/htdocs/Phaidrahss";
   $res = 0.0;
   function cgi_param ($feld, $default) {
      $var = $default;
      $rmeth = $_SERVER['REQUEST_METHOD'];
      if ($rmeth == "GET") {
         if (isset ($_GET[$feld]) && $_GET[$feld] != "") {
            $var = $_GET[$feld];
         }
      } elseif ($rmeth == "POST") {
         if (isset ($_POST[$feld]) && $_POST[$feld] != "") {
            $var = $_POST[$feld];
         }
      }
      return $var;
   }
   
	include("config/configure.inc.php");

   // Verbindung zum MySQL-Server herstellen
   $connID = mysql_connect (DB_HOST, DB_USER, DB_PASSWORD);
   // Datenbank wählen
   $link = '';
   mysql_select_db (DB_NAME, $connID); 

/* check connection */
    if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
   // Datenbank w�hle
   // Steuerparameter auslesen
   $user = $_SESSION['user'];
   $list = (isset($_GET['list'])) ? $_GET['list'] : false;
   $save = (isset($_GET['save'])) ? $_GET['save'] : false;
   //todo: delete '$delete'     $delete = cgi_param('delete', 0); // del
   $val = (isset($_GET['val'])) ? $_GET['val'] : false;
   $dwnl = (isset($_GET['dwnl'])) ? $_GET['dwnl'] : false;;

      /* if(isset($delete)) {  
   	 mysql_query("DELETE FROM phaidra_repo WHERE cmpid='$delete'");
      } */  
      
      
	function echoResultAsJson($result) {
	   
		if(mysql_num_rows($result) > 0){ //implies not 0
			$dataArr = array();
			while($data = mysql_fetch_array($result, MYSQL_ASSOC)) {
				$row = Array();
				foreach ($data as $key => $value) {
					$row[$key] = $value;
				} 
				
				array_push($dataArr, $row);
			} 
			echo json_encode($dataArr); 
				
	   	} else {
			echo "{error:'no results were found'}";
		}
	}
   
   
   
   if($dwnl == 'download') {
   	if($val == 0) {
   	if (!$id = $_GET['id']) echo 'id fehlt';
        $result = mysql_query ("SELECT * FROM phaidra_repo WHERE cmpid=$id");
        if(mysql_num_rows($result) > 0){ //implies not 0
	   while($data = mysql_fetch_array($result)) {
	          $dhashed = $data['hashed'];
	          $typid = $data['typid'];
	          $filename = $dhashed.'.'.$typid;
	          $downloadfile = FILEPATH.$filename;
	            //echo $downloadfile;
		    if(file_exists($downloadfile)) {

				@header('Last-Modified: '. gmdate('D, d M Y H:i:s', filemtime($downloadfile)) .' GMT');
				@Header('Pragma: ');
				@Header('Cache-Control: ');
				@Header("Content-Disposition: attachment; filename=$filename");
				@header('Content-Length: '.filesize($downloadfile));
				@header("Content-Type:".mimeinfo('type',$typid));
				
				echo file_get_contents($downloadfile);
				exit;
		  
		    }
		}
	  }
   	}else {
	    echo "no results were found";
	   }
   	if($val == 1) {
   	if(!$hashed = $_POST['hashed']) echo 'no file';
   		
   	}	
   } 
   
   if($list == 'workbenches') {
      echoResultAsJson(mysql_query ("SELECT DISTINCT workbench, wbName FROM phaidra_repo WHERE userid='$user' ORDER BY cmpid DESC"));  
   }
   
   if($list == 'components') {
   	$wb_chooser = $_GET['wb_ch'];
   	$result = mysql_query ("SELECT * FROM phaidra_repo WHERE workbench='$wb_chooser' AND userid='$user' ORDER BY cmpid DESC");
   	echoResultAsJson($result);
   }
   if ($list == 'finalRelStatus') {
   	$wb_chooser = $_GET['wb_ch'];
   	$cmpid = $_GET['id_chk'];
   	$boolfree = $_GET['permit'];
   	$result = mysql_query ("UPDATE phaidra_repo SET boolfree='$boolfree' WHERE (workbench='$wb_chooser' AND userid='$user' AND cmpid='$cmpid')");
   } 
   if ($list == 'finalUpdate') {
	   		if(!$cmpid = $_GET['id_chk']) echo 'no cmpid';
                        if (!$user = $_SESSION['user']) echo 'id_user fehlt';
                        if (!$title = $_POST['title']) echo 'id_title fehlt';
                        else {
                        	      $boolfree = $_POST['permit'];
				       $m_data =  mysql_real_escape_string($_POST['m_data']);
		                      $wbName = mysql_real_escape_string ($_POST['wbName']);
				      $workbench = mysql_real_escape_string ($_GET['wb_ch']);			      
				      $comment = mysql_real_escape_string ($_POST['comment']);
				      $title = mysql_real_escape_string ($_POST['title']);
				      $uploaded = true;
				      $query = "UPDATE phaidra_repo SET `titel`='$title', `comment`='$comment', `boolfree`='$boolfree', `m_data`='$m_data' WHERE (workbench='$workbench' AND userid='$user' AND cmpid='$cmpid')";
				      $result = mysql_query ($query, $connID);
					echo $query;
			echo mysql_errno($connID) . ": " . mysql_error($connID) . "\n";
			$return = true;
	                }
   }
   if ($save == 'storedoc') {
	   // Datatypes various implementation switch - XMLMetadata - cmp
	   /*	
		Bild 		(.tiff, .jpg)
		Video 		(.avi,.mpeg2)
		Audio		(.wav, .mp3)
		Dokumente	(.pdf, .tei ...)
	   */	
		if(!$wbName = $_POST['wbName']) echo 'no workbench';
		if(!$workbench = $_POST['workbench']) echo 'no workbench';
		if (!$user = $_SESSION['user']) echo 'id_user fehlt';
		if (!$title = $_POST['title']) echo 'id_title fehlt';
		elseif (!isset($_FILES) || !isset($_FILES['id_fileup']) || empty($_FILES['id_fileup'])) echo 'Dokument fehlt';
		elseif (substr(strrchr($_FILES['id_fileup']['name'], '.'), 1) != ('pdf' || 'avi' || 'tiff' || 'jpg' || 'mpeg' || 'wav' || 'mpeg3')) echo 'Datei nicht unterstützt';
		else {
			$hashed = hash_file('md5', $_FILES['id_fileup']['tmp_name']);
			$res = mysql_query("SELECT workbench FROM phaidra_repo WHERE userid=$user AND hashed='$hashed'");
			if (($num_row = mysql_num_rows($res)) == 0) { 
				$boolfree = $_POST['permit'];
				$extension = end(explode(".", $_FILES['id_fileup']['name']));
				var_dump($_POST['m_data']);
				// require_once('API.inc');
				// $PhaidraAPI = new API("https://phaidra.univie.ac.at","georgg9","yhEd7RFg");
				// if not hashed in Db user - is not in phaidra
				//$PhaidraAPI->search("fgs.ownerId:",ARRAY('PID','fgs.ownerId'),1,50);
				//echo "<h1>".$resultObject->totalHits."</h1><br/>";
				//foreach ($resultObject->searchResult as $object)
				// {
				//echo "PID: ".$object{'PID'}." Owner: ".$object{'fgs.ownerId'}."<br/>";
			}
			$m_data =  mysql_real_escape_string($_POST['m_data']);
			$wbName = mysql_real_escape_string ($_POST['wbName']);
			$workbench = mysql_real_escape_string ($_POST['workbench']);			      
			$time = mysql_real_escape_string ($_POST['time']);
			$typid = mysql_real_escape_string ($extension);
			$comment = mysql_real_escape_string ($_POST['comment']);
			$filename = mysql_real_escape_string ($_FILES['id_fileup']['name']);
			$uploaded = true;
			
			$ref = mysql_query("SELECT * FROM phaidra_repo WHERE hashed='$hashed'");
			if (($num_ref = mysql_num_rows($ref)) == 0) { 	      
				move_uploaded_file($_FILES['id_fileup']['tmp_name'], FILEPATH.$hashed.'.'.$extension);
			}
			$result = mysql_query ("INSERT INTO phaidra_repo (wbName, workbench, userid, typid, titel, filename, comment, timestamp, boolfree, hashed, uploaded, m_data) VALUES (\"$wbName\",\"$workbench\",\"$user\", \"$typid\", \"$title\", \"$filename\", \"$comment\", \"$time\",\"$boolfree\", \"$hashed\", \"$uploaded\", \"$m_data\")");
			$return = true;
		}
	}
	
	
	function get_mimetypes_array() {
    return array (
        'xxx'  => array ('type'=>'document/unknown', 'icon'=>'unknown.gif'),
        '3gp'  => array ('type'=>'video/quicktime', 'icon'=>'video.gif'),
        'ai'   => array ('type'=>'application/postscript', 'icon'=>'image.gif'),
        'aif'  => array ('type'=>'audio/x-aiff', 'icon'=>'audio.gif'),
        'aiff' => array ('type'=>'audio/x-aiff', 'icon'=>'audio.gif'),
        'aifc' => array ('type'=>'audio/x-aiff', 'icon'=>'audio.gif'),
        'applescript'  => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'asc'  => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'asm'  => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'au'   => array ('type'=>'audio/au', 'icon'=>'audio.gif'),
        'avi'  => array ('type'=>'video/x-ms-wm', 'icon'=>'avi.gif'),
        'bmp'  => array ('type'=>'image/bmp', 'icon'=>'image.gif'),
        'c'    => array ('type'=>'text/plain', 'icon'=>'c.gif'),
        'cct'  => array ('type'=>'shockwave/director', 'icon'=>'flash.gif'),
        'cpp'  => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'cs'   => array ('type'=>'application/x-csh', 'icon'=>'text.gif'),
        'css'  => array ('type'=>'text/css', 'icon'=>'text.gif'),
        'csv'  => array ('type'=>'text/csv', 'icon'=>'excel.gif'),
        'dv'   => array ('type'=>'video/x-dv', 'icon'=>'video.gif'),
        'dmg'  => array ('type'=>'application/octet-stream', 'icon'=>'dmg.gif'),

        'doc'  => array ('type'=>'application/msword', 'icon'=>'word.gif'),
        'docx' => array ('type'=>'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'icon'=>'docx.gif'),
        'docm' => array ('type'=>'application/vnd.ms-word.document.macroEnabled.12', 'icon'=>'docm.gif'),
        'dotx' => array ('type'=>'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'icon'=>'dotx.gif'),
        'dotm' => array ('type'=>'application/vnd.ms-word.template.macroEnabled.12', 'icon'=>'dotm.gif'),

        'dcr'  => array ('type'=>'application/x-director', 'icon'=>'flash.gif'),
        'dif'  => array ('type'=>'video/x-dv', 'icon'=>'video.gif'),
        'dir'  => array ('type'=>'application/x-director', 'icon'=>'flash.gif'),
        'dxr'  => array ('type'=>'application/x-director', 'icon'=>'flash.gif'),
        'eps'  => array ('type'=>'application/postscript', 'icon'=>'pdf.gif'),
        'fdf'  => array ('type'=>'application/pdf', 'icon'=>'pdf.gif'),
        'flv'  => array ('type'=>'video/x-flv', 'icon'=>'video.gif'),
        'gif'  => array ('type'=>'image/gif', 'icon'=>'image.gif'),
        'gtar' => array ('type'=>'application/x-gtar', 'icon'=>'zip.gif'),
        'tgz'  => array ('type'=>'application/g-zip', 'icon'=>'zip.gif'),
        'gz'   => array ('type'=>'application/g-zip', 'icon'=>'zip.gif'),
        'gzip' => array ('type'=>'application/g-zip', 'icon'=>'zip.gif'),
        'h'    => array ('type'=>'text/plain', 'icon'=>'h.gif'),
        'hpp'  => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'hqx'  => array ('type'=>'application/mac-binhex40', 'icon'=>'zip.gif'),
        'htc'  => array ('type'=>'text/x-component', 'icon'=>'text.gif'),
        'html' => array ('type'=>'text/html', 'icon'=>'html.gif'),
        'xhtml'=> array ('type'=>'application/xhtml+xml', 'icon'=>'html.gif'),
        'htm'  => array ('type'=>'text/html', 'icon'=>'html.gif'),
        'ico'  => array ('type'=>'image/vnd.microsoft.icon', 'icon'=>'image.gif'),
        'ics'  => array ('type'=>'text/calendar', 'icon'=>'text.gif'),
        'isf'  => array ('type'=>'application/inspiration', 'icon'=>'isf.gif'),
        'ist'  => array ('type'=>'application/inspiration.template', 'icon'=>'isf.gif'),
        'java' => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'jcb'  => array ('type'=>'text/xml', 'icon'=>'jcb.gif'),
        'jcl'  => array ('type'=>'text/xml', 'icon'=>'jcl.gif'),
        'jcw'  => array ('type'=>'text/xml', 'icon'=>'jcw.gif'),
        'jmt'  => array ('type'=>'text/xml', 'icon'=>'jmt.gif'),
        'jmx'  => array ('type'=>'text/xml', 'icon'=>'jmx.gif'),
        'jpe'  => array ('type'=>'image/jpeg', 'icon'=>'image.gif'),
        'jpeg' => array ('type'=>'image/jpeg', 'icon'=>'image.gif'),
        'jpg'  => array ('type'=>'image/jpeg', 'icon'=>'image.gif'),
        'jqz'  => array ('type'=>'text/xml', 'icon'=>'jqz.gif'),
        'js'   => array ('type'=>'application/x-javascript', 'icon'=>'text.gif'),
        'latex'=> array ('type'=>'application/x-latex', 'icon'=>'text.gif'),
        'm'    => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'mov'  => array ('type'=>'video/quicktime', 'icon'=>'video.gif'),
        'movie'=> array ('type'=>'video/x-sgi-movie', 'icon'=>'video.gif'),
        'm3u'  => array ('type'=>'audio/x-mpegurl', 'icon'=>'audio.gif'),
        'mp3'  => array ('type'=>'audio/mp3', 'icon'=>'audio.gif'),
        'mp4'  => array ('type'=>'video/mp4', 'icon'=>'video.gif'),
        'mpeg' => array ('type'=>'video/mpeg', 'icon'=>'video.gif'),
        'mpe'  => array ('type'=>'video/mpeg', 'icon'=>'video.gif'),
        'mpg'  => array ('type'=>'video/mpeg', 'icon'=>'video.gif'),
        'msi'  => array ('type'=>'application/octet-stream', 'icon'=>'msi.gif'),

        'odt'  => array ('type'=>'application/vnd.oasis.opendocument.text', 'icon'=>'odt.gif'),
        'ott'  => array ('type'=>'application/vnd.oasis.opendocument.text-template', 'icon'=>'odt.gif'),
        'oth'  => array ('type'=>'application/vnd.oasis.opendocument.text-web', 'icon'=>'odt.gif'),
        'odm'  => array ('type'=>'application/vnd.oasis.opendocument.text-master', 'icon'=>'odm.gif'),
        'odg'  => array ('type'=>'application/vnd.oasis.opendocument.graphics', 'icon'=>'odg.gif'),
        'otg'  => array ('type'=>'application/vnd.oasis.opendocument.graphics-template', 'icon'=>'odg.gif'),
        'odp'  => array ('type'=>'application/vnd.oasis.opendocument.presentation', 'icon'=>'odp.gif'),
        'otp'  => array ('type'=>'application/vnd.oasis.opendocument.presentation-template', 'icon'=>'odp.gif'),
        'ods'  => array ('type'=>'application/vnd.oasis.opendocument.spreadsheet', 'icon'=>'ods.gif'),
        'ots'  => array ('type'=>'application/vnd.oasis.opendocument.spreadsheet-template', 'icon'=>'ods.gif'),
        'odc'  => array ('type'=>'application/vnd.oasis.opendocument.chart', 'icon'=>'odc.gif'),
        'odf'  => array ('type'=>'application/vnd.oasis.opendocument.formula', 'icon'=>'odf.gif'),
        'odb'  => array ('type'=>'application/vnd.oasis.opendocument.database', 'icon'=>'odb.gif'),
        'odi'  => array ('type'=>'application/vnd.oasis.opendocument.image', 'icon'=>'odi.gif'),

        'pct'  => array ('type'=>'image/pict', 'icon'=>'image.gif'),
        'pdf'  => array ('type'=>'application/pdf', 'icon'=>'pdf.gif'),
        'php'  => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'pic'  => array ('type'=>'image/pict', 'icon'=>'image.gif'),
        'pict' => array ('type'=>'image/pict', 'icon'=>'image.gif'),
        'png'  => array ('type'=>'image/png', 'icon'=>'image.gif'),
        'php'  => array ('type'=>'text/plain', 'icon'=>'php.gif'),
        'pps'  => array ('type'=>'application/vnd.ms-powerpoint', 'icon'=>'powerpoint.gif'),
        'ppt'  => array ('type'=>'application/vnd.ms-powerpoint', 'icon'=>'powerpoint.gif'),
        'pptx' => array ('type'=>'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'icon'=>'pptx.gif'),
        'pptm' => array ('type'=>'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'icon'=>'pptm.gif'),
        'potx' => array ('type'=>'application/vnd.openxmlformats-officedocument.presentationml.template', 'icon'=>'potx.gif'),
        'potm' => array ('type'=>'application/vnd.ms-powerpoint.template.macroEnabled.12', 'icon'=>'potm.gif'),
        'ppam' => array ('type'=>'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'icon'=>'ppam.gif'),
        'ppsx' => array ('type'=>'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'icon'=>'ppsx.gif'),
        'ppsm' => array ('type'=>'application/vnd.ms-powerpoint.slideshow.macroEnabled.12', 'icon'=>'ppsm.gif'),

        'ps'   => array ('type'=>'application/postscript', 'icon'=>'pdf.gif'),
        'qt'   => array ('type'=>'video/quicktime', 'icon'=>'video.gif'),
        'ra'   => array ('type'=>'audio/x-realaudio-plugin', 'icon'=>'audio.gif'),
        'ram'  => array ('type'=>'audio/x-pn-realaudio-plugin', 'icon'=>'audio.gif'),
        'rar'  => array ('type'=>'application/rar', 'icon'=>'rar.gif'),
        'rhb'  => array ('type'=>'text/xml', 'icon'=>'xml.gif'),
        'rm'   => array ('type'=>'audio/x-pn-realaudio-plugin', 'icon'=>'audio.gif'),
        'rtf'  => array ('type'=>'text/rtf', 'icon'=>'text.gif'),
        'rtx'  => array ('type'=>'text/richtext', 'icon'=>'text.gif'),
        'sh'   => array ('type'=>'application/x-sh', 'icon'=>'text.gif'),
        'sit'  => array ('type'=>'application/x-stuffit', 'icon'=>'zip.gif'),
        'smi'  => array ('type'=>'application/smil', 'icon'=>'text.gif'),
        'smil' => array ('type'=>'application/smil', 'icon'=>'text.gif'),
        'sqt'  => array ('type'=>'text/xml', 'icon'=>'xml.gif'),
        'svg'  => array ('type'=>'image/svg+xml', 'icon'=>'image.gif'),
        'svgz' => array ('type'=>'image/svg+xml', 'icon'=>'image.gif'),
        'swa'  => array ('type'=>'application/x-director', 'icon'=>'flash.gif'),
        'swf'  => array ('type'=>'application/x-shockwave-flash', 'icon'=>'flash.gif'),
        'swfl' => array ('type'=>'application/x-shockwave-flash', 'icon'=>'flash.gif'),

        'sxw'  => array ('type'=>'application/vnd.sun.xml.writer', 'icon'=>'odt.gif'),
        'stw'  => array ('type'=>'application/vnd.sun.xml.writer.template', 'icon'=>'odt.gif'),
        'sxc'  => array ('type'=>'application/vnd.sun.xml.calc', 'icon'=>'odt.gif'),
        'stc'  => array ('type'=>'application/vnd.sun.xml.calc.template', 'icon'=>'odt.gif'),
        'sxd'  => array ('type'=>'application/vnd.sun.xml.draw', 'icon'=>'odt.gif'),
        'std'  => array ('type'=>'application/vnd.sun.xml.draw.template', 'icon'=>'odt.gif'),
        'sxi'  => array ('type'=>'application/vnd.sun.xml.impress', 'icon'=>'odt.gif'),
        'sti'  => array ('type'=>'application/vnd.sun.xml.impress.template', 'icon'=>'odt.gif'),
        'sxg'  => array ('type'=>'application/vnd.sun.xml.writer.global', 'icon'=>'odt.gif'),
        'sxm'  => array ('type'=>'application/vnd.sun.xml.math', 'icon'=>'odt.gif'),
        'crt'  => array ('type'=>'text/plain', 'icon'=>'key.png'),
        'tar'  => array ('type'=>'application/x-tar', 'icon'=>'zip.gif'),
        'tex'  => array ('type'=>'application/x-tex', 'icon'=>'tex.gif'),
        'tif'  => array ('type'=>'image/tiff', 'icon'=>'image.gif'),
        'tiff' => array ('type'=>'image/tiff', 'icon'=>'image.gif'),
        'tex'  => array ('type'=>'application/x-tex', 'icon'=>'text.gif'),
        'texi' => array ('type'=>'application/x-texinfo', 'icon'=>'text.gif'),
        'texinfo'  => array ('type'=>'application/x-texinfo', 'icon'=>'text.gif'),
        'tsv'  => array ('type'=>'text/tab-separated-values', 'icon'=>'text.gif'),
        'txt'  => array ('type'=>'text/plain', 'icon'=>'text.gif'),
        'wav'  => array ('type'=>'audio/wav', 'icon'=>'audio.gif'),
        'wmv'  => array ('type'=>'video/x-ms-wmv', 'icon'=>'avi.gif'),
        'asf'  => array ('type'=>'video/x-ms-asf', 'icon'=>'avi.gif'),
        'xdp'  => array ('type'=>'application/pdf', 'icon'=>'pdf.gif'),
        'xfd'  => array ('type'=>'application/pdf', 'icon'=>'pdf.gif'),
        'xfdf' => array ('type'=>'application/pdf', 'icon'=>'pdf.gif'),

        'xls'  => array ('type'=>'application/vnd.ms-excel', 'icon'=>'excel.gif'),
        'xlsx' => array ('type'=>'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'icon'=>'xlsx.gif'),
        'xlsm' => array ('type'=>'application/vnd.ms-excel.sheet.macroEnabled.12', 'icon'=>'xlsm.gif'),
        'xltx' => array ('type'=>'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'icon'=>'xltx.gif'),
        'xltm' => array ('type'=>'application/vnd.ms-excel.template.macroEnabled.12', 'icon'=>'xltm.gif'),
        'xlsb' => array ('type'=>'application/vnd.ms-excel.sheet.binary.macroEnabled.12', 'icon'=>'xlsb.gif'),
        'xlam' => array ('type'=>'application/vnd.ms-excel.addin.macroEnabled.12', 'icon'=>'xlam.gif'),

        'xml'  => array ('type'=>'application/xml', 'icon'=>'xml.gif'),
        'xsl'  => array ('type'=>'text/xml', 'icon'=>'xml.gif'),
        'zip'  => array ('type'=>'application/zip', 'icon'=>'zip.gif')
    );
}

/**
 * Obtains information about a filetype based on its extension. Will
 * use a default if no information is present about that particular
 * extension.
 * @param string $element Desired information (usually 'icon'
 *   for icon filename or 'type' for MIME type)
 * @param string $filename Filename we're looking up
 * @return string Requested piece of information from array
 */
function mimeinfo($element, $ext) {
    static $mimeinfo = null;
    if (is_null($mimeinfo)) $mimeinfo = get_mimetypes_array();
    if (isset($mimeinfo[$ext][$element])) return $mimeinfo[$ext][$element];
    else return $mimeinfo['xxx'][$element];   // By default
}	
?>
