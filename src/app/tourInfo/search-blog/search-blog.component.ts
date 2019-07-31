import { Component, OnInit } from '@angular/core';
import { Nsearch } from './nsearch';
import { ApiSearchService } from '../ApiSearchService';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {
  p: number = 1;
  nsList:Nsearch[] = [];
  nsc:Nsearch = new Nsearch();
  searchWord:string;
  urltest:string = 'https://www.youtube.com/embed/';
  st:number=1;
  lt:number;
  
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
      var html='';
      this.lt = res['display']/10;
      
      for(var ns in this.nsList){
        html+= "<tr >";
        html+="<td style=\"text-align:center;\"><a href=\""+this.nsList[ns].link+"\">"+ this.nsList[ns].title+"</a></td>";
        html+="<td>"+this.nsList[ns].description+"</td>";
        html+="<td style=\"text-align:center;\">"+this.nsList[ns].bloggername+"</td>"
        html+= "</tr>";
        
        if(ns=='10'){
          break;
        }
      }
      document.getElementById('searchResult').innerHTML += html;
      var phtml='<button>pre</button>';
      for(var i=this.st;i<=this.lt;i++){
      phtml += '<button onclick="np('+i+')">'+i+'</button>';
      document.getElementById('pagin').innerHTML = phtml;
      
        }
       }
     )
   }


   nP(i){
     var html ='';
     for(i in this.nsList){
    html+= "<tr >";
    html+="<td style=\"text-align:center;\"><a href=\""+this.nsList[i].link+"\">"+ this.nsList[i].title+"</a></td>";
    html+="<td>"+this.nsList[i].description+"</td>";
    html+="<td style=\"text-align:center;\">"+this.nsList[i].bloggername+"</td>"
    html+= "</tr>";
   }
   
}

  }

