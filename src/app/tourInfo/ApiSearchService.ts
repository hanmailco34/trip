import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSearchService {

  baseUrl:string = 'https://www.googleapis.com/youtube/v3/search?';
  url:string ='';

  client_id:string = 'J6CedAQPh6oASAriyRPU';
  client_secret:string = 'yCzzSgD28o';
  api_url:string = 'http://localhost:3000/search/blog?query=';
  
  constructor(private _http:HttpClient) { }

  YoutubeSearch(searchWord){
    this.url='';
    var optionParams={
      q:searchWord,
      part:"snippet",
      key:"AIzaSyAep9j5g0A_q0SDJItMu-Q93wbEyvO6vYc",
      maxResults:25
    };
    this.url = this.baseUrl;
    for(var option in optionParams){
      this.url += option+"="+optionParams[option]+"&";
  }
    this.url = this.url.substr(0, this.url.length-1);
    console.log(this.url);
    return this._http.get(this.url);
  }
 
  naverSearch(searchWord){
  
    this.api_url = this.api_url+searchWord;
    console.log(this.api_url);
    return this._http.get(this.api_url);
  }
}
