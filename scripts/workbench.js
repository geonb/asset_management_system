newWb = 0;
iter_wb = 0;
init_wb = function() {
func_showWb(0);
}
itx = 0;
func_sWb = function() {
	$('#nav_wb').css('visibility' , 'visible');
	   setTimeout(function(){
            // do stuff on hover
        }, 3000);
}
func_cWb = function() {
	$('#nav_wb').css('visibility' , 'hidden');
}
func_aWb = function() {
	 var url = "backend.php?list=workbenches";
	 $.ajax({
	          type: 'POST',
		  url: url,
		  dataType: 'json',
		  success: function(data) {
		  	iter_wb = parseInt(data[0].workbench) + 1;
			newWb = iter_wb;
			if($('#nav_nb > div').length < 1) {	
				$('#nav_nb').css('border', '1px solid rgb(199,199,199)');
				$('#nav_nb').css('visibility', 'visible');
				$('#new_bg').css('visibility', 'visible');
				$('#nav_nb').show();
				$('#new_bg').show();
				$('#nav_nb').prepend("<div id='wbm3_div' class='spalte' ondblclick='func_dcl(" + iter_wb + ")'>" + 
							"<span id='desc'>Titel des Projekts eintragen</span>" + 
						      	"<input title='Titel des Projekts eintragen' autocomplete='off' id='wb_id" + iter_wb + "' onkeypress = 'enterPressed(event, 0, " + iter_wb + ");' class='wb_name_n' name='workbench_value' value=''></input>" +
						      	"<div>" +
						      	"<span id='desc' class='alert_div'>Bitte Projekttitel eingeben</span>" + 
						      	"</div>" + 
						      	"<div id='marg_div'>" + 
						      	"<input type='button'  id='ok' value='Ok' onclick='func_ok(" + iter_wb + ")' ></input>" + 
						      	"<input type='button' id='abb' value='Abbrechen' onclick='func_cancel();'></input>" + 
						      	"</div>" + 
						      	"</div>");
			$('#wb_id' + iter_wb).focus();	
			}
			
			},
		  error: function(data) {
		  	iter_wb = 0;
		  	newWb = iter_wb;
		  	if($('#nav_nb > div').length < 1) {	
			  	$('#nav_nb').css('border', '1px solid rgb(199,199,199)');
			  	$('#nav_nb').css('visibility', 'visible');
			  	$('#new_bg').css('visibility', 'visible');
				$('#new_bg').show();
				$('#nav_nb').show();
				$('#nav_nb').prepend("<div id='wbm3_div' class='spalte' ondblclick='func_dcl(" + iter_wb + ")'>" + 
							"<span id='desc'>Titel des Projekts eintragen</span>" + 
						      	"<input title='Titel des Projekts eintragen' autocomplete='off' id='wb_id" + iter_wb + "' onkeypress = 'enterPressed(event, 0, " + iter_wb + ");' class='wb_name_n' name='workbench_value' value=''></input>" +
						      	"<div>" +
						      	"<span id='desc' class='alert_div'>Bitte Projekttitel eingeben</span>" + 
						      	"</div>" + 
						      	"<div id='marg_div'>" + 
						      	"<input type='button' id='ok' value='Ok' onclick='func_ok(" + iter_wb + ")' ></input>" + 
						      	"<input type='button' id='abb' value='Abbrechen' onclick='func_cancel();'></input>" + 
						      	"</div>" + 	
						      	"</div>");
				$('#wb_id' + iter_wb).focus();	
				}
				
			}
				  
		});
		if($('#nav_nb > div').length == 1) {
			$('#nav_nb').css('visibility', 'visible');
			$('#new_bg').css('visibility', 'visible');
			$('#new_bg').show();
			$('#nav_nb').show();	
		}
	}
