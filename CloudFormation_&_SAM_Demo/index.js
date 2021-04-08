exports.handler = (event, context, callback) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello Cloud Gurus, This Lambda Function was deployed using SAM!')
    };
    callback(null, response);
};
