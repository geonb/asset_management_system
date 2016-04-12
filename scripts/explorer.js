function cl_explorer(workbench, wbName, newWb, userPolicy) {
i = 0;
ix = 0;
ixx = 0;
        id_r = 0;
		id_rd = 0;
        id_t = 1;
        if_meta = false;
        fld = '';
		field_def = fieldDefinition();
        id_ls_m = new Array();
        chk = new Array();
        func_remWb = function() {
$('#links').children().remove();
}

func_remMt = function() {
$('#mitte').children().remove();
}

textAreaAdjust = function (o) {
o.style.height = "1px";
        o.style.height = (25 + o.scrollHeight) + "px";
}
id_bool = new Array();
        s_st = new Array();
func_delete = function(cmp_del, val, id_chk) {
if (val == 0) {
var spCmp1 = $('#pad_cmt' + id_chk).parent().children();
        // spCmp1.remove();
        spCmp1.remove();
}
}
str = {
nav	: "<ul class='opened' class='opened_img'>" +
        "<li><a class='nav' href='#?id=1'></a> PHAIDRA REPOSITORY ZUGANG </li>" +
        "<li id='phaidra_repository_zugang'>" +
        "<a class='folder' onlclick='toggle('phaidra_repository_zugang', true);'> INFORMATION (Phaidra Frontend) </a>" +
        "<ul id='opened_img' class='opened'>" +
        "<li id='doc_img'><a class='nav' href='#?id=2'> Impressum </a></li>" +
        "<li id='doc_img'><a class='nav' href='#?id=3'> Feedback </a></li>" +
        "</ul><!-- Ende: ul_Intern -->" +
        "</li>" +
        "<li id='doc_img'> <a class='folder' onclick='this.toggle('Metadaten_presets', true)'> Metadaten Presets </a>" +
        "<ul id='opened_img' class='opened'>" +
        "<li id='doc_img'><a class='nav' href='#?id=4'> Preset anlegen </a></li>" +
        "<li id='doc_img'><a class='nav' href='#?id=5'> Preset List</a></li>" +
        "</ul><!-- Ende: ul_Intern -->" +
        "</li>" +
        "<li id='doc_img'>" +
        "<a class='folder' onclick='this.toggle('components', true)'> Komponenten </a>" +
        "<ul id='ul_components' class='opened'>" +
        "<li id='doc_img'><a class='nav'href='#?list=1' onclick='this.cmpVal()'> Komponente anlegen </a></li>" +
        "</ul><!-- Ende: ul_Intern -->" +
        "</li>" +
        "</ul>",
        cmp : function (title, textmsg, publish, visib) {
return "<script type='text/javascript'> $(function() { var txt = $('#textmsg'), hiddenDiv = $(document.createElement('div')), content = null;" +
        "txt.addClass('txtstuff');  hiddenDiv.addClass('hiddendiv common');  $('body').append(hiddenDiv);" +
        "txt.on('keyup', function () { content = $(this).val();  content = content.replace(/\n/g, '<span id='desc'/>');" +
        "hiddenDiv.html(content + '<span class='lbr' />'); $(this).css('height', hiddenDiv.height()); }); }); </script>" +
        "<div id='pad_cmt0' class='spalte pad_cm2'>" +
        "<form class='msgForm' name='file_form' id='cmp_0'action='#' enctype='multipart/form-data' method='post'>" +
        "<input type='hidden' id='id_val_0' value=1 />" +
        "<input type='hidden' id='id_new_0' value=0 />" +
        "<input type='hidden' name='save' value=1></input>" +
        "<div id='m_div2' class='spalte'>" +
        "<div id='t_div0' class='spalte ct_div'>" +
        "<div>" +
        "<span id='desc'> Titel des Dokuments </span>" +
        "<input title='Eingabefeld des Dokumententitels' id='id_title_0' class='title_mte' name='titel' value=''></input>" +
        "</div>" +
        "<div>" + 
        "<span id='desc_p2'> Dateiname des Dokuments </span>" +
        "<span id='desc'>&nbsp;</span>" +
        "<input title='Name der gew&auml;hlten Datei' id='id_filen_v0' readonly='readonly' class='filen2'  name='filename' value=''></input>" +
        "</div>" +
        "<div>" +
        "<input type = 'button' title='Auswahlmen&uuml; f&uuml;r Dateien' class='cl_browse' id='id_browse0' value = 'Dateiauswahl' onclick ='this.form.id_fileup0.click();'>" +
        "</div>" +
        "<div>" + 
        "<span id='desc'> Beschreibungsfeld / Kommentar </span>" +
        "<textarea class='common txtstuff textmsg' id='textmsg_0' title='Beschreibungsfeld des Inhalts der Datei' onkeyup='textAreaAdjust(this)' name='msg'>" + ((typeof textmsg !== 'undefined')?textmsg:'Kommentar') + "</textarea>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "</div>" +
        "<div id='f_div' class='spalte'>" +
        "<div>" +
        "<input class='fileup' class='cl_fileup' id='id_fileup0' type='file' style='display: none' name='fileup0' multiple='multiple' onchange='func_val(0)' title='Auswahl f&uuml;r Dateien' value='Dateiauswahl'></input>" +
        "</div>" +
        "<div id='pre_d'>" +
        "<span id='desc'>&nbsp;</span>" +
        "<input class='zuruecksetzen' type='reset' title='zur&uuml;cksetzten aller Eingabefelder' onclick='func_delmeta()' value='zur&uuml;cksetzen'></input> " +
        "</div>" +
        "<div>" +
        "<div id='pre_d'>" +
        "<span id='desc'>&nbsp;</span>" +
        "<input class='" + publish + "' id='publish_btn_0' type='button' value='gesperrt' name='freigabe' title='Inhaltskomponente f&uuml;r andere Nutzer sperren oder freigeben' onclick='toggle_publish(0, 0);'></input>" +
        "</div>" +
        "<div id='pre_d'>" +
        "<span id='desc'>&nbsp;</span>" +
        "<input class='speichern' type='button' value='speichern' id='id_save_v0' title='Inhaltskomponente speichern' onclick='func_save(" + workbench + ");'></input>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</form>" +
        "<div class='pad_mtm_2 spalte' id='div_mtm_0'>" +
        "<form action='#' method='post'>" +
        "<input type='hidden' id='idnr_0' value='0' />"
        // "<input class='md_n' type='text' placeholder='Verbund IDN' title='Verbund IDN' name='Verbund IDN' ></input>" +

        // "<input class='md_n' type='text' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +

},
        vwe : function (title, filen, id_ls, publish, permit) {
return "<script type='text/javascript'> $(function() { var txt = $('#textmsg'), hiddenDiv = $(document.createElement('div')), content = null;" +
        "txt.addClass('txtstuff');  hiddenDiv.addClass('hiddendiv common');  $('body').append(hiddenDiv);" +
        "txt.on('keyup', function () { content = $(this).val();  content = content.replace(/\n/g, '<br>');" +
        "hiddenDiv.html(content + '<br class='lbr'>'); $(this).css('height', hiddenDiv.height()); }); }); </script>" +
        "<div class='pad_vwe' id='id_vwe_" + id_ls + "'>" +
        "<form class='msgForm_v' action='#' enctype='multipart/form-data' method='post'>" +
        "<input type='hidden' id='idls_" + id_ls + "' value='" + id_ls + "'>" +
        "<input type='hidden' name='save' value=1></input>" +
        "</form>" +
        "</div>"
},
        mnu_s : function() {
return "<div id='fm_div' class='spalte'>" +
        "<input type='button' class='cmp_add' value='neue Komponente' title='neue Inhaltskomponente anlegen' onclick='cmpVal()'></input>" +
        "</div>"
},
        docadmin_l : function(field, id, edit_chk) {
        if(edit_chk === 0) {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div>" +
        "<div id='desc_ut" + id + "'>" +
        "</div>" +
        "<div id='desc_61' class='spalte'>" +
        "<span id='desc'>Verfasser</span>" +
        "<span id='desc_10'>&nbsp;</span>" +
        "<span id='desc'>IDN-Code</span>" +
        "<span id='desc_k'>Status</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_b' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_b' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<input id='idn_nr_l" + id + "' readonly='readonly' value='" + field.acNumber + "' class='md_e'  type='text' title='IDN-Code eingeben' name='IDNCODE'  ></input>" +
		"<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "</div>" +
        "</div>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc_2'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_5' class='spalte'>" +
        "<span id='desc'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_2z' class='spalte'>" +
        "<input id='beg_1vn_l" + id + "' readonly='readonly' value='" + field.evaluator.valArr[0].givenName + "' class='md_nm' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn_l" + id + "' readonly='readonly' value='" + field.evaluator.valArr[0].surName + "' class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn_l" + id + "' readonly='readonly' value='" + field.evaluator.valArr[1].givenName + "' class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn_l" + id + "' readonly='readonly' value='" + field.evaluator.valArr[1].surName + "' class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "</div>" +
        "<div id='desc_2z' class='spalte'>" +
        "<span id='desc_z11'>Umfang</span>" +
        "<span id='desc_x'>Sprache des Inhalts</span>" +
        "<span id='desc_21'>Erscheinungsdatum</span>" +
        "</div>" +
        "<div>" +
        "<input id='sel_lang_l" + id + "' value='" + field.language.keyVal[1] + "' readonly='readonly' class='md_i' type='text' value='Monat' title='Monatsangabe' name='Monat'  ></input>" +
        "<input id='umfang_l" + id + "' readonly='readonly' value='" + field.nrSites + "'class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        "<input id='m_date_l" + id + "' readonly='readonly' value='" + field.date + "'class='md_j' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu_l" + id + "' readonly='readonly' value='' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_deu + "</textarea>" +
        "<span id='desc_x12'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng_l" + id + "' readonly='readonly'  value=''  class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_eng + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>GND Schlagworte</span>" +
        "<input id='keyvalues_l" + id + "' readonly='readonly' value='" + field.keywords.valArr[0].keyValues + "' class='md_n' type='text' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "</div>" +
        "<div id='desc_8'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "' readonly='readonly' value='" + field.keywords.valArr[0].keymots + "' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<span id='desc_z'>L&auml;ndercode</span>" +
        "<span id='desc_9'>Illustrationen</span>" +
        "<span id='desc_11'>Zusatz</span>" +
        "<span id='desc_15'>Angabe zum Inhalt</span>" +
        "<span id='desc_13'>HS Vermerk</span>" +
        "</div>" +
        "<input id='cntrCode_l" + id + "' class='md_g' value='" + field.cntrCode + "' readonly='readonly' type='text' placeholder='L&auml;ndercode' title='L&auml;ndercode eigenben' name='Countrycode'  ></input>" +
        "<input id='illustr_l" + id + "' class='md_g' value='" + field.illustr + "' readonly='readonly' type='text' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input id='addid_l" + id + "' class='md_g' value='" + field.addid + "' readonly='readonly' type='text' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input id='angInh_l" + id + "' class='md_g' value='" + field.angInh + "' readonly='readonly' type='text' placeholder='Ang. z. Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input id='hsVerm_l" + id + "' class='md_g' value='" + field.hsVerm + "' readonly='readonly' type='text' placeholder='Vermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<div id='desc_z4'>&nbsp;</div>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
        }
        if(edit_chk === 1) {
        return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div>" +
        "<div id='desc_ut" + id + "_r'>" +
        "</div>" +
        "<div id='desc_61' class='spalte'>" +
        "<span id='desc'>Verfasser</span>" +
        "<span id='desc_10'>&nbsp;</span>" +
        "<span id='desc'>IDN-Code</span>" +
        "<span id='desc_k'>Status</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_b' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_b' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<input id='idn_nr_l" + id + "_r'   value='" + field.acNumber + "' class='md_e'  type='text' title='IDN-Code eingeben' name='IDNCODE'  ></input>" +
		"<span id='status_l" + id + "_r'></span>" +
        "</div>" +
        "</div>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc_2'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_5' class='spalte'>" +
        "<span id='desc'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_2z' class='spalte'>" +
        "<input id='beg_1vn_l" + id + "_r'   value='" + field.evaluator.valArr[0].givenName + "' class='md_nm' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn_l" + id + "_r'   value='" + field.evaluator.valArr[0].surName + "' class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn_l" + id + "_r'   value='" + field.evaluator.valArr[1].givenName + "' class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn_l" + id + "_r'   value='" + field.evaluator.valArr[1].surName + "' class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "</div>" +
        "<div id='desc_2z' class='spalte'>" +
        "<span id='desc_z11'>Umfang</span>" +
        "<span id='desc_x'>Sprache des Inhalts</span>" +
        "<span id='desc_21'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        "<div>" +
        "<div id='lang" + id + "_r' value='Sprache' title='Sprache des Inhalts der Datei' name='Sprache'  >" +
        "</div>" +
        "<input id='umfang_l" + id + "_r'   value='" + field.nrSites + "'class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu_l" + id + "_r'   value='' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_deu + "</textarea>" +
        "<span id='desc_x12'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng_l" + id + "_r'    value=''  class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_eng + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>GND Schlagworte</span>" +
        "<input id='keyvalues_l" + id + "_r'   value='" + field.keywords.valArr[0].keyValues + "' class='md_n' type='text' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "</div>" +
        "<div id='desc_8'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r'   value='" + field.keywords.valArr[0].keymots + "' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<span id='desc_z'>L&auml;ndercode</span>" +
        "<span id='desc_9'>Illustrationen</span>" +
        "<span id='desc_11'>Zusatz</span>" +
        "<span id='desc_15'>Angabe zum Inhalt</span>" +
        "<span id='desc_13'>HS Vermerk</span>" +
        "</div>" +
        "<input id='cntrCode_l" + id + "_r' class='md_g' value='" + field.cntrCode + "'   type='text' placeholder='L&auml;ndercode' title='L&auml;ndercode eigenben' name='Countrycode'  ></input>" +
        "<input id='illustr_l" + id + "_r' class='md_g' value='" + field.illustr + "'   type='text' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input id='addid_l" + id + "_r' class='md_g' value='" + field.addid + "'   type='text' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input id='angInh_l" + id + "_r' class='md_g' value='" + field.angInh + "'   type='text' placeholder='Ang. z. Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input id='hsVerm_l" + id + "_r' class='md_g' value='" + field.hsVerm + "'   type='text' placeholder='Vermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<div id='desc_z4'>&nbsp;</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
        }
},
document_l : function(field, id, edit_chk) {
if (edit_chk === 0) {
if (field.creator.value === 'checked') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div>" +
        "<div id='desc_ut" + id + "'>" +
        "</div>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Verfasser</span>" +
        "<span id='desc'>Status</span>" +
        "<span id='desc_10'>&nbsp;</span>" +
        "<span id='desc'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
		"<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l' disabled='disabled' checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" +
        "</div>" +
        "</div>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_5' class='spalte'>" +
        "<span id='desc'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "<input id='beg_1vn_l" + id + "' value='" + field.evaluator.valArr[0].givenName + "' readonly='readonly' class='md_b' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn_l" + id + "' value='" + field.evaluator.valArr[0].surName + "' readonly='readonly' class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn_l" + id + "' value='" + field.evaluator.valArr[1].givenName + "' readonly='readonly' class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn_l" + id + "' value='" + field.evaluator.valArr[1].surName + "' readonly='readonly' class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "<span id='desc_6'>&nbsp;</span>" +
        "<span id='desc_6'>Sprache des Inhalts</span>" +
        "<span id='desc_7'>Erscheinungsdatum</span>" +
        "<div id='lang" + id + "' title='Sprache des Inhalts der Datei' name='Sprache'>" +
        "</div>" +
        "<input id='umfang" + id + "'  value='" + field.nrSites + "' readonly='readonly' class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        "<input id='sel_lang_l" + id + "' value='" + field.language.keyVal[1] + "' readonly='readonly' class='md_i' type='text' value='Monat' title='Monatsangabe' name='Monat'  ></input>" +
        "<input id='m_date_l" + id + "' readonly='readonly' value='" + field.date + "'class='md_j' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu_l" + id + "' readonly='readonly' value='' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_deu + "</textarea>" +
        "<span id='desc_9'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng_l" + id + "' readonly='readonly'  value=''  class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_eng + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots" + id + "' readonly='readonly' class='md_n' value='" + field.keywords.valArr[0].keymots + "' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<div id='desc'></div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc_2'>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div>" +
        "<div id='desc_ut" + id + "'>" +
        "</div>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Verfasser</span>" +
        "<span id='desc'>Status</span>" +
        "<span id='desc_10'>&nbsp;</span>" +
        "<span id='desc'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
		"<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l" + id + "' disabled='disabled' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" +
        "</div>" +
        "</div>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_5' class='spalte'>" +
        "<span id='desc'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "<input id='beg_1vn_l" + id + "' value='" + field.evaluator.valArr[0].givenName + "' readonly='readonly' class='md_b' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn_l" + id + "' value='" + field.evaluator.valArr[0].surName + "' readonly='readonly' class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn_l" + id + "' value='" + field.evaluator.valArr[1].givenName + "' readonly='readonly' class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn_l" + id + "' value='" + field.evaluator.valArr[1].surName + "' readonly='readonly' class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "<span id='desc_6'>&nbsp;</span>" +
        "<span id='desc_6'>Sprache des Inhalts</span>" +
        "<span id='desc_7'>Erscheinungsdatum</span>" +
        "<div id='lang" + id + "' title='Sprache des Inhalts der Datei' name='Sprache'>" +
        "</div>" +
        "<input id='umfang" + id + "'  value='" + field.nrSites + "' readonly='readonly' class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        "<input id='sel_lang_l" + id + "' value='" + field.language.keyVal[1] + "' readonly='readonly' class='md_i' type='text' value='Monat' title='Monatsangabe' name='Monat'  ></input>" +
        "<input id='m_date_l" + id + "' readonly='readonly' value='" + field.date + "'class='md_j' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu_l" + id + "' readonly='readonly' value='' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_deu + "</textarea>" +
        "<span id='desc_9'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng_l" + id + "' readonly='readonly'  value=''  class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_eng + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots" + id + "' readonly='readonly' class='md_n' value='" + field.keywords.valArr[0].keymots + "' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<div id='desc'></div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc_2'>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
}
if (edit_chk === 1) {
if (field.creator.value === 'checked') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div>" +
        "<div id='desc_ut" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Verfasser</span>" +
        "<span id='desc'>Status</span>" +
        "<span id='desc_10'>&nbsp;</span>" +
        "<span id='desc'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
		"<span id='status_l" + id + "_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'   checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" +
        "</div>" +
        "</div>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_5' class='spalte'>" +
        "<span id='desc'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "<input id='beg_1vn_l" + id + "_r' value='" + field.evaluator.valArr[0].givenName + "'   class='md_b' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn_l" + id + "_r' value='" + field.evaluator.valArr[0].surName + "'   class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn_l" + id + "_r' value='" + field.evaluator.valArr[1].givenName + "'   class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn_l" + id + "_r' value='" + field.evaluator.valArr[1].surName + "'   class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "<span id='desc_6'>&nbsp;</span>" +
        "<span id='desc_6'>Sprache des Inhalts</span>" +
        "<span id='desc_7'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='lang" + id + "_r' title='Sprache des Inhalts der Datei' name='Sprache'>" +
        "</div>" +
        "<input id='umfang" + id + "_r'  value='" + field.nrSites + "'   class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        // "<input id='sel_month'   class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu_l'   value='' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_deu + "</textarea>" +
        "<span id='desc_9'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng_l" + id + "_r'    value=''  class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_eng + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots" + id + "_r'   class='md_n' value='" + field.keywords.valArr[0].keymots + "' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<div id='desc'></div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc_2'>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div>" +
        "<div id='desc_ut" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Verfasser</span>" +
        "<span id='desc'>Status</span>" +
        "<span id='desc_10'>&nbsp;</span>" +
        "<span id='desc'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
		"<span id='status_l" + id + "_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'   type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" +
        "</div>" +
        "</div>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_5' class='spalte'>" +
        "<span id='desc'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "<input id='beg_1vn_l" + id + "_r' value='" + field.evaluator.valArr[0].givenName + "'   class='md_b' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn_l" + id + "_r' value='" + field.evaluator.valArr[0].surName + "'   class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn_l" + id + "_r' value='" + field.evaluator.valArr[1].givenName + "'   class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn_l" + id + "_r' value='" + field.evaluator.valArr[1].surName + "'   class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "<span id='desc_6'>&nbsp;</span>" +
        "<span id='desc_6'>Sprache des Inhalts</span>" +
        "<span id='desc_7'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='lang" + id + "_r' title='Sprache des Inhalts der Datei' name='Sprache'>" +
        "</div>" +
        "<input id='umfang" + id + "_r'  value='" + field.nrSites + "'   class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        "<input id='m_date_l" + id + "_r'   value='" + field.date + "'class='md_j' type='text' title='Erscheinungsjahr' readonly='readonly' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu_l" + id + "_r'   value='' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_deu + "</textarea>" +
        "<span id='desc_9'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng_l" + id + "_r'    value=''  class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].abs_eng + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots" + id + "_r'   class='md_n' value='" + field.keywords.valArr[0].keymots + "' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<div id='desc'></div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc_2'>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
}
},
        picture_l : function(field, id, edit_chk) {
if (edit_chk === 0) {
if (field.creator.value === 'checked' && field.abstr.valArr[0].fileDescr !== '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>NutzerIn</span>" +
        "<span id='desc_25'>Status</span>" +
        "<span id='desc_26'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l" + id + "'  disabled='disabled' checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_date_l" + id + "' value='" + field.date + "' readonly='readonly' class='md_j' type='text' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung der Darstellung</span>" +
        "</div>" +
        "<textarea readonly='readonly' class='common txtstuff textmsg' id='abs_deu_l' title='Beschreibung der Darstellung' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "' value='" + field.keywords.valArr[0].keymots + "'readonly='readonly' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'checked' && field.abstr.valArr[0].fileDescr === '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l'  disabled='disabled' checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_date_l" + id + "' value='" + field.date + "' readonly='readonly' class='md_j' type='text' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "' value='" + field.keywords.valArr[0].keymots + "'readonly='readonly' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false' && field.abstr.valArr[0].fileDescr !== '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l" + id + "'  disabled='disabled' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_date_l" + id + "' value='" + field.date + "' readonly='readonly' class='md_j' type='text' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung der Darstellung</span>" +
        "</div>" +
        "<textarea readonly='readonly' class='common txtstuff textmsg' id='abs_deu_l" + id + "' title='Beschreibung der Darstellung' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "' value='" + field.keywords.valArr[0].keymots + "'readonly='readonly' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false' && field.abstr.valArr[0].fileDescr === '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
		"<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l" + id + "'  disabled='disabled' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_date_l" + id + "' value='" + field.date + "' readonly='readonly' class='md_j' type='text' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "' value='" + field.keywords.valArr[0].keymots + "'readonly='readonly' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
}
if (edit_chk === 1) {
if (field.creator.value === 'checked' && field.abstr.valArr[0].fileDescr !== '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>NutzerIn</span>" +
        "<span id='desc_25'>Status</span>" +
        "<span id='desc_26'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<span id='status_l" + id + "_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'    checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung der Darstellung</span>" +
        "</div>" +
        "<textarea   class='common txtstuff textmsg' id='abs_deu_l" + id + "_r' title='Beschreibung der Darstellung' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r' value='" + field.keywords.valArr[0].keymots + "'  class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'checked' && field.abstr.valArr[0].fileDescr === '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
		"<span id='status_l" + id + "_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'    checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r' value='" + field.keywords.valArr[0].keymots + "'  class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false' && field.abstr.valArr[0].fileDescr !== '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<span id='status_l" + id +"_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'    type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung der Darstellung</span>" +
        "</div>" +
        "<textarea   class='common txtstuff textmsg' id='abs_deu_l" + id + "_r' title='Beschreibung der Darstellung' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r' value='" + field.keywords.valArr[0].keymots + "'  class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false' && field.abstr.valArr[0].fileDescr === '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<span id='status_l" + id +"_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'    type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r' value='" + field.keywords.valArr[0].keymots + "'  class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
}
},
        audio_l : function(field, id, edit_chk) {
if (edit_chk === 0) {
if (field.creator.value === 'checked') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l" + id + "' disabled='disabled' checked='checked' title='Status des Files angeben' readonly='readonly' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_date_l" + id + "' value='" + field.date + "' readonly='readonly' class='md_j' type='text' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung des Audiofiles</span>" +
        "</div>" +
        "<textarea readonly='readonly' class='common txtstuff textmsg' id='abs_deu_l" + id + "' title='Beschreibung des Audiofiles' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "' value='" + field.keywords.valArr[0].keymots + "'readonly='readonly' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "' value='" + field.contributor.valArr[0].givenName + "' readonly='readonly' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "' value='" + field.contributor.valArr[0].surName + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<input id='status_l" + id + "' class='md_b' value='" + field.status.sts + "' readonly='readonly'  title='Status des Documents' ></input>" +
        "<input class='md_x'  id='radio_chk_l' disabled='disabled' readonly='readonly' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_date_l" + id + "' value='" + field.date + "' readonly='readonly' class='md_j' type='text' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung des Audiofiles</span>" +
        "</div>" +
        "<textarea readonly='readonly' class='common txtstuff textmsg' id='abs_deu_l" + id + "' title='Beschreibung des Audiofiles' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "' value='" + field.keywords.valArr[0].keymots + "'readonly='readonly' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
}
if (edit_chk === 1) {
if (field.creator.value === 'checked' && field.abstr.valArr[0].fileDescr !== '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>NutzerIn</span>" +
        "<span id='desc_25'>Status</span>" +
        "<span id='desc_26'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<span id='status_l" + id + "_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'    checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung der Darstellung</span>" +
        "</div>" +
        "<textarea   class='common txtstuff textmsg' id='abs_deu_l" + id + "_r' title='Beschreibung des Audiofiles' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r' value='" + field.keywords.valArr[0].keymots + "'  class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'checked' && field.abstr.valArr[0].fileDescr === '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
		"<span id='status_l" + id + "_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'    checked='checked' type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        
        "<div id='desc_6' class='spalte'>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r' value='" + field.keywords.valArr[0].keymots + "'  class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
if (field.creator.value === 'false' && field.abstr.valArr[0].fileDescr !== '') {
return "<div class='pad_mtm2 spalte' id='div_mtm_" + id + "_r'><div id='doc_eval2' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>NutzerIn</span>" +
        "<span id='desc_mn'>Status</span>" +
        "<span id='desc_17'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn_l" + id + "_r' value='" + field.contributor.valArr[0].givenName + "'   class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn_l" + id + "_r' value='" + field.contributor.valArr[0].surName + "'   class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<span id='status_l" + id +"_r'></span>" +
        "<input class='md_x'  id='radio_chk_l" + id + "_r'    type='checkbox' title='UrheberIn' name='UrhNutz'  ></input>" + // todo
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc_9'>Erscheinungsdatum</span>" +
		"<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung der Darstellung</span>" +
        "</div>" +
        "<textarea   class='common txtstuff textmsg' id='abs_deu_l" + id + "_r' title='Beschreibung des Audiofiles' onkeyup='textAreaAdjust(this)' name='absd'>" + field.abstr.valArr[0].fileDescr + "</textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc'>Freie Schlagworte</span>" +
        "<input id='keymots_l" + id + "_r' value='" + field.keywords.valArr[0].keymots + "'  class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "<div id='desc_con" + id + "_r'>" +
        "</div>" +
        "</div>" +
        "</div>"
}
}
},
  docadmin : function() {
return "<div id='doc_eval' class='spalte'>" +
        "<div>" +
        "<div id='desc'> Untertitel / weitere Titel </div>" +
        "<input  id='m_title_r0' title='Untertitel oder weitere Titel angeben' class='title_pp' name='m_titel' value=''></input>" +
        "<input class='title_del' type='button' title='weitere Titel angeben' name='title' value='weitere' onclick='func_addTitle(" + id_t + ")'></input>" +
        "<span id='desc_t'>" +
        "</span>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Verfasser</span>" +
        "<span id='desc_10'>&nbsp;</span>" +
        "<span id='desc'>IDN-Code</span>" +
        "<span id='desc_k'>Status</span>" +
        "<div>" +
        "<input id='verf_vn' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<input id='idn_nr' class='md_e'  type='text' title='IDN-Code eingeben' name='IDNCODE'  ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "</div>" +
        "</div>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc_x0'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_vn' class='spalte'>" +
        "<span id='desc_vn2'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "<input id='beg_1vn' class='md_b' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn' class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn' class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn' class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "<div>" +
        "<div id='desc_x2'>&nbsp;</div>" +
        "<div id='desc_x2'>&nbsp;</div>" +
        "<span id='desc_xx'>Sprache des Inhalts</span>" +
        "<span id='desc_1x1'>Erscheinungsdatum</span>" +
        "</div>" +
        "<div>" +
        "<span id='lang' value='Sprache' title='Sprache des Inhalts der Datei' name='Sprache'  >" +
        "</span>" +
        "<input id='umfang' class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'></textarea>" +
        "<span id='desc_x12'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng' class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'></textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>GND Schlagworte</span>" +
        "<input id='keyvalues' class='md_n' type='text' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "</div>" +
        "<div id='desc_8'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<span id='desc_z'>L&auml;ndercode</span>" +
        "<span id='desc_9'>Illustrationen</span>" +
        "<span id='desc_11'>Zusatz</span>" +
        "<span id='desc_15'>Angabe zum Inhalt</span>" +
        "<span id='desc_13'>HS Vermerk</span>" +
        "</div>" +
        "<input id='cntrCode' class='md_g' type='text' placeholder='L&auml;ndercode' title='L&auml;ndercode eigenben' name='Countrycode'  ></input>" +
        "<input id='illustr' class='md_g' type='text' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input id='addid' class='md_g' type='text' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input id='angInh' class='md_g' type='text' placeholder='Ang. z. Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input id='hsVerm' class='md_g' type='text' placeholder='Vermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<div id='desc_z1'>&nbsp;</div>" +
        "<span id='desc_z2'>AuthorIn / Mitwirkende(r) </span>" +
        "<span id='desc_y'>Funktion </span>" +
        "<div id='desc_2'>" +
        "<input id='auth_vn' class='md_a' type='text' placeholder='Vorname' title='Vorname der AuthorIn' name='auth_v'  ></input>" +
        "<input id='auth_nn' class='md_c' type='text' placeholder='Nachname' title='Nachname der AuthorIn' name='auth_n'  ></input>" +
        "<div id='roleEnum' value='Funktion' title='Funktion der Mitwirkenden' name='function'>" +
        "</div>" +
        "<input class='authors' type='button' title='Author(Inn)en / Mitwirkende angeben' name='authors' value='weitere' onclick='func_addAuthor(" + id_r + ")'></input>" +
        "</div>" +
        "<div id='desc_a'>" +
        "</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "</div>"
},
        document : function() {
return "<div id='doc_eval' class='spalte'>" +
        "<div>" +
        "<div id='desc'> Untertitel / weitere Titel </div>" +
        "<input  id='m_title_r0' title='Untertitel oder weitere Titel angeben' class='title_pp' name='m_titel' value=''></input>" +
        "<input class='title_del' type='button' title='weitere Titel angeben' name='title' value='weitere' onclick='func_addTitle(" + id_t + ")'></input>" +
        "<span id='desc_t'>" +
        "</span>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Verfasser</span>" +
        "<span id='desc_23'>Status</span>" +
        "<span id='desc_14'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<input class='md_x'  id='radio_chk' checked='checked' onclick='func_Rdeselect(0,0)' type='checkbox' value='checked' title='UrheberIn' name='UrhNutz'  ></input>" +
        "</div>" +
        "</div>" +
        "<div id='desc_6' class='spalte'>" +
        "<div id='desc_3' class='spalte'>" +
        "<span id='desc_x0'>Erste(r) BegutachterIn</span>" +
        "</div>" +
        "<div id='desc_5' class='spalte'>" +
        "<span id='desc_x0'>Zweite(r) BegutachterIn</span>" +
        "</div>" +
        "</div>" +
        "<input id='beg_1vn' class='md_b' placeholder='Vorname' type='text' title='Erste(r) BegutachterIn Vorname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_1nn' class='md_b' placeholder='Nachname'type='text' title='Erste(r) BegutachterIn Nachname' name='BegutachterIn1'  ></input>" +
        "<input id='beg_2vn' class='md_b' placeholder='Vorname'type='text' title='Zweite(r) BegutachterIn Vorname' name='BegutachterIn2'  ></input>" +
        "<input id='beg_2nn' class='md_b' placeholder='Nachname' type='text' title='Zweite(r) BegutachterIn Nachname' name='BegutachterIn2'  ></input>" +
        "<div>" +
        "<div id='desc_x2'>&nbsp;</div>" +
        "<div id='desc_x2'>&nbsp;</div>" +
        "<span id='desc_xx'>Sprache des Inhalts</span>" +
        "<span id='desc_1x1'>Erscheinungsdatum</span>" +
        "</div>" +
        "<div>" +
        "<span id='lang' value='Sprache' title='Sprache des Inhalts der Datei' name='Sprache'  >" +
        "</span>" +
        "<input id='umfang' class='md_u' type='text' placeholder='Umfang' title='Umfang' name='Umfang' class='Umfang' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Kurzfassung Deutsch</span>" +
        "</div>" +
        "<textarea id='abs_deu' class='common txtstuff textmsg' title='Kurzfassung Deutsch' onkeyup='textAreaAdjust(this)' name='absd'></textarea>" +
        "<span id='desc_x0'>Kurzfassung Englisch</span>" +
        "<textarea id='abs_eng' class='common txtstuff textmsg' title='Kurzfassung Englisch' onkeyup='textAreaAdjust(this)' name='absd'></textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "</div>" +
        "<div id='desc'></div>" +
        "<span id='desc_z2'>AuthorIn / Mitwirkende(r) </span>" +
        "<span id='desc_y2'>Funktion </span>" +
        "<div id='desc_2'>" +
        "<input id='auth_vn' class='md_a' type='text' placeholder='Vorname' title='Vorname der AuthorIn' name='auth_v'  ></input>" +
        "<input id='auth_nn' class='md_c' type='text' placeholder='Nachname' title='Nachname der AuthorIn' name='auth_n'  ></input>" +
        "<div id='roleEnum' value='Funktion' title='Funktion der Mitwirkenden' name='function'>" +
        "</div>" +
        "<input class='authors' type='button' title='Author(Inn)en / Mitwirkende angeben' name='authors' value='weitere' onclick='func_addAuthor(" + id_r + ")'></input>" +
        "</div>" +
        "<div id='desc_a'>" +
        "</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "</div>"
},
        picture : function() {
return "<div id='doc_eval' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>NutzerIn</span>" +
        "<span id='desc_23'>Status</span>" +
        "<span id='desc_14'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<input class='md_x'  id='radio_chk' checked='checked' onclick='func_Rdeselect(0,0)' type='checkbox' value='checked' title='UrheberIn' name='UrhNutz'></input>" +
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung der Darstellung</span>" +
        "</div>" +
        "<textarea class='common txtstuff textmsg' id='abs_deu' title='Beschreibung der Darstellung' onkeyup='textAreaAdjust(this)' name='absd'></textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div id='desc_x0'>" +
        "<span id='desc_xm'>AuthorIn / Mitwirkende(r) </span>" +
        "<span id='desc_y3'>Funktion </span>" +
        "</div>" +
        "<input id='auth_vn' class='md_a' type='text' placeholder='Vorname' title='Vorname der AuthorIn' name='auth_v'  ></input>" +
        "<input id='auth_nn' class='md_c' type='text' placeholder='Nachname' title='Nachname der AuthorIn' name='auth_n'  ></input>" +
        "<div id='roleEnum' value='Funktion' title='Funktion der Mitwirkenden' name='function'>" +
        "</div>" +
        "<input class='authors' type='button' title='Author(Inn)en / Mitwirkende angeben' name='authors' value='weitere' onclick='func_addAuthor(" + id_r + ")'></input>" +
        "</div>" +
        "<div id='desc_a'>" +
        "</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "</div>" +
        "</div>"
},
        audio : function() {
return "<div id='doc_eval' class='spalte'>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>NutzerIn</span>" +
        "<span id='desc_23'>Status</span>" +
        "<span id='desc_14'>UrheberIn</span>" +
        "<div>" +
        "<input id='verf_vn' class='md_a' type='text' placeholder='Vorname' title='Verfasser Vorname' name='Verfasser' ></input>" +
        "<input  id='verf_nn' class='md_c' type='text' placeholder='Nachname' title='Verfasser Nachname' name='Verfasser' ></input>" +
        "<div id='status' title='Status des Documents angeben'></div>" +
        "<input class='md_x'  id='radio_chk' checked='checked' onclick='func_Rdeselect(0,0)' type='checkbox' value='checked' title='UrheberIn' name='UrhNutz'></input>" +
        "</div>" +
        "</div>" +
        "<span id='desc_6'></span>" +
        "<div>" +
        "<span id='desc'>Erscheinungsdatum</span>" +
        "</div>" +
        "<input id='m_day' class='md_d' type='number' value=1 min=1 max=31 title='Tag der Erstellung' name='tagerst' ></input>" +
        "<select id='sel_month' class='md_s' type='text' value='Monat' title='Monatsangabe' name='Monat'  >" +
        "<option>J&auml;nner</option>" +
        "<option>Februar    </option>" +
        "<option>M&auml;rz  </option>" +
        "<option>April      </option>" +
        "<option>Mai        </option>" +
        "<option>Juni       </option>" +
        "<option>Juli       </option>" +
        "<option>August     </option>" +
        "<option>September  </option>" +
        "<option>Oktober    </option>" +
        "<option>November   </option>" +
        "<option>Dezember   </option>" +
        "</select>" +
        "<input id='m_date' class='md_u' type='text' title='Erscheinungsjahr' name='Erscheinungsjahr'></input>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_2'>Beschreibung des Audiofiles</span>" +
        "</div>" +
        "<textarea class='common txtstuff textmsg' id='abs_deu' title='Beschreibung des Audiofiles' onkeyup='textAreaAdjust(this)' name='absd'></textarea>" +
        "<div id='desc_6' class='spalte'>" +
        "<span id='desc_x0'>Freie Schlagworte</span>" +
        "<input id='keymots' class='md_n' type='text' placeholder='SchlagworteFrei' title='SchlagworteFrei' name='SchlagworteFrei' ></input>" +
        "<div id='desc_x0'>" +
        "<span id='desc_xm'>AuthorIn / Mitwirkende(r) </span>" +
        "<span id='desc_y3'>Funktion </span>" +
        "</div>" +
        "<input id='auth_vn' class='md_a' type='text' placeholder='Vorname' title='Vorname der AuthorIn' name='auth_v'  ></input>" +
        "<input id='auth_nn' class='md_c' type='text' placeholder='Nachname' title='Nachname der AuthorIn' name='auth_n'  ></input>" +
        "<div id='roleEnum' value='Funktion' title='Funktion der Mitwirkenden' name='function'>" +
        "</div>" +
        "<input class='authors' type='button' title='Author(Inn)en / Mitwirkende angeben' name='authors' value='weitere' onclick='func_addAuthor(" + id_r + ")'></input>" +
        "</div>" +
        "<div id='desc_a'>" +
        "</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<div id='desc'>&nbsp;</div>" +
        "</div>" +
        "<input class='md_n' type='hidden' placeholder='Countrycode' title='Countrycode' name='Countrycode'  ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hauptsachtitel' title='Hauptsachtitel' name='Hauptsachtitel' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Zusatz' title='Zusatz' name='Zusatz'></input>" +
        "<input class='md_n' type='hidden' placeholder='Illustrationen' title='Illustrationen' name='Illustrationen' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Angabe zum Inhalt' ANGzInhalt' title='ANGzInhalt' name='ANGzInhalt' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Hochschulvermerk' title='Hochschulvermerk' name='Hochschulvermerk' ></input>" +
        "<input class='md_n' type='hidden' placeholder='SchlagworteGND' title='SchlagworteGND' name='SchlagworteGND' ></input>" +
        "<input class='md_n' type='hidden' placeholder='Signatur' title='Signatur' name='Signatur'></input>" +
        "</div>" +
        "</div>" +
        "</div>"
},
        auth_l : function(workb, fields, field_vn, field_nn, field_r, itt, edit_chk, it, ext) {
		if(edit_chk === 0) {
			return "<input id='auth_vn" + itt + "'value='" + field_vn + "' readonly='readonly' class='md_a1' type='text' placeholder='Vorname' title='Vorname der AuthorIn' name='auth_v'  ></input>" +
					"<input id='auth_nn" + itt + "'value='" + field_nn + "' readonly='readonly' class='md_c' type='text' placeholder='Nachname' title='Nachname der AuthorIn' name='auth_n'  ></input>" +
					"<input id='roleEnum" + itt + "' value='" + field_r.roleVal + "' readonly='readonly' class='md_c' type='text' title='Rolle de(r/s) Mitwirkenden' name='role_n'  ></input>" +
					"<span id='desc'>&nbsp;</span>"
		}
		if(edit_chk === 1) {
			$('#desc_con'+it+'_r').prepend("<div id='auth_f" + itt + "' class='spalte'>" +
			"<input id='auth_vn" + itt + "_r' class='md_a' type='text' placeholder='Vorname' value='" + field_vn + "' title='Vorname des Authors' name='auth_v'  ></input>" +
			"<input id='auth_nn" + itt + "_r' class='md_c' type='text' placeholder='Nachname'  value='" + field_nn + "' title='Nachname des Authors' name='auth_n'  ></input>" +
			"<span id='roleEnum" + (itt - 1) + "_r'>" +
			"</span>" +
			"<input type='button' id='th_button' class='cmp_del' value='l&ouml;schen' title='Author l&ouml;schen' onclick='func_Author()'>" +
			"<input type='hidden' id='th_del' class='cmp_del' value='th_" + id_rd + "' title='Author l&ouml;schen' onclick='func_delAuthor(this)'>" +
			"</div>"+
			"<input class='authors' type='button' title='Author(Inn)en / Mitwirkende angeben' name='authors' value='weitere' onclick='func_addAuthor_r(" + (id_rd + itt) + ", " + it+ ")'></input>");
		}
},
        ut_l : function(field_t, id, itt, edit_chk) {
		if(edit_chk === 0) {
			return "<input  id='m_title_r" + itt + "' value='" + field_t + "' readonly='readonly' title='Untertitel oder weitere Titel' class='title_pp' name='m_titel'></input>"
		}
		if(edit_chk === 1) {
			return "<input  id='m_title_r" + itt + "' value='" + field_t + "'title='Untertitel oder weitere Titel' class='title_pp' name='m_titel'></input>" +
					"<input type='button' id='th_button"+ itt +"' class='title_del' value='l&ouml;schen' title='Titel l&ouml;schen' onclick='func_Title_l(" + itt + ")'>" +
					"<input type='hidden' id='tt_del" + itt + "' class='title_del' value='th_" + itt + "' title='Titel l&ouml;schen' onclick='func_delTitle_l(" + id + ", this)'>"
		}
},
       auth : function(edit_chk) {
	   
return "<div id='auth_f" + id_r + "' class='spalte'>" +
        "<input id='auth_vn" + id_r + "' class='md_a' type='text' placeholder='Vorname' title='Vorname des Authors' name='auth_v'  ></input>" +
        "<input id='auth_nn" + id_r + "' class='md_c' type='text' placeholder='Nachname' title='Nachname des Authors' name='auth_n'  ></input>" +
        "<span id='roleEnum" + id_r + "'>" +
        "</span>" +
        "<input type='button' id='th_button' class='cmp_del' value='l&ouml;schen' title='Author l&ouml;schen' onclick='func_Author()'>" +
        "<input type='hidden' id='th_del' class='cmp_del' value='th_" + id_r + "' title='Author l&ouml;schen' onclick='func_delAuthor(this)'>" +
        "</div>"
		
},
        title : function() {
		return "<div id='title_f" + id_t + "'>" +
			"<input  id='m_title_r" + id_t + "' title='Untertitel oder weitere Titel angeben' class='title_pp' name='m_titel' value=''></input>" +
			"<input type='button' id='th_button' class='title_del' value='l&ouml;schen' title='Titel l&ouml;schen' onclick='func_Title()'>" +
			"<input type='hidden' id='tt_del' class='title_del' value='th_" + id_t + "' title='Titel l&ouml;schen' onclick='func_delTitle(this)'>" +
			"</div>"
        }
}
ref = new Array();
        /* func_appd_depec = function(id_chk) {
         if(typeof ref[id_chk] === 'undefined') {
         ref[id_chk] = 0;
         $('#t_div' + id_chk).append("<div><span id='desc'> beschreibung: " + (ref[id_chk] + 1) + " </span><input title='to enter a reference to a textsource' id='id_ref_" + (ref[id_chk] + 1) + "' class='ref_mte' name='reference' value=''></input></div>");
         ref[id_chk]++;
         } else {
         $('#t_div' + id_chk).append("<div><span id='desc'> beschreibung: " + (ref[id_chk] + 1) + " </span><input title='to enter a reference to a textsource' id='id_ref_" + (ref[id_chk] + 1) + "' class='ref_mte' name='reference' value=''></input></div>");
         ref[id_chk]++;
         }
         } */
        it_x = true;
        func_delmeta = function() {
$('#doc_eval').remove();
}
func_Rdeselect = function(val, id_chk) {
if(val === 0) {
var radioChecked = $('#radio_chk').is(':checked');
        $('#radio_chk').val('checked');
        if (radioChecked = !radioChecked) {
$('#radio_chk').attr('checked', radioChecked);
        $('#radio_chk').val('false');
}
} 
if(val === 1) {
var radioChecked = $('#radio_chk_l' + id_chk).is(':checked');
        $('#radio_chk_l' + id_chk).val('checked');
        if (radioChecked = !radioChecked) {
$('#radio_chk_l' + id_chk).attr('checked', radioChecked);
        $('#radio_chk_l' + id_chk).val('false');
}
} 
}
field_def = '';
        func_meta = function(idt) {
if ($('#id_filen_v0').val() !== '' && typeof $('#id_filen_v0').val() !== 'undefined') {
field_def = fieldDefinition();
        if ($('#doc_eval').length === 0) {
$('#roleEnum').remove();
        $('#roleEnum' + id_r).remove();
        $('#lang').remove();
        $('#status').remove();
        $('#doc_eval').remove();
        var ext = new Array();
        ext = $('#id_filen_v0').val().split('.');
        if (userPolicy === 'admin') {
if (ext[1] === 'pdf') {
$('#pad_cmt0').append(str.docadmin());
        $('#lang').append(formElements.dropdown('language', 0, 0, 0));
        $('#roleEnum').append(formElements.dropdown('role', 0, 0, 0));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0, 0 ));
        $('#status').append(formElements.dropdown('status', 0, 0, 0 ));
}
if (ext[1] === 'jpg' || ext[1] === 'gif' || ext[1] === 'tiff') {
$('#pad_cmt0').append(str.picture());
        $('#roleEnum').append(formElements.dropdown('role', 0, 0, 0));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0, 0 ));
        $('#status').append(formElements.dropdown('status', 0, 0, 0));
}
if (ext[1] === 'mpeg' || ext[1] === 'avi' || ext[1] === 'mp3') {
$('#pad_cmt0').append(str.audio());
        $('#roleEnum').append(formElements.dropdown('role', 0, 0, 0));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0, 0 ));
        $('#status').append(formElements.dropdown('status', 0, 0, 0 ));
}
}
if (userPolicy === 'student') {
if (ext[1] === 'pdf') {
$('#pad_cmt0').append(str.docadmin());
        $('#lang').append(formElements.dropdown('language', 0, 0, 0));
        $('#roleEnum').append(formElements.dropdown('role', 0, 0, 0));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0 , 0));
        $('#status').append(formElements.dropdown('status', 0, 0 , 0));
}
if (ext[1] === 'jpg' || ext[1] === 'gif' || ext[1] === 'tiff') {
$('#pad_cmt0').append(str.picture());
        $('#roleEnum').append(formElements.dropdown('role', 0, 0, 0));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0 , 0));
        $('#status').append(formElements.dropdown('status', 0, 0, 0));
}
if (ext[1] === 'mpeg' || ext[1] === 'avi' || ext[1] === 'mp3') {
$('#pad_cmt0').append(str.audio());
        $('#roleEnum').append(formElements.dropdown('role', 0, 0, 0));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0 , 0));
        $('#status').append(formElements.dropdown('status', 0, 0 , 0));
}
}
/*if(ext[1] === 'wav' || ext[1] === 'mp3') {
 $('#pad_cmt0').append(str.audio());
 }*/