wl = new Array();
func_ok = function(nrWb) {
	if($('#wb_id'+ nrWb).val() !== '') {
		func_getNb(nrWb);
	} else {
		$('.alert_div').css('visibility', 'visible');	
	}
}
func_cancel = function() {
	$('.alert_div').css('visibility', 'hidden');	
	$('#nav_nb').css('visibility', 'hidden');
	$('#new_bg').css('visibility','hidden');
	$('#new_bg').hide();
	$('#nav_nb').hide();
}
func_showWb = function(val) {
	 var url = "backend.php?list=workbenches";
	 $.ajax({
	          type: 'POST',
		  url: url,
		  dataType: 'json',
		  success: function(data) {
		  	if(data.length !== 0) {
		  		if(val == 0) {
		  			$('#nav_wb').css('border', '1px solid white');
		  			var k = 1;
		  			if(data.length >= 1) {
				  	// func_getWb(wl[0].workbench);
				  	for (var i = 0; i < data.length; i++) {
						$('#nav_wb').append("<div id='wbm2_div' class='spalte' onMouseover='func_sWb()' onMouseout='func_cWb()' onclick='func_getWb(" + data[i].workbench + ");' ondblclick='func_dcl("+ data[i].workbench +")'>" + 
						      	"<input title='Titel des Projekts eintragen' readonly='readonly' onkeypress = 'enterPressed(event, " + (data[i].workbench) + ", 1);' id='wb_id" + data[i].workbench + "' class='wb_name' name='workbench_value' value='" + data[i].wbName + "'></input>" +
						      	"</div>");
					}
				}
			}
			}
			}			  		
		});
}
wrb = new Object();
func_dcl = function(nrWb) {
	$('#wb_id' + nrWb).removeAttr('readonly');	
}
func_getNb = function(nrWb) {	
	func_cancel();
	if($('#nav_nb').length === 1) {
		var wbName = $('#wb_id'+ nrWb).val();
	}
	if($('#wb_id'+ nrWb).val() !== '') {
	$('#wb_id'+ nrWb).attr('readonly', 'readonly');
	var wbName = $('#wb_id'+ nrWb).val();
		if($('#desc_q').length == 1) {
			$('#desc_q').remove();
		}
		
		$('#menu_wb').append("<div id='desc_q'>" + wbName + " </div>");
		wrb = new cl_explorer(nrWb, wbName, newWb, 'admin');
		wrb.show_cmp(nrWb);
		if ($('.cmp_add').length === 0) {
		$('#menu_m').append("<div id='fm_div' class='spalte'>" + 
		      	"<input type='button' class='cmp_add'  style='display: none' value='neue Komponente' title='neue Inhaltskomponente anlegen' ></input>" + 
		      	"</div>");
		}		
	}
		
}
func_getWb = function(nrWb) {
	func_cancel();
	if($('#nav_wb').length >= 1) {
		var wbName = $('#wb_id' + nrWb).val();	
		$('#nav_nb').css('border', 'none');
		$('#nav_nb').children().remove();
	}
	if($('#wb_id' + nrWb).val() !== '') {
	$('#wb_id' + nrWb).attr('readonly', 'readonly');
	if($('#desc_q').length == 1) {
			$('#desc_q').remove();
		}
	var wbName = $('#wb_id' + nrWb).val();
		$('#menu_wb').append("<div id='desc_q'>" + wbName + " </div>");
		wrb = new cl_explorer(nrWb, wbName, newWb, 'admin');
		wrb.show_cmp(nrWb);
		if ($('.cmp_add').length === 0) {
		$('#menu_m').append("<div id='fm_div' class='spalte'>" + 
		      	"<input type='button' class='cmp_add'  style='display: none' value='neue Komponente' title='neue Inhaltskomponente anlegen' ></input>" + 
		      	"</div>");
		}		
	}
		
}

function enterPressed(evn, wbNr, nrWb) {
if(wbNr == 0) {
if (evn && evn.keyCode == 13) {
	func_getNb(nrWb);	
}
}
if(wbNr == 1) {
if (evn && evn.keyCode == 13) {
	func_getWb(nrWb);	
}
}	
}
