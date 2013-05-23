// JavaScript Document

// Add eventhandlers to inputfields
$(document).ready( function() {
	$('#regex').keyup(function() { start_match(); });
	$('#rep').keyup(function() { start_match(); });
	$('#modifier_g').change(function() { start_match(); });
	$('#modifier_i').change(function() { start_match(); });
	$('#modifier_m').change(function() { start_match(); });
	$('#string1').keyup(function() { start_match(); });
	$('#string2').keyup(function() { start_match(); });
	$('#string3').keyup(function() { start_match(); });
	$('#string4').keyup(function() { start_match(); });
});

function start_match() {
	var modifiers	= '';
	
	if(document.regexform.modifiers[0].checked)
		modifiers += 'g';
	if(document.regexform.modifiers[1].checked)
		modifiers += 'i';
	if(document.regexform.modifiers[2].checked)
		modifiers += 'm';	
	
	var regex		= new RegExp(document.regexform.regex.value, modifiers);
	var rep			= document.regexform.rep.value;
	
	var textareas	= document.getElementsByTagName('textarea');
	var i			= 0;
	while( textarea = textareas[i++] ) {
		output		= '';
		text		= textarea.value;
		output += '<span id="fixedspan">Match</span>';
			if(regex.test(text))
				output += 'Ja';
			else
				output += 'Nej';
		if(rep != '') {
			output += '<br /><span id="fixedspan">Erstatning</span>';
			output += text.replace(regex, rep);
		}
		if( regex.test(text) ) {
			output += '<br /><span id="fixedspan">Matches</span><span style="display:inline-block;">';
			matches = text.match(regex).toString().split(',');
			for(q=0; q<matches.length; q++)
				output += '$' + q + ': ' + matches[q] + '<br />';
			output += '</span>';
		}

		document.getElementById('result'+i).innerHTML = output;
		document.getElementById('result'+i).style.display = 'block';
	}
}

function addTestString() {
	newid = countStrings() + 1;
	$('#teststrings').append('<textarea name="string'+newid+'" id="string'+newid+'"></textarea>');
	$('#string'+newid).keyup(function() { start_match(); });
}

function removeTestString() {
	newid = countStrings();
	$('#string'+newid).remove();
	$('#result'+newid).remove();
}

function countStrings() {
	var textareas	= document.getElementsByTagName('textarea');
	return textareas.length;
}

function example1() {
	$('#regex').val('^(http[s]?://)?www.(.+)$');
	$('#rep').val('$1$2');
	
	$('#modifier_g').attr('checked', false);
	$('#modifier_i').attr('checked', true);
	$('#modifier_m').attr('checked', false);
	
	if( countStrings() < 3 )
		for(i=countStrings(); i<3; i++)
			addTestString();
	else
		for(i=countStrings(); i>3; i--)
			removeTestString();
	
	$('#string1').val('mathiasbak.dk');
	$('#string2').val('www.mathiasbak.dk');
	$('#string3').val('http://www.mathiasbak.dk');
	
	start_match();
}

function example2() {
	$('#regex').val('(#?([a-f0-9]){3}(([a-f0-9]){3})?)');
	$('#rep').val('');
	
	$('#modifier_g').attr('checked', false);
	$('#modifier_i').attr('checked', true);
	$('#modifier_m').attr('checked', false);
	
	if( countStrings() < 3 )
		for(i=countStrings(); i<3; i++)
			addTestString();
	else
		for(i=countStrings(); i>3; i--)
			removeTestString();
	
	$('#string1').val('#ff3399');
	$('#string2').val('#eee');
	$('#string3').val('#ABCDEF');
	
	start_match();
}