id_r = 0;
}
if ($('#doc_eval').length === 1 && ($('#id_filen_v0').val() !== '' && typeof $('#id_filen_v0').val() !== 'undefined')) {
$('#roleEnum').remove();
        $('#roleEnum' + id_r).remove();
        $('#lang').remove();
        $('#status').remove();
        $('#doc_eval').remove();
        var ext = new Array();
        ext = $('#id_filen_v0').val().split('.');
        if (userPolicy === 'admin') {
if (ext[1] === 'pdf') {
$('#pad_cmt0').append(str.docadmin());
        $('#lang').append(formElements.dropdown('language', 0, 0, 0 ));
        $('#roleEnum').append(formElements.dropdown('role', 0, 0, 0 ));
        $('#roleEnum' + id_r).append(formElements.dropdown('role',id_r, 0, 0));
        $('#status').append(formElements.dropdown('status' ));
}
if (ext[1] === 'jpg' || ext[1] === 'gif' || ext[1] === 'tiff') {
$('#pad_cmt0').append(str.picture());
        $('#roleEnum').append(formElements.dropdown('role' ));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0, 0 ));
        $('#status').append(formElements.dropdown('status'  ));
}
if (ext[1] === 'mpeg' || ext[1] === 'avi' || ext[1] === 'mp3') {
$('#pad_cmt0').append(str.audio());
        $('#roleEnum').append(formElements.dropdown('role' ));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', id_r, 0, 0));
        $('#status').append(formElements.dropdown('status'));
}
}
if (userPolicy === 'student') {
if (ext[1] === 'pdf') {
$('#pad_cmt0').append(str.document());
        $('#lang').append(formElements.dropdown('language' ));
        $('#roleEnum').append(formElements.dropdown('role' ));
        $('#roleEnum' + id_r).append(formElements.dropdown('role',id_r , 0, 0));
        $('#status').append(formElements.dropdown('status' ));
}
if (ext[1] === 'jpg' || ext[1] === 'gif' || ext[1] === 'tiff') {
$('#pad_cmt0').append(str.picture());
        $('#roleEnum').append(formElements.dropdown('role' ));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', 0, 0, 0 ));
        $('#status').append(formElements.dropdown('status' ));
}
if (ext[1] === 'mpeg' || ext[1] === 'avi' || ext[1] === 'mp3') {
$('#pad_cmt0').append(str.audio());
        $('#roleEnum').append(formElements.dropdown('role' ));
        $('#roleEnum' + id_r).append(formElements.dropdown('role', id_r, 0, 0));
        $('#status').append(formElements.dropdown('status'));
}
}
/*if(ext[1] === 'wav' || ext[1] === 'mp3') {
 $('#pad_cmt0').append(str.audio());
 }*/
