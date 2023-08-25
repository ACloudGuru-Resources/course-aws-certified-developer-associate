import https from "node:https";
let url = "https://www.amazon.com";

export function handler(event, context, callback) {
  https
    .get(url, (res) => {
      callback(null, res.statusCode);
    })
    .on("error", (e) => {
      callback(Error(e));
    });
}
