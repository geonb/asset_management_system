<?php

#SAX Parser fuer Suchergebnisse von pfindObjects

class PFindObjectsSAXHandler  {
	
	private $parser;
	private $hitTotal;
	private $in_fields;
	private $results;
	private $current_object;

	#Konstruktor fuer den SAX Parser	
	public function __construct($data,$fields,&$results,$permissions) 
	{
		$this->permissions = $permissions;
		$this->fields = $fields; 
		$this->results = &$results; #result ist eine Referenz! (performance)
		$this->current_object = ARRAY();
		#Parser
        	$this->parser = xml_parser_create();
        	xml_set_object($this->parser, $this);
        	xml_parser_set_option($this->parser, XML_OPTION_CASE_FOLDING, false);
        	xml_set_element_handler($this->parser, "tag_open", "tag_close");
        	xml_set_character_data_handler($this->parser, "cdata");
		xml_parse($this->parser, $data);

		unset($this->in_fields);
		return $this;
	}

	#Anzahl der Suchtreffer retournieren
	public function get_hitTotal()
	{
		return $this->hitTotal;
	}

	#Die ueblichen SAX Funktionen

	private function tag_open($parser, $tag, $attributes) 
	{
		if($tag == 'gfindObjects')
		{
			$this->hitTotal = $attributes['hitTotal'];
		}
		else if($tag == 'object')
		{
			$this->current_object = ARRAY();
		}
		else if($tag == 'field')
		{
			if(in_array($attributes['name'],$this->fields)){$this->in_fields = $attributes['name'];}
		}
		else if($tag == 'permissions')
		{
			$this->in_fields = 'permissions';
		}
    	}

	private function cdata($parser, $cdata) 
	{
		if(isset($this->in_fields))
		{
			if(isset($this->current_object[$this->in_fields]) && $this->in_fields == 'uw.classification.taxonpath.taxon')
				$this->current_object[$this->in_fields] .= '|'.$cdata;
			else if(isset($this->current_object[$this->in_fields]))
				$this->current_object[$this->in_fields] .= $cdata;
			else
				$this->current_object[$this->in_fields] = $cdata; 
		}
    	}

	private function tag_close($parser, $tag) 
	{
		if($tag == 'field' || $tag == 'permissions')
		{
			unset($this->in_fields);
		}
		else if($tag == 'object')
		{
			if($this->permissions != '')
			{
				if(preg_match('/'.$this->permissions.'/',$this->current_object['permissions']))
					array_push($this->results,$this->current_object);
			}
			else
				array_push($this->results,$this->current_object);
		}
	}
}
?>