id_r = 0;
}
}
}
func_meta_l = function(workb, fields, field_vn, field_nn, field_r, itt, it, ext) {
field_def = fieldDefinition();
	console.log(ext[1]);
        if (userPolicy === 'admin') {
if (ext[1] === 'pdf') {
        $('#roleEnum' + itt + '_r').append(formElements.dropdown('role', itt, 0 , it));
        $('#sel_role' + it +'_'+ itt + '_r option[value='+ field_r + ']').attr("selected",true);
}
if (ext[1] === 'jpg' || ext[1] === 'gif' || ext[1] === 'tiff') {
       $('#roleEnum' + itt + '_r').append(formElements.dropdown('role', itt, 0, it));
        $('#sel_role'+ it +'_'+ itt + '_r option[value='+ field_r + ']').attr("selected",true);
}
if (ext[1] === 'mpeg' || ext[1] === 'avi' || ext[1] === 'mp3') {
        $('#roleEnum' + itt + '_r').append(formElements.dropdown('role', itt, 0, it));
        $('#sel_role'+ it +'_'+ itt + '_r option[value='+ field_r + ']').attr("selected",true);
}
}
if (userPolicy === 'student') {
if (ext[1] === 'pdf') {
       $('#roleEnum' + itt + '_r').append(formElements.dropdown('role', itt, 0, it));
        $('#sel_role'+ it +'_'+ itt + '_r option[value='+ field_r + ']').attr("selected",true);
}
if (ext[1] === 'jpg' || ext[1] === 'gif' || ext[1] === 'tiff') {
        $('#roleEnum' + itt + '_r').append(formElements.dropdown('role', itt, 0, it));
        $('#sel_role'+ it +'_'+ itt + '_r option[value='+ field_r + ']').attr("selected",true);
}
if (ext[1] === 'mpeg' || ext[1] === 'avi' || ext[1] === 'mp3') {
        $('#roleEnum' + itt + '_r').append(formElements.dropdown('role', itt, 0, it));
        $('#sel_role'+ it +'_'+ itt + '_r option[value='+ field_r + ']').attr("selected",true);
}
}
/*if(ext[1] === 'wav' || ext[1] === 'mp3') {
 $('#pad_cmt0').append(str.audio());
 }*/
	func_savInp(workb, fields, it, ext);
}
titleArr = new Array();
        func_addTitle = function(id_n) {
titleArr[id_n] = str.title();
        $('#desc_t').append(titleArr[id_n]);
        id_t++;
}
func_Title = function() {
$('#tt_del').click();
}
func_Title_l = function(itt) {
$('#tt_del' + itt).click();
}
func_delTitle = function(th) {
var id_n = $(th).val().split('_')[1];
        $('#title_f' + id_n).remove();
}
func_delTitle_l = function(id, th) {
		var id_n = $(th).attr('id').split('l')[1];
		console.log(id_n);
		$('#th_button' + id_n).remove();
        $('#m_title_r' + id_n).remove();
		if($('[id^=m_title_r]').length === 0) {
			$('#desc' + id).remove();
		}
}
authArr = new Array();
func_addAuthor = function(id_n, id_chk) {
authArr[id_n] = new Array();
        authArr[id_n][0] = str.auth();
        authArr[id_n][1] = formElements.dropdown('role', 0, 0, id_chk);
        $('#desc_a').append(authArr[id_n][0]);
        $('#roleEnum' + id_r).append(authArr[id_n][1]);
        id_r++;
}
func_addAuthor_r = function(id_n, id_chk) {
authArr[id_n] = new Array();
        authArr[id_n][0] = str.auth();
        authArr[id_n][1] = formElements.dropdown('role', 0, 1, id_chk);
        $('#desc_con' + id_chk).append(authArr[id_n][0]);
        $('#roleEnum' + id_rd + '_r').append(authArr[id_n][1]);
        id_rd++;
}
func_Author = function() {
$('#th_del').click();
}
func_delAuthor = function(th) {
var id_n = $(th).val().split('_')[1];
        $('#auth_f' + id_n).remove();
}
func_appd = function() {
$('.pad_mte').toggle();
}
func_val = function(id_chk) {
$('#id_filen_v0').val($('#id_fileup' + id_chk).val().replace(/C:\\fakepath\\/i, ''));
        func_meta(id_chk);
}
replaceall = function(str, replace, with_this)
{
var str_hasil = "";
        var temp;
        for (var i = 0; i < str.length; i++) // not need to be equal. it causes the last change: undefined..
{
if (str[i] == replace)
{
temp = with_this;
}
else
{
temp = str[i];
}

str_hasil += temp;
}

return str_hasil;
}
func_auto_sc_r = function(id_chk, val) {
if (val == 0 && $('#div_id' + id_chk + '_r').css('display') == 'none') {
$('#div_id' + id_chk + '_r').css('display', 'inline-block');
} else {
$('#div_id' + id_chk + '_r').css('display', 'none');
}
if (val == 1 && $('#div_rf1' + id_chk + '_r').css('display') == 'none') {
$('#div_rf1' + id_chk + '_r').css('display', 'inline-block');
} else {
$('#div_rf1' + id_chk + '_r').css('display', 'none');
}
}
func_auto_sc = function(id_chk, val) {
if (val == 0 && $('#div_id' + id_chk).css('display') == 'none') {
$('#div_id' + id_chk).css('display', 'inline-block');
} else {
$('#div_id' + id_chk).css('display', 'none');
}
if (val == 1 && $('#div_rf1' + id_chk).css('display') == 'none') {
$('#div_rf1' + id_chk).css('display', 'inline-block');
} else {
$('#div_rf1' + id_chk).css('display', 'none');
}
}
/* if(val == 1) {
 $('#id_rm_l' + id_chk).toggle();
 } */
