import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../community.service';
import { Plan } from '../plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-write',
  templateUrl: './plan-write.component.html',
  styleUrls: ['./plan-write.component.css']
})
export class PlanWriteComponent implements OnInit {
  plan:Plan = new Plan();
  userName:string;
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

  constructor(private _cs:CommunityService,private router:Router) { }

  ngOnInit() {
    this.userName = localStorage.getItem('userNick');
  }
  
  planWrite(){
    this.plan.userNum = localStorage.getItem('userNum');
     this.plan.planContent = this.editorValue;
     this.plan.planSch = this.plan.planSch + ' ~ ' + this.plan.planSch2;
     this._cs.insertPlan(this.plan).subscribe(res=>{
      if(res){
        alert('등록되었습니다.');
        this.router.navigate(['tourPlan']);
      }       
     })
   }
  
}
