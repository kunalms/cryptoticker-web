#!/usr/bin/env python3
import json
import os
import logging
from datetime import datetime

import requests
from requests import TooManyRedirects, Timeout

logging.basicConfig(filename='api_call.log', level=logging.INFO)

url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
parameters = {
    'start': '1',
    'limit': '500',
    'convert': 'USD'
}
headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': os.environ.get('COINMARKETCAP_KEY')
}

session = requests.Session()
session.headers.update(headers)

try:
    now = datetime.now()
    logging.info('call to the api made at:' + now.strftime("%H:%M:%S"))
    response = session.get(url, params=parameters)
    now = datetime.now()
    logging.info('call from api retrieved at:' + now.strftime("%H:%M:%S"))
    data = json.loads(response.text)
    full_path = os.path.expanduser('~/currencies.json')
    with open(full_path, 'w') as outfile:
        json.dump(data['data'], outfile)

    cmd = 'mongoimport --db cryptoticker --collection currencies --jsonArray --mode=upsert --upsertFields=id --file '+ full_path
    now = datetime.now()
    logging.info('persisting data to the db at:' + now.strftime("%H:%M:%S"))
    returned_value = os.system(cmd)
    now = datetime.now()
    logging.info('persisted data to the db at:' + now.strftime("%H:%M:%S"))
    os.remove(full_path)

except (ConnectionError, Timeout, TooManyRedirects) as e:
    print(e)