func_msg = function(sts) {
switch (sts) {
case 0: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte Titel angeben (Pflichtfeld) </span>");
        break;
        case 1: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte Vornamen und Nachnamen angeben (Pflichtfeld)</span>");
        break;
        case 2: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte IDN-Nummer angeben (Pflichtfeld)</span>");
        break;
        case 3: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte Schlagwortkette angeben (Pflichtfeld) </span>");
        break;
        case 4: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte File einf&uuml;gen</span>");
        break;
        case 5: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte mehr Zeichen angeben</span>");
        break;
        case 6: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte Author angeben</span>");
        break;
        case 7: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte ersten Begutachter angeben</span>");
        break;
        case 8: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte zweiten Begutachter angeben</span>");
        break;
        case 9: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte Umfang der Dokuments in Blatt angeben</span>");
        break;
        case 10: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte L&auml;ndercode angeben</span>");
        break;
        case 11: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte Angabe Hochschulvermerk eintragen</span>");
        break;
        case 12: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte Kurzfassungen in deutsch und englisch eintragen</span>");
        break;
        case 13: $('#desc_rr').remove(); $('#msg_err').prepend("<span id='desc_rr'>Bitte das Erscheinungsdatum eingeben</span>");
        break;
}
}
func_save = function(workbench) {
/* $('[id^=id_fileup]').each(function() { 
 
 var filename = $(this).val().value.replace(/C:\\fakepath\\/i, '');
 var filesize = $(this).get(0).size;
 var hashedMD5 = md5(filename + filesize);
 
 var file = $.ajax({
 type: "POST",
 url: 'backend.php',
 data: {save:1},
 success: function(result) {
 },
 dataType: 'json'
 });
 // + Metadatapost
 // filesize = request.getResponseHeader("Content-Length");
 
 console.log(filename);
 console.log(filesize);
 console.log(hashedMD5);
 }
 }); */
// php request db if
// metadata
if ($('#id_title_0').val() !== '') {
if ($('#id_title_0').val().length !== 0) {
}
}
if ($('#id_fileup0').val().replace(/C:\\fakepath\\/i, '') !== '') {
}
fields.title.valArr[0] = {title: $('#id_title_0').val()};
        
filename = $('#id_fileup0').val().replace(/C:\\fakepath\\/i, '');
filesize = document.getElementById('id_fileup0').files[0].size;
if (($('#id_fileup0').val().split('.')[1] === 'pdf') && userPolicy === 'admin') { // admin doc
if ($('#verf_vn').val() !== '' && $('#verf_nn').val() !== '') {
if ($('#verf_vn').val().length > 0 && $('#verf_nn').val().length > 0) {
}
}
if ($('#idn_nr').val() !== '') {
}
if ($('#beg_1vn').val() !== '' && $('#beg_1nn').val() !== '') {
if ($('#beg_1vn').val().length > 0 && $('#beg_1nn').val().length > 0) {
}
}
if ($('#beg_2vn').val() !== '' && $('#beg_2nn').val() !== '') {
if ($('#beg_2vn').val().length > 0 && $('#beg_2nn').val().length > 0) {
}
}
if ($('#umfang').val() !== '') {
if ($('#umfang').val().length > 0) {
}
}
if ($('#m_date').val() !== '') {
if ($('#m_date').val().length > 0) {
}
}
if ($('#abs_deu').val() !== '' && $('#abs_eng').val() !== '') {
if ($('#abs_deu').val().length > 0 && $('#abs_eng').val().length > 0) {
}
}
if ($('#keyvalues').val() !== '') {
if ($('#keyvalues').val().length > 0) {
}
}
if ($('#cntrCode').val() !== '') {
if ($('#cntrCode').val().length > 0) {
}
}
if ($('#hsVerm').val() !== '') {
if ($('#hsVerm').val().length > 0) {
}
}
if ($('#illustr').val() !== '') {
if ($('#illustr').val().length > 0) {
}
}
if ($('#addid').val() !== '') {
if ($('#addid').val().length > 0) {
}
}
if ($('#angInh').val() !== '') {
if ($('#angInh').val().length > 0) {
}
}
if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {
if ($('#auth_vn').val().length > 0 && $('#auth_nn').val().length > 0) {
}
}

fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn').val(),
        surName : $('#verf_nn').val()
};
        fields.acNumber = $('#idn_nr').val();
        fields.evaluator.valArr[0] = {
		surName: $('#beg_1vn').val(),
	        givenName: $('#beg_1nn').val()
	}

fields.evaluator.valArr[1] = {
surName: $('#beg_2vn').val(),
        givenName: $('#beg_2nn').val()
}

	fields.nrSites = $('#umfang').val();
        fields.date = $('#sel_month').val() + ' ' + $('#m_date').val();
        fields.abstr.valArr[0] =
		{
		abs_deu: $('#abs_deu').val(),
		        abs_eng: $('#abs_eng').val()
		};
        fields.keywords.valArr[0] = {keyValues : $('#keyvalues').val(), keymots : $('#keymots').val()};
        fields.cntrCode = $('#cntrCode').val();
        fields.hsVerm = $('#hsVerm').val();
        fields.illustr = $('#illustr').val();
        fields.addid = $('#addid').val();
        fields.angInh = $('#angInh').val();
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang').val()];
var com = $('#sel_sts0').val();
        fields.status = {
		sts : types[fields['status'].type][com],
        stv : $('#sel_sts0').val()

};
        $('[id^=m_title_r]').each(function(t) {
if (parseInt($(this).attr('id').split('_r')[1]) > 0){
var id = parseInt($(this).attr('id').split('_r')[1]);
        if ($('#m_title_r' + (id)).val() !== '') {
fields.title.valArr[id + 1] =
		{
		title: $('#m_title_r' + (id)).val()
		};
}
}
});
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
        // fields.copyright = ;
        // fields.license = ;
}
if (($('#id_fileup0').val().split('.')[1] === 'jpg' || $('#id_fileup0').val().split('.')[1] === 'gif' || $('#id_fileup0').val().split('.')[1] === 'tiff' || $('#id_fileup0').val().split('.')[1] === 'mp3' || $('#id_fileup0').val().split('.')[1] === 'mpeg' || $('#id_fileup0').val().split('.')[1] === 'avi') && userPolicy === 'admin') { // admin doc
if ($('#verf_vn').val() !== '' && $('#verf_nn').val() !== '') {
if ($('#verf_vn').val().length > 0 && $('#verf_nn').val().length > 0) {
}
}
if ($('#m_date').val() !== '') {
if ($('#m_date').val().length > 0) {
}
}
if ($('#abs_deu').val() !== '') {
if ($('#abs_deu').val().length > 0) {
}
}
if ($('#keymots').val() !== '') {
if ($('#keymots').val().length > 0) {
}
}
if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {
if ($('#auth_vn').val().length > 0 && $('#auth_nn').val().length > 0) {
}
}
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn').val(),
        surName : $('#verf_nn').val()
};
        fields.date = $('#sel_month').val() + ' ' + $('#m_date').val();
        fields.abstr.valArr[0] =
		{
			fileDescr: $('#abs_deu').val()
		};
        fields.keywords.valArr[0] = {keymots : $('#keymots').val()};
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang').val()];
var com = $('#sel_sts0').val();
        fields.status = {
sts : types[fields['status'].type][com],
        stv : $('#sel_sts0').val()

};
fields.creator.value = $('#radio_chk').val();
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
}
if (($('#id_fileup0').val().split('.')[1] === 'pdf') && userPolicy === 'student') { // admin doc
if ($('#verf_vn').val() !== '' && $('#verf_nn').val() !== '') {
if ($('#verf_vn').val().length > 0 && $('#verf_nn').val().length > 0) {
}
}
if ($('#m_date').val() !== '') {
if ($('#m_date').val().length > 0) {
}
}
if ($('#abs_deu').val() !== '' && $('#abs_eng').val() !== '') {
if ($('#abs_deu').val().length > 0 && $('#abs_eng').val().length > 0) {
}
}

if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {
if ($('#auth_vn').val().length > 0 && $('#auth_nn').val().length > 0) {
}
}

fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn').val(),
        surName : $('#verf_nn').val()
};
        fields.acNumber = $('#idn_nr').val();
        fields.evaluator.valArr[0] = {
		surName: $('#beg_1vn').val(),
	        givenName: $('#beg_1nn').val()
	}

