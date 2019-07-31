import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-tema',
  templateUrl: './search-tema.component.html',
  styleUrls: ['./search-tema.component.css']
})
export class SearchTemaComponent implements OnInit {
  temaNum:string;
  p: number = 1;
  plans:[] = [];
  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }

  temaSearch(){ // 빌드할때 주소 바꿔줘야댐.
    this.plans = [];
     this._http.get('http://localhost:88/planTema?planTema='+this.temaNum).subscribe(res=>{
      for (var re in res) {
        this.plans[re] = res[re];
      }
      
     })
  }
} 
