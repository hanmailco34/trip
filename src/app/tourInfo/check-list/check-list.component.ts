import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Exchange } from './Exchange';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  ex:Exchange = new Exchange;
  exchangeUrl:string='https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD,FRX.KRWJPY,FRX.KRWCNY,FRX.KRWEUR';
  constructor() {
    
  }

  ngOnInit() {
    ajax.get(this.exchangeUrl).subscribe(res=>{
      this.ex=res.response;
    })
  }
}
