/*
- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.
*Comment the proper code
*Have a user input for the city name

** PING (=call (the API)) the different data point and try
***Try and challenge Instagram/ Twitter API

*/

'use strict';

//var name = prompt("Enter your name");
//document.write(name);


(function() {

	// Ask users to enter the city they want to know the weather and store
	var location = prompt("Please enter the city.");
	console.log(location);

	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "26e400928514a43fc72c7d390ac0e8c2";
	//var location = "London";

	$.ajax({
	 url: weatherUrl + location + "&APPID=" + apiKey +"&units=imperial",
	 type: 'GET',
	 success: function(response) {
	 	console.log(response);
	 	// Return the text message when error occurs
		$( "#container" ).append( "Current temp in " + location + " is " + response.main.temp );
	 },
	 error: function() {
	 	// Return the text message when error occurs
		console.log('bad');
	 },
	})

})();


// Different Weatehr API
(function () {

	var pollutionUrl = "http://api.openweathermap.org/pollution/v1/co/";
	var apiKey = "26e400928514a43fc72c7d390ac0e8c2";
	var latitude = "31.2";
	var longitude = "121";
	//var datetime = "2016-06-07"

	$.ajax({
		//url: pollutionUrl + location + "/" + datetime + ".json?appid=" + apiKey,

		//url: "http://api.openweathermap.org/pollution/v1/co/31.2,121/current.json?appid=26e400928514a43fc72c7d390ac0e8c2",
		url: pollutionUrl + latitude + "," + longitude + "/current.json?appid=" + apiKey,
		type: 'GET',
		success: function(res) {
			console.log("Air Pollution in Shanghai: " + res.data[0].value);
		},
		error: function() {
			console.log("failed");
		},
	})

})
();