fields.evaluator.valArr[1] = {
surName: $('#beg_2vn').val(),
        givenName: $('#beg_2nn').val()
}

	fields.nrSites = $('#umfang').val();
        fields.date = $('#sel_month').val() + ' ' + $('#m_date').val();
        fields.abstr.valArr[0] =
		{
			abs_deu: $('#abs_deu').val(),
		        abs_eng: $('#abs_eng').val()
		};
        fields.keywords.valArr[0] = {keymots : $('#keymots').val()};
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang').val()];
var com = $('#sel_sts0').val();
        fields.status = {
sts : types[fields['status'].type][com],
        stv : $('#sel_sts0').val()

};
fields.creator.value = $('#radio_chk').val();
        $('[id^=m_title_r]').each(function(t) {
if (parseInt($(this).attr('id').split('_r')[1]) > 0){
var id = parseInt($(this).attr('id').split('_r')[1]);
        if ($('#m_title_r' + (id)).val() !== '') {
fields.title.valArr[id + 1] =
		{
		title: $('#m_title_r' + (id)).val()
		};
}
}
});
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
        // fields.copyright = ;
        // fields.license = ;
}
if (($('#id_fileup0').val().split('.')[1] === 'jpg' || $('#id_fileup0').val().split('.')[1] === 'gif' || $('#id_fileup0').val().split('.')[1] === 'tiff' || $('#id_fileup0').val().split('.')[1] === 'mp3' || $('#id_fileup0').val().split('.')[1] === 'mpeg' || $('#id_fileup0').val().split('.')[1] === 'avi') && userPolicy === 'student') { // admin doc
if ($('#verf_vn').val() !== '' && $('#verf_nn').val() !== '') {
if ($('#verf_vn').val().length > 0 && $('#verf_nn').val().length > 0) {
}
}
if ($('#m_date').val() !== '') {
if ($('#m_date').val().length > 0) {
}
}
if ($('#abs_deu').val() !== '') {
if ($('#abs_deu').val().length > 0) {
}
}
if ($('#keymots').val() !== '') {
if ($('#keymots').val().length > 0) {
}
}
if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {
if ($('#auth_vn').val().length > 0 && $('#auth_nn').val().length > 0) {
}
}
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn').val(),
        surName : $('#verf_nn').val()
};
        fields.date = $('#sel_month').val() + ' ' + $('#m_date').val();
        fields.abstr.valArr[0] =
		{
			fileDescr: $('#abs_deu').val()
		};
        fields.keywords.valArr[0] = {keymots : $('#keymots').val()};
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang').val()];
var com = $('#sel_sts0').val();
        fields.status = {
sts : types[fields['status'].type][com],
        stv : $('#sel_sts0').val()

};
fields.creator.value = $('#radio_chk').val();
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
}
func_save_meta(fields, 0);
}
func_save_b = function(workbench, id_chk, ext) {
if ((ext[1] === 'pdf') && userPolicy === 'admin') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#idn_nr_L' + id_chk + '_r').val() !== '') {
}
if ($('#beg_1vn_l' + id_chk + '_r').val() !== '' && $('#beg_1nn_l' + id_chk + '_r').val() !== '') {
if ($('#beg_1vn_l' + id_chk + '_r').val().length > 0 && $('#beg_1nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#beg_2vn_l' + id_chk + '_r').val() !== '' && $('#beg_2nn_l' + id_chk + '_r').val() !== '') {
if ($('#beg_2vn_l' + id_chk + '_r').val().length > 0 && $('#beg_2nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#umfang_l' + id_chk + '_r').val() !== '') {
if ($('#umfang_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l' + id_chk + '_r').val() !== '' && $('#abs_eng_l' + id_chk + '_r').val() !== '') {
if ($('#abs_deu_l' + id_chk + '_r').val().length > 0 && $('#abs_eng_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#keyvalues_l' + id_chk + '_r').val() !== '') {
if ($('#keyvalues_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#cntrCode_l' + id_chk + '_r').val() !== '') {
if ($('#cntrCode_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#hsVerm_l' + id_chk + '_r').val() !== '') {
if ($('#hsVerm_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#illustr_l' + id_chk + '_r').val() !== '') {
if ($('#illustr_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#addid_l' + id_chk + '_r').val() !== '') {
if ($('#addid_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#angInh_l' + id_chk + '_r').val() !== '') {
if ($('#angInh_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {

}
/*
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
*/
        fields.acNumber = $('#idn_nr' + id_chk + '_r').val();
        fields.evaluator.valArr[0] = {
		surName: $('#beg_1vn_l' + id_chk + '_r').val(),
	        givenName: $('#beg_1nn_l' + id_chk + '_r').val()
	}

fields.evaluator.valArr[1] = {
surName: $('#beg_2vn_l' + id_chk + '_r').val(),
        givenName: $('#beg_2nn_l' + id_chk + '_r').val()
}

	fields.nrSites = $('#umfang_l' + id_chk + '_r').val();
        fields.date = $('#sel_month').val() + ' ' + $('#m_date').val();
        fields.abstr.valArr[0] =
		{
		abs_deu: $('#abs_deu_l' + id_chk + '_r').val(),
		        abs_eng: $('#abs_eng' + id_chk + '_r').val()
		};
        fields.keywords.valArr[0] = {keyValues : $('#keyvalues' + id_chk + '_r').val(), keymots : $('#keymots').val()};
        fields.cntrCode = $('#cntrCode' + id_chk + '_r').val();
        fields.hsVerm = $('#hsVerm' + id_chk + '_r').val();
        fields.illustr = $('#illustr' + id_chk + '_r').val();
        fields.addid = $('#addid' + id_chk + '_r').val();
        fields.angInh = $('#angInh' + id_chk + '_r').val();
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum' + id_chk + '_r').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang' + id_chk + '_r').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang' + id_chk + '_r').val()];
 
        $('[id^=m_title_r]').each(function(t) {
if (parseInt($(this).attr('id').split('_r')[1]) > 0){
var id = parseInt($(this).attr('id').split('_r')[1]);
        if ($('#m_title_r' + (id)).val() !== '') {
fields.title.valArr[id + 1] =
		{
		title: $('#m_title_r' + (id)).val()
		};
}
}
});
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
        // fields.copyright = ;
        // fields.license = ;
}
if ((ext[1] === 'jpg' ||ext[1] === 'gif' || ext[1] === 'tiff' || ext[1] === 'mp3' || ext[1] === 'mpeg' || ext[1] === 'avi') && userPolicy === 'admin') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l' + id_chk + '_r').val() !== '') {
if ($('#abs_deu_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#keymots_l' + id_chk + '_r').val() !== '') {
if ($('#keymots_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {
}
/*
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
*/
        fields.date = $('#sel_month').val() + ' ' + $('#m_date_l' + id_chk + '_r').val();
        fields.abstr.valArr[0] =
		{
			fileDescr: $('#abs_deu_l' + id_chk + '_r').val()
		};
        fields.keywords.valArr[0] = {keymots : $('#keymots_l' + id_chk + '_r').val()};
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum' + id_chk + '_r').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang' + id_chk + '_r').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang' + id_chk + '_r').val()];
if($('#sel_sts' + id_chk).val() == 'entwurf') {
	fields.status = {
		sts : '1',
		stv : $('#status_l' + id_chk).val()

	};
} else {
	fields.status = {
		sts : '0',
		stv : $('#status_l' + id_chk).val()

	};
}
fields.creator.value = $('#radio_chk_l' + id_chk).val();
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
}
if ((ext[1] === 'pdf') && userPolicy === 'student') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l' + id_chk + '_r').val() !== '' && $('#abs_eng' + id_chk + '_r').val() !== '') {
if ($('#abs_deu_l' + id_chk + '_r').val().length > 0 && $('#abs_eng' + id_chk + '_r').val().length > 0) {
}
}

if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {
}
/*
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
*/
        fields.acNumber = $('#idn_nr' + id_chk + '_r').val();
        fields.evaluator.valArr[0] = {
		surName: $('#beg_1vn_l' + id_chk + '_r').val(),
	        givenName: $('#beg_1nn_l' + id_chk + '_r').val()
	}

fields.evaluator.valArr[1] = {
surName: $('#beg_2vn_l' + id_chk + '_r').val(),
        givenName: $('#beg_2nn_l' + id_chk + '_r').val()
}

	fields.nrSites = $('#umfang_l' + id_chk + '_r').val();
        fields.date = $('#sel_month').val() + ' ' + $('#m_date_l' + id_chk + '_r').val();
        fields.abstr.valArr[0] =
		{
			abs_deu: $('#abs_deu_l' + id_chk + '_r').val(),
		        abs_eng: $('#abs_eng' + id_chk + '_r').val()
		};
        fields.keywords.valArr[0] = {keymots : $('#keymots_l' + id_chk + '_r').val()};
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum' + id_chk + '_r').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang' + id_chk + '_r').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang' + id_chk + '_r').val()];
fields.status = {
sts :$('#sel_sts' + id_chk).val(),
        stv : $('#status_l' + id_chk).val()

};
fields.creator.value = $('#radio_chk_l' + id_chk).val();
        $('[id^=m_title_r]').each(function(t) {
if (parseInt($(this).attr('id').split('_r')[1]) > 0){
var id = parseInt($(this).attr('id').split('_r')[1]);
        if ($('#m_title_r' + (id)).val() !== '') {
fields.title.valArr[id + 1] =
		{
		title: $('#m_title_r' + (id)).val()
		};
}
}
});
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
        // fields.copyright = ;
        // fields.license = ;
}
if ((ext[1] === 'jpg' || ext[1] === 'gif' || ext[1] === 'tiff' || ext[1] === 'mp3' || ext[1] === 'mpeg' || ext[1] === 'avi') && userPolicy === 'admin') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l' + id_chk + '_r').val() !== '') {
if ($('#abs_deu_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#keymots_l' + id_chk + '_r').val() !== '') {
if ($('#keymots_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#auth_vn').val() !== '' && $('#auth_nn').val() !== '') {

}
/*
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
*/
        fields.date = $('#sel_month').val() + ' ' + $('#m_date_l' + id_chk + '_r').val();
        fields.abstr.valArr[0] =
		{
			fileDescr: $('#abs_deu_l' + id_chk + '_r').val()
		};
        fields.keywords.valArr[0] = {keymots : $('#keymots_l' + id_chk + '_r').val()};
        fields.contributor.valArr[1] =
		{
		role : $('#roleEnum' + id_chk + '_r').children().val(),
		        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
		        givenName : $('#auth_vn').val(),
		        surName : $('#auth_nn').val()
		};
        fields.language.keyVal[0] = $('#sel_lang' + id_chk + '_r').val();
        fields.language.keyVal[1] = types[fields['language'].type][$('#sel_lang' + id_chk + '_r').val()];
if($('#sel_sts' + id_chk).val() == 'entwurf') {
	fields.status = {
		sts : '1',
		stv : $('#status_l' + id_chk).val()

	};
} else {
	fields.status = {
		sts : '0',
		stv : $('#status_l' + id_chk).val()

	};
}
fields.creator.value = $('#radio_chk_l' + id_chk).val();
$('[id^=auth_f]').each(function(t) {
if (parseInt($(this).attr('id').split('_f')[1]) >= 0){
var id = parseInt($(this).attr('id').split('_f')[1]);
        if ($('#auth_vn' + id).val().length > 0 && $('#auth_nn' + id).val().length > 0) {
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

}
}
//fields.contributor[id] = name[id];
});
        fields.costs = 0;
}
func_save_meta(fields, 1, id_chk);
}
func_save_meta = function(fields_m, upd_chk, id) {
comment = "";
if(upd_chk === 0) {
		permit = $('#publish_btn_0').val();
        publish = $('#publish_btn_0').attr("class");
		 var perm = 'gesperrt';
        var perm_b = 0;
        var publ = 'nopublish';
        if ($('#publish_btn_0').val() == 'freigegeben') {
perm = 'freigegeben';
        perm_b = 1;
        publ = 'publish';
} else {
perm = 'gesperrt';
        perm_b = 0;
        publ = 'nopublish';
}
        var line_num = document.getElementById('textmsg_0').value.split("\n").length;
        var lines = new Array();
        var urlRegex = new RegExp("((http|https)(:\/\/))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(\/{1}[a-zA-Z0-9]+)*\/?", "i");
        lines = document.getElementById('textmsg_0').value.split("\n");
        var help_inner = new Array();
        for (var it_0 = 0; it_0 < line_num; it_0++) {
help_inner = lines[it_0].split(" ");
        for (var it_1 = 0; it_1 < help_inner.length; it_1++) {
if (urlRegex.test(help_inner[it_1])) {
help_inner[it_1] = '<a href=' + help_inner[it_1] + ' target="_blank">' + help_inner[it_1] + '</a>';
}
lines[it_0] = help_inner;
}
lines[it_0] = lines[it_0] + " ";
}
comment = lines.toString().replace(/\,/g, ' ');
        fields_m.description = comment;
        var lock_s = workbench;
        var date = new Date();
        var url = 'backend.php?save=storedoc';
        var req = new XMLHttpRequest();
        var fd = new FormData();
        fd.append('title', fields_m.title.valArr[0].title);
        fd.append('wbName', wbName);
        fd.append('workbench', lock_s);
        fd.append('action', '');
        fd.append('m_data', JSON.stringify(fields_m));
        fd.append('comment', comment);
        fd.append('permit', perm_b);
        fd.append('xmlreturn', 'false');
	fd.append('id_fileup', document.getElementById('id_fileup0').files[0]);
        fd.append('time', date.toLocaleString());
        fd.append('flag', flag);
        req.open('POST', url, false);
        req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
		list_wb(workbench);
		}
};
        req.send(fd);
        var visib = 'none';
        func_msg('x');
	    func_remMt();
		if ($('#mitte > div').length == 0) {
	$('#mitte').animate({
		width: '51%'
		});
		$('#mitte').append(str.cmp('', '', 'nopublish', 'visible'));
	}
		
} 
if(upd_chk === 1) {
	permit = $('#publish_btn_' + id).val();
        publish = $('#publish_btn_' + id).attr("class");
        comment = $('#div_id' + id + '_r').val();
        fields.description = comment;
        var perm = 'gesperrt';
        var perm_b = 0;
        var publ = 'nopublish';
        if ($('#publish_btn_0').val() == 'freigegeben') {
perm = 'freigegeben';
        perm_b = 1;
        publ = 'publish';
} else {
perm = 'gesperrt';
        perm_b = 0;
        publ = 'nopublish';
}
var workb = workbench;
        var date = new Date();
        var url = 'backend.php?list=finalUpdate&wb_ch=' + workb + '&id_chk=' + id + '';
        var req = new XMLHttpRequest();
        var fd = new FormData();
        fd.append('title',$('#id_title_' + id + '_r'));
        fd.append('wbName', wbName);
        fd.append('m_data', JSON.stringify(fields_m));
        fd.append('comment', comment);
        fd.append('permit', perm_b);
        fd.append('xmlreturn', 'false');
        fd.append('time', date.toLocaleString());
        fd.append('flag', flag);
        req.open('POST', url, false);
        req.onreadystatechange = function() {
if (req.readyState == 4 && req.status == 200) {
	list_wb(workbench);
	}
};
}
}
func_save_l = function(workben, fields, id_chk) {
/* $('[id^=id_fileup]').each(function() { 
 
 var filename = $(this).val().value.replace(/C:\\fakepath\\/i, '');
 var filesize = $(this).get(0).size;
 var hashedMD5 = md5(filename + filesize);
 
 var file = $.ajax({
 type: "POST",
 url: 'backend.php',
 data: {save:1},
 success: function(result) {
 },
 dataType: 'json'
 });
 // + Metadatapost
 // filesize = request.getResponseHeader("Content-Length");
 
 console.log(filename);
 console.log(filesize);
 console.log(hashedMD5);
 }
 }); */
// php request db if
// metadata
// console.log(fields.creator.value);
if ($('#id_title_' + id_chk + '_r').val() !== '') {
if ($('#id_title_' + id_chk + '_r').val().length !== 0) {
fields.title.valArr[0] = {title: $('#id_title_' + id_chk).val()};
        if ($('#id_filen_v' + id_chk + '_r').val()) {
filename = $('#id_filen_v' + id_chk + '_r').val();
} else {
func_msg(4, 'main');
}
} else {
func_msg(0, 'main');
}
} else {
func_msg(0, 'main');
}
if ((filename.split('.')[1] === 'pdf') && userPolicy === 'admin') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#idn_nr_l' + id_chk + '_r').val() !== '') {
}
if ($('#beg_1vn_l' + id_chk + '_r').val() !== 0 && $('#beg_1nn_l' + id_chk + '_r').val() !== 0) {
if ($('#beg_1vn_l' + id_chk + '_r').val().length > 0 && $('#beg_1nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#beg_2vn_l' + id_chk + '_r').val() !== '' && $('#beg_2nn_l' + id_chk + '_r').val() !== '') {
if ($('#beg_2vn_l' + id_chk + '_r').val().length > 0 && $('#beg_2nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#umfang_l' + id_chk + '_r').val() !== '') {
if ($('#umfang_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l' + id_chk + '_r').val() !== '' && $('#abs_eng_l' + id_chk + '_r').val() !== '') {
if ($('#abs_deu_l' + id_chk + '_r').val().length > 0 && $('#abs_eng_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#keyvalues_l' + id_chk + '_r').val() !== '') {
if ($('#keyvalues_l' + id_chk + '_r').val().length > 0) {
}
}
/*
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
*/
fields.date = $('#sel_month_l' + id_chk + '_r').val() + ' ' + $('#m_date_l' + id_chk + '_r').val();      
fields.acNumber = $('#idn_nr_l' + id_chk + '_r').val();

fields.evaluator.valArr[0] = {
surName: $('#beg_1vn_l' + id_chk + '_r').val(),
        givenName: $('#beg_1nn_l' + id_chk + '_r').val()
}

fields.evaluator.valArr[1] = {
surName: $('#beg_2vn_l' + id_chk + '_r').val(),
        givenName: $('#beg_2nn_l' + id_chk + '_r').val()
}
var com = '';
if($('#status_l' + id_chk + '_r').val() === 'entwurf') {
	com = '1';
	fields.status = {
sts :com,
        stv : $('#status_l' + id_chk + '_r').val()

};
} else {
	com = '0';
	fields.status = {
sts : com,
        stv : $('#status_l' + id_chk + '_r').val()

};
}

fields.nrSites = $('#umfang_l' + id_chk + '_r').val();
        
fields.date =  $('#sel_month_l' + id_chk + '_r').val() + ' ' + $('#m_date_l' + id_chk + '_r').val();
       
fields.abstr.valArr[0] =
{
	abs_deu: $('#abs_deu_l' + id_chk + '_r').val(),
        abs_eng: $('#abs_eng_l' + id_chk + '_r').val()
};
       
fields.keywords.valArr[0] = {keyValues : $('#keyvalues_l' + id_chk + '_r').val(), keymots : $('#keymots_l' + id_chk + '_r').val()};
        
fields.cntrCode = $('#cntrCode_l' + id_chk + '_r').val();
       

fields.hsVerm = $('#hsVerm_l' + id_chk + '_r').val();
       
fields.illustr = $('#illustr_l' + id_chk + '_r').val();
        
fields.addid = $('#addid_l' + id_chk + '_r').val();
        
fields.angInh = $('#angInh_l' + id_chk + '_r').val();
        
fields.contributor.valArr[1] =
{
role : $('#roleEnum' + id_chk + '_r').children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
        givenName : $('#auth_vn').val(),
        surName : $('#auth_nn').val()
};
$('[id^=m_title_r]').each(function(t) {

var id = parseInt($(this).attr('id').split('_r')[1]);
fields.title.valArr[id + 1] =
{
title: $('#m_title_r' + (id)).val()
};

});
        $('[id^=auth_l]').each(function(t) {

var id = parseInt($(this).attr('id').split('_l')[1]);
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

//fields.contributor[id] = name[id];
});
        fields.costs = 0;
        // fields.copyright = ;
        // fields.license = ;

}
if ((filename.split('.')[1] === 'jpg' || filename.split('.')[1].split('.')[1] === 'gif' || filename.split('.')[1].split('.')[1] === 'tiff' || filename.split('.')[1].split('.')[1] === 'mp3' || filename.split('.')[1].split('.')[1] === 'mpeg' || filename.split('.')[1].split('.')[1] === 'avi') && userPolicy === 'admin') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l'+ id_chk + '_r').val() !== '') {
if ($('#abs_deu_l'+ id_chk + '_r').val().length > 0) {
}
}
if ($('#keymots_l' + id_chk + '_r').val() !== '') {
if ($('#keymots_l' + id_chk + '_r').val().length > 0) {
}
}

fields.contributor.valArr[0] =
{
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
fields.date =  $('#m_day' + id_chk + '_r').val() + ' ' + $('#sel_month_l' + id_chk + '_r').val() + ' ' + $('#m_date_l' + id_chk + '_r').val();
       
fields.abstr.valArr[0] =
{
fileDescr: $('#abs_deu_l' + id_chk + '_r').val()
};
       
fields.keywords.valArr[0] = {keymots : $('#keymots_l' + id_chk + '_r').val()};
        
fields.contributor.valArr[1] =
{
role : $('#roleEnum' + id_chk + '_r').children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
        givenName : $('#auth_vn').val(),
        surName : $('#auth_nn').val()
};
        $('[id^=auth_l]').each(function(t) {

var id = parseInt($(this).attr('id').split('_l')[1]);
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

//fields.contributor[id] = name[id];
});
        fields.costs = 0;
        // fields.copyright = ;
        // fields.license = ;

}
if ((filename.split('.')[1] === 'pdf') && userPolicy === 'student') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#idn_nr_l' + id_chk + '_r').val() !== '') {
}
if ($('#beg_1vn_l' + id_chk + '_r').val() !== 0 && $('#beg_1nn_l' + id_chk + '_r').val() !== 0) {
if ($('#beg_1vn_l' + id_chk + '_r').val().length > 0 && $('#beg_1nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#beg_2vn_l' + id_chk + '_r').val() !== '' && $('#beg_2nn_l' + id_chk + '_r').val() !== '') {
if ($('#beg_2vn_l' + id_chk + '_r').val().length > 0 && $('#beg_2nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#umfang_l' + id_chk + '_r').val() !== '') {
if ($('#umfang_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l' + id_chk + '_r').val() !== '') {
if ($('#abs_deu_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#keyvalues_l' + id_chk + '_r').val() !== '') {
if ($('#keyvalues_l' + id_chk + '_r').val().length > 0) {
}
}
/*
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
*/
fields.evaluator.valArr[0] = {
surName: $('#beg_1vn_l' + id_chk + '_r').val(),
        givenName: $('#beg_1nn_l' + id_chk + '_r').val()
}

fields.evaluator.valArr[1] = {
surName: $('#beg_2vn_l' + id_chk + '_r').val(),
        givenName: $('#beg_2nn_l' + id_chk + '_r').val()
}

fields.nrSites = $('#umfang_l' + id_chk + '_r').val();
        
fields.date = $('#sel_month_l' + id_chk + '_r').val() + ' ' + $('#m_date').val();
       
fields.abstr.valArr[0] =
{
	abs_deu: $('#abs_deu_l' + id_chk + '_r').val(),
        abs_eng: $('#abs_eng_l' + id_chk + '_r').val()
};
       
fields.keywords.valArr[0] = {keyValues : $('#keyvalues_l' + id_chk + '_r').val(), keymots : $('#keymots_l' + id_chk + '_r').val()};
        
fields.contributor.valArr[1] =
{
role : $('#roleEnum' + id_chk + '_r').children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
        givenName : $('#auth_vn').val(),
        surName : $('#auth_nn').val()
};
$('[id^=m_title_r]').each(function(t) {

var id = parseInt($(this).attr('id').split('_r')[1]);
fields.title.valArr[id + 1] =
{
title: $('#m_title_r' + (id)).val()
};

});
        $('[id^=auth_l]').each(function(t) {

var id = parseInt($(this).attr('id').split('_l')[1]);
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

//fields.contributor[id] = name[id];
});
 	// fields.copyright = ;
        // fields.license = ;
        fields.costs = 0;
}     

if ((filename.split('.')[1] === 'jpg' || filename.split('.')[1].split('.')[1] === 'gif' || filename.split('.')[1].split('.')[1] === 'tiff' || filename.split('.')[1].split('.')[1] === 'mp3' || filename.split('.')[1].split('.')[1] === 'mpeg' || filename.split('.')[1].split('.')[1] === 'avi') && userPolicy === 'student') { // admin doc
if ($('#verf_vn_l' + id_chk + '_r').val() !== '' && $('#verf_nn_l' + id_chk + '_r').val() !== '') {
if ($('#verf_vn_l' + id_chk + '_r').val().length > 0 && $('#verf_nn_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#m_date_l' + id_chk + '_r').val() !== '') {
if ($('#m_date_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#abs_deu_l' + id_chk + '_r').val() !== '') {
if ($('#abs_deu_l' + id_chk + '_r').val().length > 0) {
}
}
if ($('#keymots_l' + id_chk + '_r').val() !== '') {
if ($('#keymots_l' + id_chk + '_r').val().length > 0) {
}
}
/*
fields.contributor.valArr[0] =
{
role : 46,
        roleVal : types[fields['role'].type]['46'],
        givenName : $('#verf_vn_l' + id_chk + '_r').val(),
        surName : $('#verf_nn_l' + id_chk + '_r').val()
};
 */      
fields.date = $('#sel_month_l' + id_chk + '_r').val() + ' ' + $('#m_date_l' + id_chk + '_r').val();
       
fields.abstr.valArr[0] =
{
	fileDescr: $('#abs_deu_l' + id_chk + '_r').val()
};
       
fields.keywords.valArr[0] = {keymots : $('#keymots_l' + id_chk + '_r').val()};
        
fields.contributor.valArr[1] =
{
role : $('#roleEnum' + id_chk + '_r').children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id_chk + '_r').children().val()],
        givenName : $('#auth_vn').val(),
        surName : $('#auth_nn').val()
};
        $('[id^=auth_l]').each(function(t) {

var id = parseInt($(this).attr('id').split('_l')[1]);
fields.contributor.valArr[id + 2] =
{
role: $('#roleEnum' + id).children().val(),
        roleVal : types[fields['role'].type][$('#roleEnum' + id).children().val()],
        givenName : $('#auth_vn' + id).val(),
        surName : $('#auth_nn' + id).val()
};

//fields.contributor[id] = name[id];
});
        fields.costs = 0;
        // fields.copyright = ;
        // fields.license = ;
}
	func_save_meta(fields, 0);
}
func_dowl = function(th, id_chk, val) {
if (val == 0) {
var url = 'backend.php?dwnl=download';
        var req = new XMLHttpRequest();
        var fd = new FormData();
        window.location = (url + '&id=' + id_chk);
        /*
         fd.append('id', id_chk);			    
         req.open('POST',url,false);
         req.onreadystatechange = function() {
         if (req.readyState == 4 && req.status == 200) {
         
         }
         };
         req.send(fd);
         */
}

/*if(val == 1) {
 for(var it_l = 0; it_l < id_ls_m.length; it_l++) {
 // get Files php check if several in phaidra
 if(chk[it_l] == 0) {
 console.log(id_ls_m[it_l]);
 }
 }
 }*/
}
dataObj = new Array();
        list_wb = function(workb) {
var url = "backend.php?list=workbenches";
        $.ajax({
type: 'POST',
        url: url,
        dataType: 'json',
        success: function(data) {
$('#nav_wb > div').remove();
        if (data.length !== 0) {
$('#nav_wb').css('border', '1px solid white');
        if (data.length >= 1) {
for (var i = 0; i < data.length; i++) {
$('#nav_wb').append("<div id='wbm2_div' class='spalte' onMouseover='func_sWb()' onMouseout='func_cWb()' onclick='func_getWb(" + data[i].workbench + ");' ondblclick='func_dcl(" + data[i].workbench + ")'>" +
        "<input title='Titel des Projekts eintragen' readonly='readonly' onkeypress = 'enterPressed(event, " + (data[i].workbench) + ", 1);' id='wb_id" + data[i].workbench + "' class='wb_name' name='workbench_value' value='" + data[i].wbName + "'></input>" +
        "</div>");
}
}
}
}
});
        list_s(workb, 0);
}
list_s = function(workb, editMode) {
if(editMode === 2) {
	func_remMt();
}
        if (editMode === 0) {

if (userPolicy === 'admin') {
var url = 'backend.php?list=components&wb_ch=' + workb + '';
        cmpObj = new Array();
        func_remWb();
        // func_remMt();
        $.ajax({
type: 'POST',
        url: url,
        dataType: 'json',
        success: function(data) {
for (var i = 0; i < data.length; i++) {
if (workb == data[i].workbench) {
var date = data[i].timestamp.replace(' ', '  ');
        date.replace('  ', ' ');
        var visib = 'none';
        var perm = 'gesperrt';
        var publ = 'nopublish';
        if (data[i].boolfree == 1) {
perm = 'freigegeben';
        publ = 'publish';
}
$('#links').append("<div id='pad_cmt_d" + data[i].cmpid + "' class='spalte pad_cm'>" +
        "<form class='msgForm' name='file_form' id='cmp_" + data[i].cmpid + "'action='#' enctype='multipart/form-data' method='post'>" +
        "<input type='hidden' id='id_val_" + data[i].cmpid + "' value=1 />" +
        "<input type='hidden' id='id_new_" + data[i].cmpid + "' value=1 />" +
        "<input type='hidden' id='idnr_" + data[i].cmpid + "' value='" + data[i].cmpid + "' />" +
        "<input type='hidden' name='save' value=1></input>" +
        "<div id='m_div' class='spalte'>" +
        "<div id='t_div_l' class='spalte'>" +
        "<div>" +
        "<span id='desc'> Dokumententitel </span>" +
        "<input title='Titel des gespeicherten Dokuments' id='id_title_" + data[i].cmpid + "' readonly='readonly' class='title_mte' name='titel' value='" + data[i].titel + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Titel der Datei </span>" +
        "<input title='Name der eingebundenen Datei' id='id_filen_v"+ data[i].cmpid +"' readonly='readonly' class='filen' name='filename' value='" + data[i].filename + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibungsfeld / Kommentar </span>" +
        "<div class='pad_divt' id='div_id" + data[i].cmpid + "' readonly='readonly'>" + data[i].comment + "</div>" +
        "<input type='hidden' id='div_rf2" + data[i].cmpid + "' value=''></input>" +
        "<div class='rm_div' id='id_rm_c" + data[i].cmpid + "' readonly='readonly' onclick='func_auto_sc(" + data[i].cmpid + ", 0)'>" +
        "<span id='desc_2m'> Beschreibung / Kommentar lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Zeitpunkt der Erstellung </span>" +
        "<input class='md_nl' type='text' id='time_"+data[i].cmpid+"' name='time' readonly='readonly' title='origin timestamp' value='" + data[i].timestamp + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibung der Daten des Inhalts </span>" +
        "<input type='hidden' id='div_rfm" + data[i].cmpid + "' value=''></input>" +
        "<div class='rm_div' id='id_rm_m" + data[i].cmpid + "' readonly='readonly' onclick='func_auto_sc(" + data[i].cmpid + ", 1)'>" +
        "<span id='desc_2m'> Daten des Inhalts lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div id='p_div1' class='spalte'>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "<input class='" + publ + "' id='publish_btn_" + data[i].cmpid + "' type='button' name='freigabe' value='" + perm + "'title='Inhaltskomponente f&uuml;r andere Nutzer sperren oder freigeben' onclick='toggle_publish(" + data[i].cmpid + ", 1);'></input>" +
        "</div>" +
        "<div id='p_div2' class='spalte'>" +
        "<span id='desc'>&nbsp;</span>" +
        "<input class='download_v' type='button' value='download' id='id_dwnl" + data[i].cmpid + "' name='download' title='Herunterladen der Datei' onclick='func_dowl(this, " + data[i].cmpid + " , 0);'></input>" +
        "</div>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<input class='edit_v' type='button' value='editieren' id='id_red" + data[i].cmpid + "' name='reedit' title='weiteres Editieren der Felder' onclick='func_reedit(" + data[i].workbench + ", " + data[i].cmpid + ");'></input>" +
        "</div>" +
        "<div>" +
        "</div>" +
        "</form>" +
        "<div class='pad_ref' id='div_rf1" + data[i].cmpid + "' readonly='readonly'></div>" +
        "</div>");
        fld = new Array();
        fld[i] = JSON.parse(data[i].m_data);
if (data[i].typid === 'pdf') {
$('#div_rf1' + data[i].cmpid).append(str.docadmin_l(  fld[i], data[i].cmpid, 0));
for(var itt = 0; itt < fld[i].title.valArr.length; itt++) {
if( fld[i].title.valArr[itt] !== null) {
if(fld[i].title.valArr[itt].title !== '') {
	if(itt === 0) {
		$('#desc_ut' + data[i].cmpid).append("<div><span class='desc_cl' id='desc" + data[i].cmpid +"'> Untertitel / weitere Titel </span></div>");
	}
	$('#desc_ut' + data[i].cmpid).append(str.ut_l(fld[i].title.valArr[itt].title, data[i].cmpid,itt,0));
}
}
}
for(var itt = 1; itt < fld[i].contributor.valArr.length; itt++) {
if( fld[i].contributor.valArr[itt] !== null) {
if(fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
	$('#desc_con' + data[i].cmpid).append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if(fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
	$('#desc_con' + data[i].cmpid).append(str.auth_l(workb, fld,  fld[i].contributor.valArr[itt].givenName,fld[i].contributor.valArr[itt].surName,fld[i].contributor.valArr[itt] , 0, 0, data[i].typid));
	$('#desc_con' + data[i].cmpid).append("<div id='desc'>&nbsp;</div></div></div>");
}
}
}
}
if (data[i].typid === 'jpg' || data[i].typid === 'gif' || data[i].typid === 'tiff') {
$('#div_rf1' + data[i].cmpid).append(str.picture_l(  fld[i], data[i].cmpid, 0));
        for (var itt = 1; itt < fld[i].contributor.valArr.length; itt++) {
if (fld[i].contributor.valArr[itt] !== null) {    
if (fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
$('#desc_con' + data[i].cmpid).append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}

if (fld[i].contributor.valArr[itt].givenName !== '' && fld[i].contributor.valArr[itt].surName !== '') {
$('#desc_con' + data[i].cmpid).append(str.auth_l(workb, fld,  fld[i].contributor.valArr[itt].givenName, fld[i].contributor.valArr[itt].surName, fld[i].contributor.valArr[itt] , 0, 0, data[i].typid));
        $('#desc_con' + data[i].cmpid).append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
}
if (data[i].typid === 'mpeg' || data[i].typid === 'avi' || data[i].typid === 'mp3') {
$('#div_rf1' + data[i].cmpid).append(str.audio_l(  fld[i], data[i].cmpid, 1));
        for (var itt = 1; itt < fld[i].contributor.valArr.length; itt++) {
if (fld[i].contributor.valArr[itt] !== null) {
if (fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
$('#desc_con' + data[i].cmpid).append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}

if (fld[i].contributor.valArr[itt].givenName !== '' && fld[i].contributor.valArr[itt].surName !== '') {
$('#desc_con' + data[i].cmpid).append(str.auth_l(workb, fld,  fld[i].contributor.valArr[itt].givenName, fld[i].contributor.valArr[itt].surName, fld[i].contributor.valArr[itt] , 0, 0, data[i].typid));
        $('#desc_con' + data[i].cmpid).append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
}
}
}
}
});
}
}
if (editMode === 0) {
if (userPolicy === 'student') {
var url = 'backend.php?list=components&wb_ch=' + workb + '';
        cmpObj = new Array();
        func_remWb();
        $.ajax({
type: 'POST',
        url: url,
        dataType: 'json',
        success: function(data) {
for (var i = 0; i < data.length; i++) {
if (workb == data[i].workbench) {
var date = data[i].timestamp.replace(' ', '  ');
        date.replace('  ', ' ');
        var visib = 'none';
        var perm = 'gesperrt';
        var publ = 'nopublish';
        if (data[i].boolfree == 1) {
perm = 'freigegeben';
        publ = 'publish';
}
$('#links').append("<div id='pad_cmt_d" + data[i].cmpid + "' class='spalte pad_cm'>" +
        "<form class='msgForm' name='file_form' id='cmp_" + data[i].cmpid + "'action='#' enctype='multipart/form-data' method='post'>" +
        "<input type='hidden' id='id_val_" + data[i].cmpid + "' value=1 />" +
        "<input type='hidden' id='id_new_" + data[i].cmpid + "' value=1 />" +
        "<input type='hidden' id='idnr_" + data[i].cmpid + "' value='" + data[i].cmpid + "' />" +
        "<input type='hidden' name='save' value=1></input>" +
        "<div id='m_div' class='spalte'>" +
        "<div id='t_div_l' class='spalte'>" +
        "<div>" +
        "<span id='desc'> Dokumententitel </span>" +
        "<input title='Titel des gespeicherten Dokuments' id='id_title_" + data[i].cmpid + "' readonly='readonly' class='title_mte' name='titel' value='" + data[i].titel + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Titel der Datei </span>" +
        "<input title='Name der eingebundenen Datei' id='id_filen_v"+ data[i].cmpid +"' readonly='readonly' class='filen' name='filename' value='" + data[i].filename + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibungsfeld / Kommentar </span>" +
        "<div class='pad_divt' id='div_id" + data[i].cmpid + "' readonly='readonly'>" + data[i].comment + "</div>" +
        "<input type='hidden' id='div_rf2" + data[i].cmpid + "' value=''></input>" +
        "<div class='rm_div' id='id_rm_c" + data[i].cmpid + "' readonly='readonly' onclick='func_auto_sc(" + data[i].cmpid + ", 0)'>" +
        "<span id='desc_2m'> Beschreibung / Kommentar lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Zeitpunkt der Erstellung </span>" +
        "<input class='md_nl' id='time_"+data[i].cmpid+"' type='text' name='time' readonly='readonly' title='origin timestamp' value='" + data[i].timestamp + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibung der Daten des Inhalts </span>" +
        "<input type='hidden' id='div_rfm" + data[i].cmpid + "' value=''></input>" +
        "<div class='rm_div' id='id_rm_m" + data[i].cmpid + "' readonly='readonly' onclick='func_auto_sc(" + data[i].cmpid + ", 1)'>" +
        "<span id='desc_2m'> Daten des Inhalts lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div id='p_div1' class='spalte'>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "<input class='" + publ + "' id='publish_btn_" + data[i].cmpid + "' type='button' name='freigabe' value='" + perm + "'title='Inhaltskomponente f&uuml;r andere Nutzer sperren oder freigeben' onclick='toggle_publish(" + data[i].cmpid + ", 1);'></input>" +
        "</div>" +
        "<div id='p_div2' class='spalte'>" +
        "<span id='desc'>&nbsp;</span>" +
        "<input class='download_v' type='button' value='download' id='id_dwnl" + data[i].cmpid + "' name='download' title='Herunterladen der Datei' onclick='func_dowl(this, " + data[i].cmpid + " , 0);'></input>" +
        "</div>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<input class='edit_v' type='button' value='editieren' id='id_red" + data[i].cmpid + "' name='reedit' title='weiteres Editieren der Felder' onclick='func_reedit(" + data[i].workbench + ", "  + data[i].cmpid + ");'></input>" +
        "</div>" +
        "<div>" +
        "</div>" +
        "</form>" +
        "<div class='pad_ref' id='div_rf1" + data[i].cmpid + "' readonly='readonly'></div>" +
        "</div>");
        fld = new Array();
        fld[i] = JSON.parse(data[i].m_data);
if (data[i].typid === 'pdf') {
$('#div_rf1' + data[i].cmpid).append(str.document_l(  fld[i], data[i].cmpid, 0));
for(var itt = 0; itt < fld[i].title.valArr.length; itt++) {
if( fld[i].title.valArr[itt] !== null) {
if(fld[i].title.valArr[itt].title !== '') {
	if(itt === 0) {
		$('#desc_ut' + data[i].cmpid).append("<div><span class='desc_cl' id='desc" + data[i].cmpid +"'> Untertitel / weitere Titel </span></div>");
	}
	$('#desc_ut' + data[i].cmpid).append(str.ut_l(fld[i].title.valArr[itt].title, data[i].cmpid, itt,0));
}
}
}
for(var itt = 1; itt < fld[i].contributor.valArr.length; itt++) {
if( fld[i].contributor.valArr[itt] !== null) {
if(fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
	$('#desc_con' + data[i].cmpid).append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if(fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
	$('#desc_con' + data[i].cmpid).append(str.auth_l(workb, fld,  fld[i].contributor.valArr[itt].givenName,fld[i].contributor.valArr[itt].surName,fld[i].contributor.valArr[itt] , 0, 0, data[i].typid));
	$('#desc_con' + data[i].cmpid).append("<div id='desc'>&nbsp;</div></div></div>");
}
}
}
}
if (data[i].typid === 'jpg' || data[i].typid === 'gif' || data[i].typid === 'tiff') {
$('#div_rf1' + data[i].cmpid).append(str.picture_l(  fld[i], data[i].cmpid, 0));
        for (var itt = 1; itt < fld[i].contributor.valArr.length; itt++) {
if (fld[i].contributor.valArr[itt] !== null) {    
if (fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
$('#desc_con' + data[i].cmpid).append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}

if (fld[i].contributor.valArr[itt].givenName !== '' && fld[i].contributor.valArr[itt].surName !== '') {
$('#desc_con' + data[i].cmpid).append(str.auth_l(workb, fld,  fld[i].contributor.valArr[itt].givenName, fld[i].contributor.valArr[itt].surName, fld[i].contributor.valArr[itt] , 0, 0, data[i].typid));
        $('#desc_con' + data[i].cmpid).append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
}
if (data[i].typid === 'mpeg' || data[i].typid === 'avi' || data[i].typid === 'mp3') {
$('#div_rf1' + data[i].cmpid).append(str.audio_l(  fld[i], data[i].cmpid, 0));
        for (var itt = 1; itt < fld[i].contributor.valArr.length; itt++) {
if (fld[i].contributor.valArr[itt] !== null) {
if (fld[i].contributor.valArr[1].givenName !== '' && fld[i].contributor.valArr[1].surName !== '') {
$('#desc_con' + data[i].cmpid).append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}

if (fld[i].contributor.valArr[itt].givenName !== '' && fld[i].contributor.valArr[itt].surName !== '') {
$('#desc_con' + data[i].cmpid + 'r_').append(str.auth_l(workb, fld,  fld[i].contributor.valArr[itt].givenName, fld[i].contributor.valArr[itt].surName, fld[i].contributor.valArr[itt] , 0, 0, data[i].typid));
        $('#desc_con' + data[i].cmpid + 'r_').append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
}
}
}
}
});
}
}
if ($('#mitte > div').length == 0) {
	$('#mitte').animate({
		width: '51%'
		});
		$('#mitte').append(str.cmp('', '', 'nopublish', 'visible'));
	}
}
func_savInp = function(workben, fields_m, id, ext) {
	
	permit = $('#publish_btn_' + id).val();
        publish = $('#publish_btn_' + id).attr("class");
        comment = $('#div_id' + id).val();
        fields.description = comment;
        var perm = 'gesperrt';
        var perm_b = 0;
        var publ = 'nopublish';
        if ($('#publish_btn_' + id).val() == 'freigegeben') {
perm = 'freigegeben';
        perm_b = 1;
        publ = 'publish';
} else {
perm = 'gesperrt';
        perm_b = 0;
        publ = 'nopublish';
}
	
	func_save_b(workb, id, ext);
	var workb = workben;
	var lock_s = workbench;
        var date = new Date();
        var url = 'backend.php?list=finalUpdate&wb_ch=' + workb + '&id_chk=' + id + '';
        var req = new XMLHttpRequest();
        var fd = new FormData();
        fd.append('title', $('#id_title_' + id).val());
        fd.append('wbName', wbName);
        fd.append('workbench', lock_s);
        fd.append('action', '');
        fd.append('m_data', JSON.stringify(fields_m));
        fd.append('comment', comment);
        fd.append('permit', perm_b);
        fd.append('xmlreturn', 'false');
        // fd.append('id_fileup', document.getElementById('id_fileup0').files[0]);
        fd.append('time', date.toLocaleString());
        fd.append('flag', flag);
        req.open('POST', url, false);
        req.onreadystatechange = function() {
if (req.readyState == 4 && req.status == 200) {
	list_wb(workbench);
	}
};
        req.send(fd);
        var visib = 'none';
        func_msg('x');
        ixx === true;
}
list = function(workb, cmpid) {
var url = 'backend.php?list=components&wb_ch=' + workb + '';
        cmpObj = new Array();
        func_remWb();
        // func_remMt();
        $.ajax({
type: 'POST',
        url: url,
        dataType: 'json',
        success: function(data) {
for (var i = 0; i < data.length; i++) {
if (cmpid == data[i].cmpid) {
	var data = data[i];
if (userPolicy === 'admin') {
var date = data.timestamp.replace(' ', '  ');
        date.replace('  ', ' ');
        var visib = 'none';
        var perm = 'gesperrt';
        var publ = 'nopublish';
        if (data.boolfree == 1) {
perm = 'freigegeben';
        publ = 'publish';
}
func_remMt();
$('#mitte').append("<div id='pad_cmt_d" + data.cmpid +"_r' class='spalte pad_cm'>" +
        "<form class='msgForm' name='file_form' id='cmp_" + data.cmpid +"_r'action='#' enctype='multipart/form-data' method='post'>" +
        "<input type='hidden' id='id_val_" + data.cmpid +"_r' value=1 />" +
        "<input type='hidden' id='id_new_" + data.cmpid +"_r' value=1 />" +
        "<input type='hidden' id='idnr_" + data.cmpid +"_r' value='" + data.cmpid +"_r' />" +
        "<input type='hidden' name='save' value=1></input>" +
        "<div id='m_div' class='spalte'>" +
        "<div id='t_div_l' class='spalte'>" +
        "<div>" +
        "<span id='desc'> Dokumententitel </span>" +
        "<input title='Titel des gespeicherten Dokuments' id='id_title_" + data.cmpid +"_r' class='title_mte' name='titel' value='" + data.titel + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Titel der Datei </span>" +
        "<input title='Name der eingebundenen Datei' id='id_filen_v"+ data.cmpid +"_r' readonly='readonly' class='filen' name='filename' value='" + data.filename + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibungsfeld / Kommentar </span>" +
        "<textarea class='pad_divt' id='div_id" + data.cmpid +"_r'>" + data.comment + "</textarea>" +
        "<input type='hidden' id='div_rf2" + data.cmpid +"_r' value=''></input>" +
        "<div class='rm_div' id='id_rm_c" + data.cmpid +"_r'  onclick='func_auto_sc_r(" + data.cmpid + ", 0)'>" +
        "<span id='desc_2m'> Beschreibung / Kommentar lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Zeitpunkt der Erstellung </span>" +
        "<input class='md_nl' type='text' id='time_"+data.cmpid+"_r' name='time' title='origin timestamp' readonly='readonly' value='" + data.timestamp + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibung der Daten des Inhalts </span>" +
        "<input type='hidden' id='div_rfm" + data.cmpid +"_r' value=''></input>" +
        "<div class='rm_div' id='id_rm_m" + data.cmpid +"_r' onclick='func_auto_sc_r(" + data.cmpid + ", 1)'>" +
        "<span id='desc_2m'> Daten des Inhalts lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div id='p_div1' class='spalte'>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "<input class='" + publ + "' id='publish_btn_" + data.cmpid +"_r' type='button' name='freigabe' value='" + perm + "'title='Inhaltskomponente f&uuml;r andere Nutzer sperren oder freigeben' onclick='toggle_publish(" + data.cmpid + ", 1);'></input>" +
        "</div>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<input class='edit_v' type='button' value='r&uuml;ckg&auml;ngig' id='id_red" + data.cmpid +"_r' name='reedit' title='weiteres Editieren der Felder' onclick='list_s(" + data.workbench + ", 2);'></input>" +
        "<div id='desc'>&nbsp;</div>" +
        "<input class='update_v' type='button' value='update' id='id_update" + data.cmpid +"_r' name='update' title='Datenbank mit neuem Inhalt updaten' onclick='func_save_l(" + data.workbench + ","+ data.m_data+" , "+ data.cmpid+");'></input>" +
        "</div>" +
        "<div>" +
        "</div>" +
        "</form>" +
        "<div class='pad_ref' id='div_rf1" + data.cmpid +"_r' readonly='readonly'></div>" +
        "</div>");
		
		
	// urheberNutzer
		fields = new Array();
        fields = JSON.parse(data.m_data);
if (data.typid === 'pdf') {
		$('#div_rf1' + data.cmpid + '_r').append(str.docadmin_l(fields, data.cmpid, 1));
for(var itt = 0; itt < fields.title.valArr.length; itt++) {
if( fields.title.valArr[itt] !== null) {
if(fields.title.valArr[itt].title !== '') {
	if(itt === 0) {
		$('#desc_ut' + data.cmpid + '_r').append("<div><span class='desc_cl' id='desc" + data.cmpid +"'> Untertitel / weitere Titel </span></div>");
	}
	$('#desc_ut' + data.cmpid + '_r').append(str.ut_l(fields.title.valArr[itt].title, data.cmpid, itt,1));
}
}
}
for(var itt = 1; itt < fields.contributor.valArr.length; itt++) {
if( fields.contributor.valArr[itt] !== null) {
if(fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
	$('#desc_con' + data.cmpid + '_r').append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if(fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
	$('#desc_con' + data.cmpid + '_r').append(str.auth_l(workb, fields,  fields.contributor.valArr[itt].givenName,fields.contributor.valArr[itt].surName,fields.contributor.valArr[itt] , itt, 1,  data.cmpid, data.typid));
	$('#desc_con' + data.cmpid + '_r').append("<div id='desc'>&nbsp;</div></div></div>");
}
}
}
		field_def = fieldDefinition();
		$('#lang' + data.cmpid + '_r').append(formElements.dropdown('language', 0, 1, data.cmpid));
		$('#sel_lang' + data.cmpid +' option[value='+ fields.language.keyVal[0] + ']').attr("selected",true);
		$('#status_l' + data.cmpid + '_r').append(formElements.dropdown('status', 0, 1, data.cmpid));
		$('#sel_sts'+ data.cmpid +' option[value='+ fields.status.stv + ']').attr("selected",true);
}
if (data.typid === 'jpg' || data.typid === 'gif' || data.typid === 'tiff') {
		$('#div_rf1' + data.cmpid +'_r').append(str.picture_l(fields, data.cmpid, 1));
        for (var itt = 1; itt < fields.contributor.valArr.length; itt++) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if (fields.contributor.valArr[itt] !== null) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append(str.auth_l(workb, fields,  fields.contributor.valArr[itt].givenName, fields.contributor.valArr[itt].surName, fields.contributor.valArr[itt] , itt, 1,  data.cmpid, data.typid));
        $('#desc_con' + data.cmpid + '_r').append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
field_def = fieldDefinition();
$('#status_l' + data.cmpid + '_r').append(formElements.dropdown('status', 0, 1, data.cmpid));
$('#sel_sts'+ data.cmpid +' option[value='+ fields.status.stv + ']').attr("selected",true);
}
if (data.typid === 'mpeg' || data.typid === 'avi' || data.typid === 'mp3') {
		$('#div_rf1' + data.cmpid +'_r').append(str.audio_l(fields, data.cmpid, 1));
        for (var itt = 1; itt < fields.contributor.valArr.length; itt++) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if (fields.contributor.valArr[itt] !== null) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append(str.auth_l(workb, fields,  fields.contributor.valArr[itt].givenName, fields.contributor.valArr[itt].surName, fields.contributor.valArr[itt] , itt, 1,  data.cmpid, data.typid));
        $('#desc_con' + data.cmpid).append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
field_def = fieldDefinition();
$('#status_l' + data.cmpid + '_r').append(formElements.dropdown('status', 0, 1, data.cmpid));
$('#sel_sts'+ data.cmpid +' option[value='+ fields.status.stv + ']').attr("selected",true);
}
}

if (userPolicy === 'student') {
var date = data.timestamp.replace(' ', '  ');
        date.replace('  ', ' ');
        var visib = 'none';
        var perm = 'gesperrt';
        var publ = 'nopublish';
        if (data.boolfree == 1) {
perm = 'freigegeben';
        publ = 'publish';
}
func_remMt();
$('#mitte').append("<div id='pad_cmt_d" + data.cmpid +"_r' class='spalte pad_cm'>" +
        "<form class='msgForm' name='file_form' id='cmp_" + data.cmpid +"_r'action='#' enctype='multipart/form-data' method='post'>" +
        "<input type='hidden' id='id_val_" + data.cmpid +"_r' value=1 />" +
        "<input type='hidden' id='id_new_" + data.cmpid +"_r' value=1 />" +
        "<input type='hidden' id='idnr_" + data.cmpid +"_r' value='" + data.cmpid +"_r' />" +
        "<input type='hidden' name='save' value=1></input>" +
        "<div id='m_div' class='spalte'>" +
        "<div id='t_div_l' class='spalte'>" +
        "<div>" +
        "<span id='desc'> Dokumententitel </span>" +
        "<input title='Titel des gespeicherten Dokuments' id='id_title_" + data.cmpid +"_r' class='title_mte' name='titel' value='" + data.titel + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Titel der Datei </span>" +
        "<input title='Name der eingebundenen Datei' id='id_filen_v"+ data.cmpid +"_r' readonly='readonly' class='filen' name='filename' value='" + data.filename + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibungsfeld / Kommentar </span>" +
        "<textarea class='pad_divt' id='div_id" + data.cmpid +"_r' >" + data.comment + "</textarea>" +
        "<input type='hidden' id='div_rf2" + data.cmpid +"_r' value=''></input>" +
        "<div class='rm_div' id='id_rm_c" + data.cmpid +"_r' onclick='func_auto_sc_r(" + data.cmpid + ", 0)'>" +
        "<span id='desc_2m'> Beschreibung / Kommentar lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Zeitpunkt der Erstellung </span>" +
        "<input class='md_nl' type='text' id='time_"+data.cmpid+"_r' name='time' readonly='readonly' title='origin timestamp' value='" + data.timestamp + "'></input>" +
        "</div>" +
        "<div>" +
        "<span id='desc'> Beschreibung der Daten des Inhalts </span>" +
        "<input type='hidden' id='div_rfm" + data.cmpid +"_r' value=''></input>" +
        "<div class='rm_div' id='id_rm_m" + data.cmpid +"_r' onclick='func_auto_sc_r(" + data.cmpid + ", 1)'>" +
        "<span id='desc_2m'> Daten des Inhalts lesen ... </span>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div id='p_div1' class='spalte'>" +
        "<div>" +
        "<span id='desc'>&nbsp;</span>" +
        "</div>" +
        "<input class='" + publ + "' id='publish_btn_" + data.cmpid + "_r' type='button' name='freigabe' value='" + perm + "'title='Inhaltskomponente f&uuml;r andere Nutzer sperren oder freigeben' onclick='toggle_publish(" + data.cmpid + ", 2);'></input>" +
        "</div>" +
        "<div>" +
        "<div id='desc'>&nbsp;</div>" +
        "<input class='edit_v' type='button' value='r&uuml;ckg&auml;ngig' id='id_red" + data.cmpid + "_r' name='reedit' title='weiteres Editieren der Felder' onclick='list_s(" + data.workbench + ", 2);'></input>" +
        "<div id='desc'>&nbsp;</div>" +
                "<input class='update_v' type='button' value='update' id='id_update" + data.cmpid +"_r' name='update' title='Datenbank mit neuem Inhalt updaten' onclick='func_save_l(" + data.workbench + ","+ data.m_data+" , "+ data.cmpid+");'></input>" +
        "</div>" +
        "<div>" +
        "</div>" +
        "</form>" +
        "<div class='pad_ref' id='div_rf1" + data.cmpid +"_r' readonly='readonly'></div>" +
        "</div>");
        fields = new Array();
                fields = JSON.parse(data.m_data);
if (data.typid === 'pdf') {
		$('#div_rf1' + data.cmpid + '_r').append(str.docadmin_l(fields, data.cmpid, 1));
for(var itt = 0; itt < fields.title.valArr.length; itt++) {
if( fields.title.valArr[itt] !== null) {
if(fields.title.valArr[itt].title !== '') {
	if(itt === 0) {
		$('#desc_ut' + data.cmpid + '_r').append("<div><span class='desc_cl' id='desc" + data.cmpid +"'> Untertitel / weitere Titel </span></div>");
	}
	$('#desc_ut' + data.cmpid + '_r').append(str.ut_l(fields.title.valArr[itt].title, data.cmpid, itt,1));
}
}
}
for(var itt = 1; itt < fields.contributor.valArr.length; itt++) {
if( fields.contributor.valArr[itt] !== null) {
if(fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
	$('#desc_con' + data.cmpid + '_r').append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if(fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
	$('#desc_con' + data.cmpid + '_r').append(str.auth_l(workb, fields,  fields.contributor.valArr[itt].givenName,fields.contributor.valArr[itt].surName,fields.contributor.valArr[itt] , itt, 1,  data.cmpid, data.typid));
	$('#desc_con' + data.cmpid + '_r').append("<div id='desc'>&nbsp;</div></div></div>");
}
}
}
		field_def = fieldDefinition();
		$('#lang' + data.cmpid + '_r').append(formElements.dropdown('language', 0, 1, data.cmpid));
		$('#sel_lang' + data.cmpid +' option[value='+ fields.language.keyVal[0] + ']').attr("selected",true);
		$('#status_l' + data.cmpid + '_r').append(formElements.dropdown('status', 0, 1, data.cmpid));
		$('#sel_sts'+ data.cmpid +' option[value='+ fields.status.stv + ']').attr("selected",true);
}
if (data.typid === 'jpg' || data.typid === 'gif' || data.typid === 'tiff') {
		$('#div_rf1' + data.cmpid +'_r').append(str.picture_l(fields, data.cmpid, 1));
        for (var itt = 1; itt < fields.contributor.valArr.length; itt++) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if (fields.contributor.valArr[itt] !== null) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append(str.auth_l(workb, fields,  fields.contributor.valArr[itt].givenName, fields.contributor.valArr[itt].surName, fields.contributor.valArr[itt] , itt, 1,  data.cmpid, data.typid));
        $('#desc_con' + data.cmpid + '_r').append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
field_def = fieldDefinition();
$('#status_l' + data.cmpid + '_r').append(formElements.dropdown('status', 0, 1, data.cmpid));
$('#sel_sts'+ data.cmpid +' option[value='+ fields.status.stv + ']').attr("selected",true);
}
if (data.typid === 'mpeg' || data.typid === 'avi' || data.typid === 'mp3') {
		$('#div_rf1' + data.cmpid +'_r').append(str.audio_l(fields, data.cmpid, 1, data.cmpid));
        for (var itt = 1; itt < fields.contributor.valArr.length; itt++) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append("<div><span id='desc'>AuthorIn / Mitwirkende(r) </span><span id='desc_y3'>Funktion </span></div>");
}
if (fields.contributor.valArr[itt] !== null) {
if (fields.contributor.valArr[1].givenName !== '' && fields.contributor.valArr[1].surName !== '') {
$('#desc_con' + data.cmpid + '_r').append(str.auth_l(workb, fields,  fields.contributor.valArr[itt].givenName, fields.contributor.valArr[itt].surName, fields.contributor.valArr[itt] , itt, 1,  data.cmpid, data.typid));
        $('#desc_con' + data.cmpid).append("<div id='desc_z'>&nbsp;</div></div></div>");
}
}
}
field_def = fieldDefinition();
$('#status_l' + data.cmpid + '_r').append(formElements.dropdown('status', 0, 1, data.cmpid));
$('#sel_sts'+ data.cmpid +' option[value='+ fields.status.stv + ']').attr("selected",true);
}
}

/*
if ($('#mitte > div').length == 0) {
	$('#mitte').animate({
		width: '51%'
		});
		$('#mitte').append(str.cmp('', '', 'nopublish', 'visible'));
	}
*/
}
}
}
});
list_s(workb, 0);
}
func_reedit = function(workb, cmpid) {
		list(workb,cmpid);
}
this.show_cmp = function(workb) {
	list_s(workb, 0);
}
save_nav = function() {
var save = "";
for (var i = 0; i < document.getElementsByTagName('ul').length; i++) {
if ((document.getElementsByTagName('ul')[i].className == "opened" || document.getElementsByTagName('ul')[i].className == "closed") && document.getElementsByTagName('ul')[i].id != 'root') {
save = save + document.getElementsByTagName('ul')[i].id + "=" + document.getElementsByTagName('ul').className + ",";
}
}
if (save.lastIndexOf(",") > 0) {
save = save.substring(0, save.lastIndexOf(","));
        window.name = save;
}
}

toggle_publish = function(id_chk, val) {
if (val == 0) {
var publish = $('#publish_btn_' + id_chk);
        var publish_v = $('#publish_btn_v' + id_chk);
        if (publish.attr("class") == 'nopublish' || publish_v.attr("class") == 'nopublish_v') {
publish.val('freigegeben');
        publish.removeClass().addClass('publish');
        publish_v.removeClass().addClass('publish_v');
} else {
publish.val('gesperrt');
        publish.removeClass().addClass('nopublish');
        publish_v.removeClass().addClass('nopublish_v');
}
}
if (val == 1) {
var publish = $('#publish_btn_' + id_chk);
         var publish_v = $('#publish_btn_v' + id_chk);
        var perm;
        if (publish.attr("class") == 'nopublish' || publish_v.attr("class") == 'nopublish_v') {
perm = 1;
        publish.val('freigegeben');
        publish.removeClass().addClass('publish');
        publish_v.removeClass().addClass('publish_v');
} else {
perm = 0;
        publish.val('gesperrt');
        publish.removeClass().addClass('nopublish');
        publish_v.removeClass().addClass('nopublish_v');
}
}
if (val == 2) {
var publish = $('#publish_btn_' + id_chk);
var publish_r = $('#publish_btn_' + id_chk + '_r');
         var publish_v = $('#publish_btn_v' + id_chk);
		 var publish_vr = $('#publish_btn_v' + id_chk + '_r');
        var perm;
        if ((publish.attr("class") == 'nopublish' && publish_r.attr("class") == 'nopublish') || (publish_v.attr("class") == 'nopublish_v' && publish_vr.attr("class") == 'nopublish')) {
perm = 1;
        publish.val('freigegeben');
		publish_r.val('freigegeben');
        publish.removeClass().addClass('publish');
		publish_r.removeClass().addClass('publish');
        publish_v.removeClass().addClass('publish_v');
		publish_vr.removeClass().addClass('publish_v');
} else {
perm = 0;
        publish.val('gesperrt');
		publish_r.val('gesperrt');
        publish.removeClass().addClass('nopublish');
		publish_r.removeClass().addClass('nopublish');
        publish_v.removeClass().addClass('nopublish_v');
		publish_vr.removeClass().addClass('nopublish_v');
}
$.ajax({
type: 'GET',
        url: 'backend.php?list=finalRelStatus&wb_ch=' + workbench + '&permit=' + perm + '&id_chk=' + id_chk + '',
        dataType: 'json',
        success: function(data) {
console.log(data);
}
});
}
}

	it = 0;
        it_1 = 0;
        flag = true;
        jsonObj = new Array();
        func_delMte = function(th) {
th.parentNode.remove();
}
func_showNb = function() {
var url = "backend.php?list=workbenches";
        $.ajax({
type: 'POST',
        url: url,
        dataType: 'json',
        success: function(data) {
if (data.length !== 0) {
if (val == 0) {
$('#nav_wb').css('border', '1px solid white');
        var k = 1;
        if (data.length >= 1) {
// func_getWb(wl[0].workbench);
for (var i = 0; i < data.length; i++) {
$('#nav_wb').append("<div id='wbm2_div' class='spalte' onMouseover='func_sWb()' onMouseout='func_cWb()' onclick='func_getWb(" + data[i].workbench + ");' ondblclick='func_dcl(" + data[i].workbench + ")'>" +
        "<input title='Titel des Projekts eintragen' readonly='readonly' onkeypress = 'enterPressed(event, " + (data[i].workbench) + ", 1);' id='wb_id" + data[i].workbench + "' class='wb_name' name='workbench_value' value='" + data[i].wbName + "'></input>" +
        "</div>");
}
}
}
}
}
});
}
}
