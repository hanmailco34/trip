import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import { hotel } from './hotel';
import { PageService } from '../page/page.service';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  searchWord:string;
  hotels:hotel[] = new Array();
  hote:hotel;
  sort:string="초깃값";
  toggle:Boolean=false;
  pager:any={};
  pagedItems:any[];

  constructor(private _hs:HotelService,private _page:PageService) { }

  ngOnInit() {
  }

  search(){
    var url="hotel/";
    this.hotels = new Array();
    this._hs.get(url,this.searchWord).subscribe(res=>{
      for(var re in res){        
        this.hote=<hotel>res[re];
        this.hotels.push(this.hote);
        this.setPage(1);
      }
    })
  }
  searchPrice(){
    if(this.toggle){
      this.toggle=!this.toggle
      if(this.sort==="row"){
        this.hotels = new Array();
        var url = "hotelLowPrice/"        
        this._hs.get(url,this.searchWord).subscribe(res=>{
          for(var re in res){
            this.hote=<hotel>res[re];
            this.hotels.push(this.hote);
            this.setPage(1);
          }
        })
      }else if(this.sort==='high'){
        this.hotels = new Array();
        var url = "hotelHighPrice/"        
        this._hs.get(url,this.searchWord).subscribe(res=>{
          for(var re in res){
            this.hote=<hotel>res[re];
            this.hotels.push(this.hote);
            this.setPage(1);
          }
        })
      }
    } else{
      return this.toggle=!this.toggle;
    }
  }
  setPage(page:number){
    this.pager=this._page.getPager(this.hotels.length,page);   
    this.pagedItems=this.hotels.slice(this.pager.startIndex,this.pager.endIndex+1);
  }
}
