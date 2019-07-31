import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CommunityService } from '../../community.service';

@Component({
  selector: 'app-find-company',
  templateUrl: './find-company.component.html',
  styleUrls: ['./find-company.component.css']
})
export class FindCompanyComponent implements OnInit {
  with:Company = new Company();
  constructor(private _cs:CommunityService) { }

  ngOnInit() {
    this.with.userNick = localStorage.getItem('userNick');
    this.with.userNum = localStorage.getItem('userNum');
  }
  insertCompany(){
    this._cs.insertCompany(this.with).subscribe(res=>{
      if(res==1){
        alert('글쓰기에 성공하셨습니다.');
        location.href='/company';
      }else{
        alert('글쓰기에 실패하셨습니다.');
        return;
      }
    }, err=>{
      alert('글쓰기에 실패하셨습니다.');
      return;
    })
  }
}
