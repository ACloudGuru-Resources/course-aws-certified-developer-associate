/**
 * A Lambda function that returns a static string
 */
exports.helloFromLambdaHandler = async () => {
    const message = 'Hello Cloud Gurus, this Lambda function was deployed using AWS SAM!';

    // All log statements are written to CloudWatch
    console.info(`${message}`);
    
    return message;
}
