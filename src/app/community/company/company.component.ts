import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  with:[] = [];
  userNum:string;
  constructor(private _cs:CommunityService) {this.userNum = localStorage.getItem('userNum'); }

  ngOnInit() {
    this._cs.getCompanyList().subscribe(res=>{
      for(let re in res){
        this.with[re] = res[re];
      }
    })
  }

}
