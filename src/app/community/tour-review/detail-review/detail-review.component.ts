import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunityService } from '../../community.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Reply } from '../../reply';
import { Rating } from '../rating';


@Component({
  selector: 'app-detail-review',
  templateUrl: './detail-review.component.html',
  styleUrls: ['./detail-review.component.css']
})
export class DetailReviewComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  reviews:[] = [];
  replys:[] = [];
  reply:Reply = new Reply();
  userNum:any;
  userName:string;
  rvNum:string;
  rate:Rating = new Rating(); //별점클래스
  constructor(private _cs:CommunityService, private _router:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.rvNum =  this._router.snapshot.paramMap.get('rvNum');
    this.rate.userNum = localStorage.getItem('userNum');
   
    this._cs.getReviewByNum(this.rvNum).subscribe(res=>{
      for(var re in res){
      this.reviews[re] = res[re];
      }
      document.querySelector('#reviewContent').innerHTML = this.reviews['rvContent'];
      if(localStorage.getItem('userNum') == this.reviews['userNum']){
        this.userNum = true;
      }
      console.log(this.reviews['userNum']);
      this._cs.getUserbyUserNum(this.reviews['userNum']).subscribe(res=>{
       
       this.userName = res['userNick'];
      })
    this.reply.rvNum = this.reviews['rvNum'];
    this.getReply(); 
   
    })
  }
  
  getReply(){
    this._cs.getReply(this.reply).subscribe(res=>{
      for(let re in res){
        this.replys[re] = res[re];
        this._cs.getUserbyUserNum(this.replys[re].userNum).subscribe(res=>{
         this.replys[re].userName = res['userNick'];
         console.log(this.replys[re].userName);
        })
      }
    })
    
   }
   likeUp(){
    this._cs.reviewLike(this.rvNum).subscribe(res=>{
      console.log(res);
      if(res==1){
        location.href="/review/"+this.rvNum;
      }
    })
   }
   replyWrite(){
     this.reply.userNum = localStorage.getItem('userNum');
     this._cs.writeReply(this.reply).subscribe(res=>{
      if(res==1){
        alert('댓글이 성공적으로 작성되었습니다.');
        location.href="/review/"+this.rvNum; 
      }
    });
   }

   delRev(){
    this._cs.delReview(this.rvNum).subscribe(res=>{
      if(res==1){
        alert('삭제가 완료되었습니다.');
        this.router.navigate(['/']);        
      }else{
        alert('삭제가 실패했습니다.');
      }
    },err=>{
      alert('삭제가 실패했습니다.');
    })
   }

   
   evalRating(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating

    });
     this.rate.rvNum = this.rvNum; 
     this.rate.siSp = this.rating;
     
     this._cs.insertSp(this.rate).subscribe(res=>{
       if(res==1){
         alert('별점평가를 완료했습니다.');
       }else {
         alert('이미 평가를 하셨습니다.');
       }
     },err=>{
       alert('이미 평가를 하셨습니다.');
     })
  }
} 
