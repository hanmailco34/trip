import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userNum:string;
  userLevel:string;
  constructor() { }

  ngOnInit() {
    this.userNum = localStorage.getItem('userNum');
    this.userLevel = localStorage.getItem('userLevel');
  }

}
