import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from '../review';
import { CommunityService } from '../../community.service';

@Component({
  selector: 'app-review-write',
  templateUrl: './review-write.component.html',
  styleUrls: ['./review-write.component.css']
})
export class ReviewWriteComponent implements OnInit {
  
  review:Review = new Review();
  userName:string;
  userNum:string;
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
  public editorValue: string = '';
 
  constructor(private _cs:CommunityService) {this.userNum = localStorage.getItem('userNum'); }
  
  saveTest(){
    
    this.review.rvContent = this.editorValue;
    this._cs.insertReview(this.review).subscribe(res=>{
      if(res==1){
        alert('등록에 성공하셨습니다.');
        location.href='/review';
      }else{
        alert('등록에 실패했습니다.');
      }
    },err=>{
      alert('등록에 실패했습니다.');
    })
  }
  ngOnInit() {
    this.userName = localStorage.getItem('userNick');
    this.review.userNum = localStorage.getItem('userNum');
    this.review.rvLike = '0';
  }


}
