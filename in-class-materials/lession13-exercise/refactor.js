//Use variables example
$('body').append('<img src="images/Will.png" alt="William\'s picture"><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>');

//solution
??

//Use functions and arrays to simplify
$('#container>ol').prepend('<li>Milk</li>');
$('#container>ol').prepend('<li>Cookies</li>');
$('#container>ol').prepend('<li>Sugar</li>');
$('#container>ol').prepend('<li>Bananas</li>');
$('#container>ol').prepend('<li>Gatorade</li>');

//solution
createLi('Milk');
createLi('Cookies');
createLi('Sugar');
createLi('Bananas');
createLi('Gatorade');
function createLi(myLiText){
	$('#container>ol').prepend('<li>'+myLiText+'</li>');
}

//Combine jQuery selectors
$('#container').css('width','960px');
$('#main').css('width','960px');

//solution
$('#container,#main').css('width','960px');

//Combine multiple jQuery css, attr, etc changes
$('#container,#main').css('width','960px');
$('#container,#main').css('background','red');
$('#container,#main').css('color','purple');

//solution
$('#container,#main').css({
	'width':'960px',
	'background':'red',
	'color':'purple'});

//Chain jQuery function calls
$('input').css('width','200px')
	.attr('placeholder','My placeholder')
	.before('<label>My input</label>');

//solution
??