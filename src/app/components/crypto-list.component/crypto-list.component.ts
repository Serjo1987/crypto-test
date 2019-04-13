import {
  Component,
  OnInit
} from '@angular/core';

import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {

  public onView: boolean = false;

  private apiKey: string = 'b447dfd8a64e5b61541cafad2599b6d8d6751090ca46d5d03840a0592b0fbd0f'
  private url: string = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key='

  public crypto: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCrypto();
  }

  private getCrypto() {
    this.api.get(this.url+''+this.apiKey)
    .then(response => {
      if (response && response.status === 200) {
        this.onView = true;
        this.crypto = response.body.Data;
        this.crypto.sort((a, b) => parseFloat(a.RAW.USD.PRICE) - parseFloat(b.RAW.USD.PRICE));
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  public update() {
    this.onView = false;
    this.getCrypto();
  }
}
