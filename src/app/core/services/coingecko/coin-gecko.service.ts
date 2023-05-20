import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Markets } from './coin-gecko.interface';


@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {

  API = "https://api.coingecko.com/api/v3/"

  constructor(private http: HttpClient) { }

  markets() {
    return this.http.get<Markets>(`${this.API}/coins/markets`, {
      params: {
        'vs_currency': 'usd',
        'order': 'market_cap_desc',
        'per_page': 100,
        'page': 1,
        'sparkline': true
      }
    })
  }
}
