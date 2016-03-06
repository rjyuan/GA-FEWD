$(document).ready(function(){
	// Prevents a page from reloading after you select an option
	$('#city-type').click(function(){
		event.preventDefault();
	});

	//Defining the array as cities
	var cities = ['NYC','SF','LA','ATX','SYD'];
	console.log(cities.length)

	// Run a loop 5 times
	for (var i = 0; i < cities.length; i++) {
		console.log(cities[i])

		// Add more options to the html. Can add one city at a time
		$('#city-type').append('<option>' + cities[i] + '</option>')
	};


	function cityPic(){
		
		// Define the city variable and stores the text in #city-type
		var city = $('#city-type').val();
		
		// Check for the city variable
		console.log("var city = " + city)
		
		// If statement to test if 1 of 3 new york combinations match
		if (city === 'NYC') {
			
			// Check to see if the city matches
			console.log("The city input matches")

			// Takes the body css element and selects the attribute of class. changes the class attribute value to nyc. it will look like body .nyc in html
			$('body').attr('class','nyc')
		};

		if (city === 'SF') {
			$('body').attr('class','sf')
		};

		if (city === 'LA') {
			$('body').attr('class','la')
		};

		if (city === 'ATX') {
			$('body').attr('class','austin')
		};

		if (city === 'SYD') {
			$('body').attr('class','sydney')
		};
		
	}

	// when you change the drop down, run the cityPic function
	$('#city-type').change(cityPic);

})
