"use strict";
var weatherAPI = (function () {
	return{
		weatherCredentials: function(){
			return new Promise ((resolve,reject) => {
				// FIRST AJAX TO GET KEYS
				$.ajax({ 
					method: "GET",
					url: "apiKeys.json"
				}).then((response) =>{ 
					console.log("response",response);
					resolve(response);
				});
			});
		}
	};
})();