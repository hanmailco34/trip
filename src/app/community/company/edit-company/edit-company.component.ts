import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from '../../community.service';

var companyNum;

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  with:{} = {};
  userName:string;
  constructor(private _router:ActivatedRoute, private _cs:CommunityService) { }

  ngOnInit() { 
    companyNum = this._router.snapshot.paramMap.get('withNum');
    this.userName = localStorage.getItem('userName');
    this._cs.getCompanyByNum(companyNum).subscribe(res=>{
      for(let re in res){
      this.with[re] = res[re];
    }
   });
  }

  editCompany(){
    this._cs.modCompany(this.with).subscribe(res=>{
      if(res==1){
        alert('수정에 성공하셨습니다.');
        location.href='/company/'+companyNum;
        
      }
    })
  }
  goCompanyList(){
    location.href="/company";
  }
 
}
