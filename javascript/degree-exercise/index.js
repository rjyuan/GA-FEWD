function calculate (){
	var a = $('#Fahr').val();
	var b = $('#Cels').val();

	a = parseFloat (a);
	b = parseFloat (b);

	b = (a-32) / 1.8;
	$('#Cels').val(b);
}

$('#calc').click(calculate);

/*console.log (b)*/
