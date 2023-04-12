import json

def lambda_handler(event, context):
    raise Exception("error")
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
