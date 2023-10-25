import https from 'https'
let url = "https://www.amazon.com" 

export const handler = function(event, context, callback) { 
	https.get(url, (res) => { 
  		    callback(null, res.statusCode) 	
    	}).on('error', (e) => { 
		    callback(Error(e)) 
	    }) 
}
