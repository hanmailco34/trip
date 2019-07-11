import { Component, OnInit } from '@angular/core';
import { Exchange } from './exchange';
import { Router } from '@angular/router';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  code1:string;
  code2:string;
  code3:string;
  code4:string;
  ex:Exchange;
  exchangeUrl:string='https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes='  ;
  cmd:boolean=false;
  constructor(private _router:Router,private _es:ExchangeService) { }

  ngOnInit() {
    
  }
  exchange(){
    console.log(this.code1);
    if(this.code1){
      this._es.code+="FRX.KRWUSD,";
    }
    if(this.code2){
      this._es.code+="FRX.KRWJPY,";
    }
    if(this.code3){
      this._es.code+="FRX.KRWCNY,";
    }
    if(this.code4){
      this._es.code+="FRX.KRWEUR,";
    }
    this.cmd=true;
    this._es.exchange(this.ex).subscribe(res=>{
      this.ex=res.response;
    })
  }
}
