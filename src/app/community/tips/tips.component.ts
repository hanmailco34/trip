import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  tips:[] = [];
  userNum:string;
  constructor(private _cs:CommunityService, private _router:ActivatedRoute) {this.userNum = localStorage.getItem('userNum'); }

  ngOnInit() {
    this._cs.getTipList().subscribe(res=>{
      for(var re in res){
      this.tips[re] = res[re];
      
      }
    })
    console.log(this.tips);
  }

}
