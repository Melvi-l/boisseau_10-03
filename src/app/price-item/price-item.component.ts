import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.scss']
})
export class PriceItemComponent implements OnInit {
  @Input() rank: number = 1;
  @Input() src: string = "bitcoin.png";
  @Input() name: string = "Bitcoin";
  @Input() symbol: string = "BTC";
  @Input() price: number = 39183.82
  @Input() market: number = 1211.90
  @Input() chg: number = -6.51
  get triangleColor(): string {
    if (this.chg>0) {
      return "#60A042"
    } else {
      return "#BD504A"
    }
  }
  get triangleRotate(): string { 
    if (this.chg>0) {
      return "rotate(180deg)"
    } else {
      return "rotate(0deg)"
    }  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
