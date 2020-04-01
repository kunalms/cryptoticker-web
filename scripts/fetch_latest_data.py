import json
import os

import requests
from requests import TooManyRedirects, Timeout

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
    response = session.get(url, params=parameters)
    data = json.loads(response.text)
    full_path = os.path.expanduser('~/currencies.json')
    with open(full_path, 'w') as outfile:
        json.dump(data['data'], outfile)

    cmd = 'mongoimport --db cryptoticker --collection currencies --jsonArray --mode=upsert --upsertFields=id --file '+ full_path
    returned_value = os.system(cmd)
    print('returned value:', returned_value)

    os.remove(full_path)

except (ConnectionError, Timeout, TooManyRedirects) as e:
    print(e)
