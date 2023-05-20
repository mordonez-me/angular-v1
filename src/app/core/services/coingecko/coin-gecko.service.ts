import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from './coin-gecko.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {

  API = "https://api.coincap.io/v2"

  constructor(private http: HttpClient) { }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.API}/assets`)
  }
}
