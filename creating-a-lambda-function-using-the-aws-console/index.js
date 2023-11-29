const https = require('https');
let url = "https://www.amazon.com";

exports.handler = async function(event) {
    let statusCode;
    await new Promise(function(resolve, reject) {
        https.get(url, (res) => {
            statusCode = res.statusCode;
            resolve(statusCode);
        }).on("error", (e) => {
            reject(Error(e));
        });
    });
    console.log(statusCode);
    return statusCode;
};
