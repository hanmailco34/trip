import { Component, OnInit } from '@angular/core';
import { notice } from '../notice';
import { NoticeService } from '../notice.service';

declare var $: any;

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {
  notice:notice=new notice();
  userLevel:string;
  noticeList:notice[]=new Array();
  nbNum:number;
  constructor(private _ns:NoticeService) { 
    this.userLevel=localStorage.getItem('userLevel');
    this._ns.getList().subscribe(res=>{
      if(res){
        for(var re in res){
          this.noticeList[re]=res[re];
        }
      }
    })
  }

  ngOnInit() {    
  }
  showModal():void {
    $("#myModal").modal('show');
  }
  sendModal(): void {
    this.notice.userNum =  Number.parseInt(localStorage.getItem('userNum'));
    this._ns.insertNotice(this.notice).subscribe(res=>{
      console.log(res);
    })
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }
  detail(nbNum){
    this._ns.get(nbNum).subscribe(res=>{
      if(res){
        for(var re in res){
          this.notice[re]=res[re];
        }
      }
    })

    $("#myModal").modal('show');
  }
}
