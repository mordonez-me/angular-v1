import { Component } from '@angular/core';
import { CoinGeckoService } from 'src/app/core/services/coingecko/coin-gecko.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent {

  constructor(private coingeckoService: CoinGeckoService) {
    this.getMarket()
  }

  getMarket() {
    this.coingeckoService.markets().subscribe((response) => {
      console.log('response', response)
    })
  }
}
