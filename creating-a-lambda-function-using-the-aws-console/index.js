import https from 'https';

const url = "https://www.amazon.com";

export const handler = async function(event) {
    let statusCode;

    await new Promise((resolve, reject) => {
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
