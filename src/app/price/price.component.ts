import { Component, OnInit } from '@angular/core';
import { PriceItemComponent } from '../price-item/price-item.component';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  items: any = [ 
    {
      src: "bitcoin.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: 39183.82,
      market: 1211.90,
      chg: -6.51
    },
    {
      src: "ethereum.png",
      name: "Ethereum",
      symbol: "ETH",
      price: 2603.92,
      market: 1548.90,
      chg: 5
    },
    {
      src: "tether.svg",
      name: "Tether",
      symbol: "USDT",
      price: 1,
      market: 80211.90,
      chg: 0.1
    },
    {
      src: "bnb.png",
      name: "BNB",
      symbol: "BNB",
      price: 39183.82,
      market: 1211.90,
      chg: -3.2
    },
    {
      src: "usd_coin.png",
      name: "USD Coin",
      symbol: "USDC",
      price: 39183.82,
      market: 1211.90,
      chg: -6.51
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
