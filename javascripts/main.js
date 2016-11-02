"use strict";
let apiKeys = {};

let weatherList = (searchText) => { // Getting Keys in apiKeys.json
	return new Promise ((resolve,reject) => {
		// FIRST AJAX TO GET KEYS
		$.ajax({ 
			method: "GET",
			url: "apiKeys.json"
		}).then((response) =>{ 
			console.log("response",response);
			apiKeys = response; // assign response of api call to apiKeys array
			let authHeader = apiKeys.APPID; // assign apiKeys array and APPID Json Keys to authHeader
			console.log("authHeader",authHeader );
		//SECOND AJAX TO GET weather api and pass in authHeader and searchText 
		var today = $.ajax({ 
		  method: "GET",
		  url: `http://api.openweathermap.org/data/2.5/weather?zip=${searchText},us&units=imperial&APPID=${authHeader}`,
		}).then((response2) => {
		  // console.log("today",today );
			  console.log("response2", response2);
			  resolve(response2);
			}, (errorResponse2) => {
			  console.log("weather fail", errorResponse2);
			  reject(errorResponse2);
			});
			}, (errorResponse) => {
			  console.log("errorResponse", errorResponse);
			});
		});
	};
		// THIRD AJAX TO GET 3 Day weather 
			// var threeday = $.ajax({ // Get weather api and pass in authHeader and searchText
			//   method: "GET",
			//   url: `http://api.openweathermap.org/data/2.5/forecast/daily?q={$cityName},{country code}&cnt={3}&APPID=${authHeader}`,
			// }).then((response3) => {
			//   console.log("threeday",threeday );
			// 	  console.log("response3", response3);
			// 	  resolve(response3);
			// 	}, (errorResponse3) => {
			// 	  console.log("weather 3fail", errorResponse3);
			// 	  reject(errorResponse3);
			// 	});
			// 	}, (errorResponse) => {
			// 	  console.log("errorResponse", errorResponse);
		// };

		
		// var week = $.ajax({
		// 	method: "GET",
		// 	url: `api.openweathermap.org/data/2.5/forecast/daily?q={city name},{country code}&cnt={7}`,
		// });
		// var week = $.get(`api.openweathermap.org/data/2.5/forecast/daily?q={city name},{country code}&cnt={7}`);

		// $.when(today).done((a,s,d,) => {
		// 	var allTheStuff = {today:a,threeday:s,week:d}


$(document).ready(function() {
	// check if zip is 5 digits or 9 and change color depending which one
	function checkZipCode(value) {
      return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
    }
    	$('#submitZip').on('click', function (e) {
	        e.preventDefault();
	        var value = $('#zipCode').val();
	        if (checkZipCode(value)) {
	            $(this).css('color', 'green').html("Valid Zip Code");
	        } else {
	            $(this).css('color', 'red').html("Invalid Zip Code");      
	        }
        // call weatherList function then return reponse and make it to array to display in Dom
    	weatherList(value).then((weatherResponse)=>{
	    	console.log("weatherResponse",weatherResponse);
	    	var arr = $.makeArray(weatherResponse);
	    	console.log("arr",arr );
	    	$.each(arr, ()  =>{
	    		// let weatherDom = `<`
	    		$('#output').append(`<div class="col-md-4"><h4>Current Location:</h4><h3>${weatherResponse.name}</h3><div>
	    			<h4>Current Temperature:</h4><div><h3>${weatherResponse.main.temp}°</h3></div>
	    			<h4>Current Air Pressure:</h4><div><h3>${weatherResponse.main.pressure} mb</h3></div>
	    			<h4>Current Wind Speed: </h4><div><h3>${weatherResponse.wind.speed} mph</h3></div>`);
	    		$("#day3Button").removeClass("hide");
	    		$("#day7Button").removeClass("hide");
	    		let $cityName = weatherResponse.name;
	    		console.log("$cityName",$cityName );
    		});
	    	// weatherThreeDay($cityName, weatherResponse).then((weatherResponseThreeDay)=>{
	    	// console.log("weatherResponseThreeDay",weatherResponseThreeDay );
	    	// });
	    	$('#day3Button').on('click', function(a){
	    		$(this).css('color', 'purple');	
 				$( "#output" ).empty().append(`some 3 day forcast`);
	    	});

	    	$('#day7Button').on('click', function(a){
	    		$(this).css('color', 'yellow');
 				$( "#output" ).empty().append(`some 7 day forcast`);
	    		// a.preventDefault();
	    	});
    	});
    });
});
// An affordance to view the forecast for the current day, the next three days, or the next 7 days
// given the user is viewing the current forecast
// when the user clicks on the link to view the 3 day forecast
// then the current data (see above), and the data for the next 3 days should be displayed

// given the user is viewing the current forecast
// when the user clicks on the link to view the 7 day forecast
// then the current data (see above), and the data for the next 7 days should be displayed

// given a user wants to view weather information
// when the user visits your initial view
// then there should be social sharing buttons for Facebook and Twitter

// given a user wants to share a day's forecast
// when the user performs a gesture on one of the social sharing elements
// then the user should be authenticated against that service's OAuth API and prompted with a status update affordance with the day's forecast pre-populated

// given a user wants to save weather information
// when the user visits your initial view
// then there should be an affordance (e.g. a star or link) that allows them to save a day's forecast to their profile

// given a user wants to view their saved forecasts
// when the user performs a gesture on an element that clearly states its purpose is to view saved data
// then the user should be shown a list of all of their saved forecasts