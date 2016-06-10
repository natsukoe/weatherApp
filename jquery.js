$.ajax({
	url: 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD',
	type: 'GET',
	success: function(response) {
		console.log(response.body);
	},
	error: function() {
		console.log('error');
	}

});