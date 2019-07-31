import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-tour-plan',
  templateUrl: './tour-plan.component.html',
  styleUrls: ['./tour-plan.component.css']
})
export class TourPlanComponent implements OnInit {
  
  plans: [] = [];
  userNum:string;
  constructor(private _cs: CommunityService) {this.userNum = localStorage.getItem('userNum'); }
  editorValue:string = '';

  ngOnInit() {
    this._cs.getPlanList().subscribe(res => {
      for (var re in res) {
        this.plans[re] = res[re];
      }
    })
  }

 
}


