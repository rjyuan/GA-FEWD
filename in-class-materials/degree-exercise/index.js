
$('#calcbutton').click(function(){
	var Ftemp = $('#Fahr').val();
	var Ctemp = $('#Cels').val();

	Ftemp = parseFloat (Ftemp);
	Ctemp = parseFloat (Ctemp);

	if(isNaN(Ftemp)){
		calculatefar();	
		changecolor();
	} else if (isNaN(Ctemp)){
		calculatecel();	
		changecolor();
	};

	function calculatecel (){
		Ctemp = (Ftemp-32) / 1.8;
		$('#Cels').val(Ctemp);
	};

	function calculatefar (){
		Ftemp = (Ctemp*1.8) + 32;
		$('#Fahr').val(Ftemp);
	};

	function changecolor(){
		if (Ftemp>=70) {
			$('body').attr('class','fire'); 
		}
		else if (Ftemp<=30) {
			$('body').attr('class','cold'); 
		} 
		else {
			$('body').attr('class','moderate'); 
		} 
	};

});