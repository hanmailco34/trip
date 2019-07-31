import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../community.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {
  planNum:any;
  userName:string;
  plan:{}={};
  str:string[];
  constructor(private _cs:CommunityService, private _router:ActivatedRoute) { }
  ckEditorConfig = {
    
    filebrowserUploadUrl: 'http://localhost:88/upload/one',
    fileTools_requestHeaders: {
        'X-Requested-With': 'xhr',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
    },
    filebrowserUploadMethod: 'xhr',
    on: {
        instanceReady: function( evt ) {
            var editor = evt.editor;
            console.log('editor ===>', editor);
        },
        fileUploadRequest: function(evt) {
            console.log( 'evt ===>', evt );
        },
    },
  };
  public editorValue:string = '';
  ngOnInit() {
    this.userName = localStorage.getItem('userNick');
    this.planNum = this._router.snapshot.paramMap.get('planNum');
    console.log(this.planNum);
    this._cs.getPlanByNum(this.planNum).subscribe(res=>{
      for(var re in res){
        this.plan[re] = res[re];
      }
      this.plan['planSch2']=stringify(this.plan['planSch']).substring(13,23);
      this.plan['planSch']=stringify(this.plan['planSch']).substring(0,10);
      this.editorValue = this.plan['planContent'];
    })
  }

  modPlan(){
    console.log(this.editorValue);
    this.plan['planContent']=this.editorValue;
    this.plan['planSch'] += ' ~ ' + this.plan['planSch2'];
    this._cs.modPlan(this.plan).subscribe(res=>{
      if(res==1){
        alert('수정에 성공하셨습니다.');
        location.href='/tourPlan/'+ this.planNum;

      }else{
        alert('수정에 실패했습니다.');
      }
    }, err=>{
      alert('수정에 실패했습니다.');
    })
  }
}
