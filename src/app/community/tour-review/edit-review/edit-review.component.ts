import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from '../../community.service';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {
  userName:string;
  review:{} = {};
  rvNum:string;
  constructor(private _router:ActivatedRoute, private _cs:CommunityService) { }

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
  
  public editorValue:any;


  ngOnInit() {
    this.rvNum = this._router.snapshot.paramMap.get('reviewNum');
    this.userName = localStorage.getItem('userNick');
    this._cs.getReviewByNum(this.rvNum).subscribe(res=>{
      for(let re in res){
      this.review[re] = res[re];
    }
    this.editorValue =this.review['rvContent'];
   });
  }
  editReview(){
    this.review['rvContent']=this.editorValue;
    this._cs.modReview(this.review).subscribe(res=>{
      if(res==1){
        alert('수정에 성공하셨습니다.');
        location.href="/review/"+this.rvNum;
      }else {
        alert('수정에 실패하셨습니다.');
      }
    })
  }

}
