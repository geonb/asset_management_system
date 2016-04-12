<?php

#PHP API fuer Phaidra

#INFO: fuer die SOAP-Verbindung wird php_soap verwendet - muss eventuell installiert/aktiviert werden! 

require_once('API/PFindObjectsSAXHandler.inc');
class API
{
	private $baseurl;
	private $username;
	private $password;
	private $API;
	private $uploadurl;

	#Konstruktor
	#-> baseurl muss uebergeben werden!
	function __construct($baseurl,$username = 'georgg9',$password = 'yhEd7RFg')
	{
		if(!isset($baseurl) || $baseurl == ''){die ("PHAIDRA API ERROR: undefined baseurl");}
		$this->username = $username;
		$this->password = $password;
		$this->baseurl = $baseurl;
		#Phaidra API locations
		$this->API['apia_location'] = "https://$baseurl/fedora/services/access";
		$this->API['apia_uri'] = "https://$baseurl/fedora/services/access";
		$this->API['apim_location'] = "https://$baseurl/fedora/services/management";
		$this->API['apim_uri'] = "https://$baseurl/fedora/services/management";
		#Upload Pfad
		$this->uploadurl = "https://$baseurl/fedora/management/upload";
	}

	#Eine Soap Verbindung herstellen - Unterscheidung mit U/P und ohne
	private function getSoap($api)
	{
		if(!isset($api) || $api == ''){die("PHAIDRA API ERROR: undefined fedora API");}
	
		if($this->username != '')
		{
			$soap = new SoapClient(
 					null,
 					array	(
        					"location" => $this->API[$api.'_location'],
        					"uri" => $this->API[$api.'_uri'],
        					"soap_version" => SOAP_1_1,
        					"trace" => 1,	
        					"login" => $this->username,
        					"password" => $this->password
      						)
					);
		}
		else
		{
			$soap = new SoapClient(
 					null,
 					array	(
        					"location" => $this->API[$api.'_location'],
        					"uri" => $this->API[$api.'_uri'],
        					"soap_version" => SOAP_1_1,
        					"trace" => 1,	
      						)
					);
		}
		return $soap;
	}

	#pfindObjects Suche
	public function &search($query,$fieldlist = ARRAY('PID'),$PAGE = 0,$CHUNKSIZE = 0, $PERMISSIONS = '')
	{
		$pids = ARRAY();
		if(!isset($query) || trim($query) == '')
			die("ERROR: undefined search query\n");
		if(intval($CHUNKSIZE) < 0)
			die("ERROR: the results per page has to be > 1!\n");
		if(intval($PAGE) < 0)
			die("ERROR: page has to be > 0!\n");
		if(isset($PERMISSIONS))
			if($PERMISSIONS != '' && $PERMISSIONS != 'read' && $PERMISSIONS != 'write')
				die("ERROR: only read or write permissions allowed\n");
				
		
		$chunksize = 100;
		$from = 1;
		$userchunks = ARRAY();

		#falls der User selbst die Pagination festlegen will
		if(intval($CHUNKSIZE) > 0)
		{
			if($CHUNKSIZE < $chunksize)
			{
				$chunksize = intval($CHUNKSIZE);
				$userchunks[0] = $chunksize;
			}
			else
			{
				while($CHUNKSIZE > $chunksize)
				{
					array_push($userchunks,$chunksize);
					$CHUNKSIZE -= $chunksize;
				}
				array_push($userchunks,$CHUNKSIZE);
			}
			if(intval($PAGE) > 0)
				$from = ((intval($PAGE)-1) * intval($chunksize)) + 1;
		}
		elseif(intval($PAGE) > 0)
		{
			$from = ((intval($PAGE)-1) * $chunksize) + 1;
			$userchunks[0] = $chunksize;
		}
		$to = $chunksize + $from;

		if($query == '')
			return $pids;

		#Soap Verbindung einrichten
		$soap = $this->getSoap('apia');
		$done = false;
		$totalHits = -1;
		$calls = 0;

		#so lange noch was in der queue ist, diese abarbeiten
		while(!$done)
		{
			if(isset($userchunks[0]) && !isset($userchunks[$calls]))
				break;
			$calls++;
			$result= $soap->pfindObjects($query, $from, $chunksize, 0, 200, "Lucene");

			if(is_soap_fault($result))
				trigger_error("SOAP Fault: (faultcode: {$result->faultcode}, faultstring: {$result->faultstring})", E_USER_ERROR);
			else
				$saxhandler = new PFindObjectsSAXHandler($result,$fieldlist,$pids,$PERMISSIONS);

			$done = true;
			if($totalHits < 0)
				$totalHits = $saxhandler->get_hitTotal();
			if($to < $totalHits)
			{
				$done = false;
				$from += $chunksize;
				$to += $chunksize;
			}
		}
		#als Ergebnis wird ein Objekt zurueckgeliefert welches das Suchergebnis + der Anzal der Treffer enthaelt
		$return = (object) NULL;
		$return->searchResult = $pids;
		$return->totalHits = $totalHits;
		return $return;
	}
}

?>
