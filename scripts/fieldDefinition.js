fieldDefinition = function() {
types = {
	string : {
		form : function (field) {
			var htmlBuffer = "<div><input name='title" + $('#title MITIRGENDEINERIDDRAN').length() + "'></input></div>";
			return htmlBuffer;
		}
	},
	
	name: {
		givenName : 'string',
		surname : 'string'
	},
	depEnum: {
		mt:'Medientechnik',
		is: 'IT-Security'
	}, // usw 
	lngEnum: {
		xx:'Nicht anwendbar',
		ab:'Abchasisch',
		aa:'Afar',
		af:'Afrikaans',
		ak:'Akan',
		sq:'Albanisch',
		am:'Amharisch',
		ar:'Arabisch',
		an:'Aragonesisch',
		hy:'Armenisch',
		az:'Aserbaidschanisch',
		as:'Assamesisch',
		av:'Avaric',
		ae:'Avestisch',
		ay:'Aymara',
		bm:'Bambara',
		ba:'Baschkirisch',
		eu:'Baskisch',
		be:'Belorussisch',
		bn:'Bengalisch',
		bh:'Biharisch',
		bi:'Bislamisch',
		bs:'Bosnisch',
		br:'Bretonisch',
		bg:'Bulgarisch',
		my:'Burmesisch',
		ch:'Chamorro',
		ny:'Chichewa; Chewa; Nyanja',
		zh:'Chinesisch',
		cr:'Cree',
		da:'D&auml;nisch',
		de:'Deutsch',
		dv:'Dhivehi',
		dz:'Dzongkha, Bhutani',
		en:'Englisch',
		eo:'Esperanto',
		et:'Estnisch',
		ee:'Ewe',
		fo:'Far&ouml;isch',
		fj:'Fiji',
		fi:'Finnisch',
		fr:'Franz&ouml;sisch',
		fy:'Friesisch',
		ff:'Fulah',
		gl:'Galizisch',
		lg:'Ganda',
		ka:'Georgisch',
		el:'Griechisch',
		gn:'Guarani',
		gu:'Gujaratisch',
		ht:'Haitianisch',
		ha:'Haussa',
		he:'Hebr&auml;isch',
		iw:'Hebr&auml;isch (veraltet, nun: he)',
		hz:'Herero',
		hi:'Hindi',
		nl:'Holl&auml;ndisch',
		io:'Ido',
		ig:'Igbo',
		id:'Indonesisch',
		in:'Indonesisch',
		ia:'Interlingua',
		ie:'Interlingue',
		iu:'Inuktitut',
		ik:'Inupiak',
		ga:'Irisch',
		is:'Isl&auml;ndisch',
		it:'Italienisch',
		ja:'Japanisch',
		jv:'Javanesisch',
		jw:'Javanisch',
		yi:'Jiddish (fr&uuml;her: ji)',
		ji:'Jiddish (veraltet, nun: yi)',
		yo:'Joruba',
		kl:'Kalaallisut (Gr&ouml;nland)',
		km:'Kambodschanisch',
		kn:'Kannada',
		kr:'Kanuri',
		kk:'Kasachisch',
		ks:'Kaschmirisch',
		ca:'Katalanisch',
		rw:'Kijarwanda',
		ki:'Kikuyu',
		lu:'Kiluba',
		cu:'Kirchenslawisch',
		ky:'Kirgisisch',
		rn:'Kirundisch',
		kv:'Komi',
		kg:'Kongo',
		ko:'Koreanisch',
		kw:'Kornisch',
		co:'Korsisch',
		hr:'Kroatisch',
		kj:'Kuanyama',
		ku:'Kurdisch',
		lo:'Laotisch',
		la:'Lateinisch',
		lv:'Lettisch',
		li:'Limburgisch',
		ln:'Lingala',
		lt:'Litauisch',
		lb:'Luxemburgisch',
		mg:'Malagasisch',
		ml:'Malajalam',
		ms:'Malaysisch',
		mt:'Maltesisch',
		gv:'Manx',
		mi:'Maorisch',
		mr:'Marathi',
		mh:'Marshallesische Sprache',
		mk:'Mazedonisch',
		mo:'Moldavisch',
		mn:'Mongolisch',
		na:'Nauruisch',
		nv:'Navajo',
		ng:'Ndonga',
		ne:'Nepalisch',
		nd:'Nord isiNdebele',
		se:'Nordsamisch',
		no:'Norwegisch',
		nb:'Norwegisch Bokmål',
		nn:'Norwegisch Nynorsk',
		oj:'Ojibwe',
		oc:'Okzitanisch',
		or:'Orija',
		om:'Oromo',
		os:'Ossetisch',
		pi:'Pali',
		ps:'Paschtu',
		fa:'Persisch',
		pl:'Polnisch',
		pt:'Portugiesisch',
		pa:'Pundjabisch',
		qu:'Quechua',
		rm:'R&auml;toromanisch',
		ro:'Rum&auml;nisch',
		ru:'Russisch',
		sm:'Samoanisch',
		sg:'Sango',
		sa:'Sanskrit',
		sc:'Sardische Sprache',
		nr:'Süd Ndebele',
		sn:'Schonisch',
		gd:'Schottisches G&auml;lisch',
		sv:'Schwedisch',
		sr:'Serbisch',
		sh:'Serbokroatisch (veraltet)',
		st:'Sesothisch',
		tn:'Sezuan',
		ii:'Sichuan Yi; Nuosu',
		si:'Singhalesisch',
		sk:'Slowakisch',
		sl:'Slowenisch',
		so:'Somalisch',
		es:'Spanisch',
		sw:'Suaheli',
		su:'Sudanesisch',
		ss:'Swasil&auml;ndisch',
		tg:'Tadschikisch',
		tl:'Tagalog',
		ty:'Tahitianisch',
		ta:'Tamilisch',
		tt:'Tatarisch',
		te:'Tegulu',
		th:'Thai',
		bo:'Tibetanisch',
		ti:'Tigrinja',
		to:'Tongaisch',
		cs:'Tschechisch',
		ce:'Tschetschenisch',
		cv:'Tschuwasch',
		ts:'Tsongaisch',
		tr:'T&uuml;rkisch',
		tk:'Turkmenisch',
		tw:'Twi',
		ug:'Uigur',
		uk:'Ukrainisch',
		hu:'Ungarisch',
		ur:'Urdu',
		uz:'Usbekisch',
		vi:'Vietnamesisch',
		vo:'Volap&uuml;k',
		cy:'Walisisch',
		wa:'Wallon',
		wo:'Wolof',
		xh:'Xhosa',
		za:'Zhuang',
		sd:'Zinti',
		zu:'Zulu'
	},
	
	rolEnum : {
		'63':'Andere',
		'1557100':'ArchitektIn',
		'1557101':'ArrangeurIn',
		'1552155':'AufbewahrerIn des Originals',
		'10868':'AuftraggeberIn/StifterIn',
		'1552095':'AutorIn des analogen Objekts',
		'46':'AutorIn des digitalen Objekts',
		'1557138':'AutorIn des Drehbuches',
		'1557103':'AutorIn von Begleitmaterial',
		'1557099':'BearbeiterIn',
		'1552167':'BetreuerIn',
		'1552168':'BeurteilerIn',
		'1557140':'BildhauerIn',
		'1557112':'ChoreographIn',
		'55':'DatenlieferantIn',
		'1552154':'DigitalisiererIn',
		'1557143" selected="':'DissertantIn',
		'1557136':'DissertationsbetreuerIn',
		'1557141':'DruckerIn',
		'52':'EditorIn',
		'1557134':'Eigent&uuml;merIn',
		'51':'EvaluatorIn',
		'60':'FachexpertIn',
		'1557137':'Film-EditorIn',
		'10869':'FotografIn',
		'53':'GrafikdesignerIn',
		'1557120':'GraveurIn',
		'47':'HerausgeberIn',
		'1557108':'HerausgeberIn einer Sammlung',
		'1557145':'HolzstecherIn',
		'1557126':'IlluminatorIn',
		'1557119':'IllustratorIn',
		'1557121':'IngenieurIn',
		'49':'InitiatorIn',
		'61':'InterpretIn',
		'1557123':'InterviewerIn',
		'1557122':'InterviewpartnerIn',
		'1557117':'Kameramann/frau',
		'1557116':'KapellmeisterIn',
		'1557107':'KartografIn',
		'1557109':'KomponistIn',
		'1557135':'KritikerIn',
		'10867':'K&uuml;nstlerIn',
		'1557115':'k&uuml;nstlerische/r LeiterIn',
		'1557125':'LibrettistIn',
		'1557105':'MetallstecherIn',
		'1557118':'musikalische/r LeiterIn',
		'1557127':'MusikerIn',
		'59':'P&auml;dagogische/r ExpertIn',
		'1557132':'ProduzentIn',
		'1557098':'RadiererIn',
		'1557106':'S&auml;ngerIn',
		'1557102':'SchauspielerIn',
		'1557129':'SongwriterIn',
		'1557133':'SounddesignerIn',
		'1557139':'SzenentexterIn',
		'56':'Technische/r Pr&uuml;ferIn',
		'54':'Technische/r UmsetzerIn',
		'58':'TextbearbeiterIn',
		'1557142':'TonmeisterIn',
		'1557124':'VerleiherIn des Diploms',
		'1557144':'VideoanbieterIn',
		'1557131':'VorbesitzerIn',
		'1557111':'WidersacherIn',
		'1557113':'Widmende/r',
		'1557114':'Widmungstr&auml;gerIn',
		'1557110':'wissenschaftliche BeraterIn',
		'1557128':'zugeschriebene/r AutorIn',
		'1557104':'zweifelhafte AutorIn'
	},
	stsEnum : {
		'0':'fertig',
		'1':'entwurf'
	}
}

formElements = {
	input : function(name,placeholder,tooltip) {
		return '<input name="'+name+'" placeholder="'+placeholder+'" title="'+tooltip+'"></input>';
	},
	
	dropdown : function(fieldName, idt, ed, id_chk) {
			if(ed === 1) {
				if(fieldName === 'status') {
					var htmlBuffer = '<select id="sel_sts'+ id_chk +'" class="md_m" name="+type+">';
					$.each(types[fields[fieldName].type], function(key,value) {
							htmlBuffer += '<option value="'+key+'">'+value+'</option>';
							return htmlBuffer + '</select>';
					});
					return htmlBuffer;
				}
				if(fieldName === 'language') {
					var htmlBuffer = '<select id="sel_lang'+ id_chk +'" class="md_l" name="+type+">';
					$.each(types[fields[fieldName].type], function(key,value) {
							htmlBuffer += '<option value="'+key+'">'+value+'</option>';
							return htmlBuffer + '</select>';
					});
					return htmlBuffer;
				}
				if(fieldName === 'role') {
					var htmlBuffer = '<select id="sel_role' + id_chk +'_'+ idt +'" class="md_l" name="+type+">';
					$.each(types[fields[fieldName].type], function(key,value) {
							htmlBuffer += '<option value="'+key+'">'+value+'</option>';
							return htmlBuffer + '</select>';
					});
					return htmlBuffer;
				}
			} else {
				if(fieldName === 'status') {
					var htmlBuffer = '<select id="sel_sts0" class="md_m" name="+type+">';
					$.each(types[fields[fieldName].type], function(key,value) {
							htmlBuffer += '<option value="'+key+'">'+value+'</option>';
							return htmlBuffer + '</select>';
					});
					return htmlBuffer;
				}
				if(fieldName === 'language') {
					var htmlBuffer = '<select id="sel_lang0" class="md_l" name="+type+">';
					$.each(types[fields[fieldName].type], function(key,value) {
							htmlBuffer += '<option value="'+key+'">'+value+'</option>';
							return htmlBuffer + '</select>';
					});
					return htmlBuffer;
				}
				if(fieldName === 'role') {
					var htmlBuffer = '<select id="sel_role0' + idt +'" class="md_l" name="+type+">';
					$.each(types[fields[fieldName].type], function(key,value) {
							htmlBuffer += '<option value="'+key+'">'+value+'</option>';
							return htmlBuffer + '</select>';
					});
					return htmlBuffer;
				}
			}
}

//generateFormHTML(fieldName) {
//	types[fieldName].form(fields[fieldName])
//}
}
fields = {
	title: {
		type:'string',
		mandatory: true,		
		repeatable: true,
		valArr:[]
	},
	cntrCode : {
		type:'string',
		mandatory: true
	},
	illustr : {
		type:'string',
		mandatory: true
	},
	angInh : {
		type:'string',
		mandatory: true
	},
	addid : {
		type:'string',
		mandatory: true
	},
	hsVerm : {
		type:'string',
		mandatory: true
	},
	nrSites: {
		type: 'string'
	},
	department: {
		type:'depEnum',
		mandatory: true,
	},
	language: {
		type: 'lngEnum',
		mandatory: true,
		keyVal: []
	},
	date : {
		type: 'string'
	},
	description: {
		type: 'text',
		mandatory: true		
	},
	creator : {
		type: 'boolean',
		mandatory: true	
	},
	status: {
		type: 'stsEnum',
		mandatory: true
	},
	role: {
		type:'rolEnum',
		mandatory: true,
	},
	roleVal: {
		type:'rolEnum',
		mandatory: true,
	},
	contributor: {
		type:'name',
		label:'AutorIn',
		repeatable:true,
		mandatory: true,
		valArr:[]
	},
	fileDescr : {
		type:'text'
	},
	creator : {
		type: 'boolean',
	},
	abstr: {
		type:'text',
		repeatable: true,
		valArr:[]
	},
	
	costs: { //ist ein Pflichtfeld? default to 'no'
		type: 'boolean'
	},
	
	copyright: { //Copyright and Other Restrictions
		type: 'boolean'
	},
	
	license: {
		type:'licEnum'
	},

	acNumber: {
		type:'string',
		length:'10',
		visibility:'admin'
	},
	
	keywords: {
		type: 'string',
		repeatable: true,
		valArr:[]
	},
	evaluator: {
		type: 'string',
		mandatory: true,
		repeatable: true,
		valArr:[]
	}
	
	
}
}