import { Component, OnInit } from '@angular/core';
import { Nsearch } from './nsearch';
import { ApiSearchService } from '../ApiSearchService';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {
 
  nsList:Nsearch[] = [];
  nsc:Nsearch = new Nsearch();
  searchWord:string;
  urltest:string = 'https://www.youtube.com/embed/';
  
  constructor(private as:ApiSearchService) { }

  ngOnInit() {
  }
  url(videoId){
    var url = 'https://www.youtube.com/embed/'+videoId;
    return url;
  }
  
 
  nsearch(){
    this.as.naverSearch(this.searchWord).subscribe(res=>{
      this.nsList = res['items'];
    })
  }

}
