import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-tour-review',
  templateUrl: './tour-review.component.html',
  styleUrls: ['./tour-review.component.css']
})

export class TourReviewComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  userNum:string;
  reviews:[] = [];
  
  constructor(private _cs:CommunityService) {this.userNum = localStorage.getItem('userNum'); }

  ngOnInit() {
    this._cs.getReviewList().subscribe(res=>{
      for(var re in res){
        this.reviews[re] = res[re];
      
      }
      
    })
    
  }
  

}