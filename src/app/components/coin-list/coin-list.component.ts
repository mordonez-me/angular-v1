import { Component } from '@angular/core';
import { Asset } from 'src/app/core/services/coingecko/coin-gecko.interface';
import { CoinGeckoService } from 'src/app/core/services/coingecko/coin-gecko.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent {

  response!: Asset[] 

  constructor(private coingeckoService: CoinGeckoService) {
    this.getAssets()
  }

  getAssets() {
    this.coingeckoService.getAssets().subscribe((responseApi) => {
      console.log('response', responseApi)
      this.response = responseApi

    })
  }
}
