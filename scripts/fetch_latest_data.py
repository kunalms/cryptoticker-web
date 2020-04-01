import json
import os

import requests
from requests import TooManyRedirects, Timeout
from pymongo import MongoClient

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

client = MongoClient('mongodb://localhost/')

db = client.cryptoticker
currencies_coll = db.currencies

try:
    response = session.get(url, params=parameters)
    data = json.loads(response.text)
    with open('data.txt', 'w') as outfile:
        json.dump(data, outfile)

    with open('data.txt', 'r') as inpFile:
        response = json.load(inpFile)
        currencies = response['data']
        for currency in currencies:
            result = currencies_coll.replace_one({'id': currency['id']}, currency, True)

except (ConnectionError, Timeout, TooManyRedirects) as e:
    print(e)
