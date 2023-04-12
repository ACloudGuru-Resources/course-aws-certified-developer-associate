import os

def lambda_handler(event, context):
    num_exclamations = get_configured_number_of("ExclamationPoints", 1)
   
    return f'Hello Cloud Gurus{"!" * num_exclamations} The numberOfExclamationPoints is: {get_configured_number_of("ExclamationPoints", 1)}'

def get_configured_number_of(configuration_type, default):
    if os.getenv("enable" + configuration_type, "False") == "True":
        return int(os.getenv("numberOf" + configuration_type, str(default)))
    else:
        return default
