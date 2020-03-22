import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseMetatData} from '../models/ResponseMetaData';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private readonly currenciesBaseUrl = '/api/currencies';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<ResponseMetatData>(this.currenciesBaseUrl).pipe(map((response) => {
      response.currencies.forEach(
        currency => currency.imageUrl = 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + currency.id + '.png');
      return response;
    }));
  }

  addToFavourite(id: number) {
    return this.http.post(`${this.currenciesBaseUrl}/${id}/favorite`, null);
  }

  removeFromFavourites(id: number) {
    return this.http.delete(`${this.currenciesBaseUrl}/${id}/favorite`);
  }
}
