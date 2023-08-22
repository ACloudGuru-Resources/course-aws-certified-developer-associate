const https = require('https')
let url = "https://www.amazon.com" 

exports.handler = function(event, context, callback) { 
	https.get(url, (res) => { 
  		    callback(null, res.statusCode) 	
    	}).on('error', (e) => { 
		    callback(Error(e)) 
	    }) 
}