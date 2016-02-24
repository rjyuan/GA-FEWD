$(document).ready(function(){

    /*prevent page from refreshing*/
	$('#submit-btn').click(function(event){
	    event.preventDefault();
	});

    /*store value of input into variable 'city'*/
	var city = $('#city-type').val();

    /*main function where if
    "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    "Austin" or "ATX" make the background of the page austin.jpg
    "Sydney" or "SYD" make the background of the page sydney.jpg*/
	$('#submit-btn').click(function(){
        var city = $('#city-type').val();
        if (city==='New York City' || city==='NYC'){
        	$('body').attr('class','nyc')
        } if 
        (city==='San Francisco' || city==='SF'){
        	$('body').attr('class','sf')
        } if 
        (city==='Los Angeles' || city==='LA' || city==='LAX'){
        	$('body').attr('class','la')
        } if 
        (city==='Austin' || city==='ATX'){
        	$('body').attr('class','austin')
        } if 
        (city==='Sydney' || city==='SYD'){
        	$('body').attr('class','sydney')
        } $('#city-type').val('');
    });
});



