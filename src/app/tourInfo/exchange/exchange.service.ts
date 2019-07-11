import { Injectable } from '@angular/core';
import { Exchange } from './exchange';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  code:string='';
  exchangeUrl:string='https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes='  
  constructor() { }

  exchange(ex:Exchange){
    return ajax.get(this.exchangeUrl+this.code);
  }
}
