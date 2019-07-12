import { Component, OnInit } from '@angular/core';
import { Search } from './search';
import { Nsearch } from '../search-blog/nsearch';
import { ApiSearchService } from '../ApiSearchService';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  scList:Search[] = [] ;  
  nsList:Nsearch[] = [];
  sc:Search = new Search();
  nsc:Nsearch = new Nsearch();
  searchWord:string;
  urltest:string = 'https://www.youtube.com/embed/';
  
  constructor(private as:ApiSearchService ) { }

  ngOnInit() {
  }
  url(videoId){
    var url = 'https://www.youtube.com/embed/'+videoId;
    return url;
  }
  
  search(){
    this.as.YoutubeSearch(this.searchWord).subscribe(res=>{
      console.log(this.searchWord);
      this.scList = res['items'];
      // var title = res['items']['snippet']['title']
      // var videoId = res['items']["id"]["videoId"];
     })

}

  nsearch(){
    this.as.naverSearch(this.searchWord).subscribe(res=>{
      this.nsList = res['items'];
    })
  }
}
