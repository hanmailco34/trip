import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reply } from './reply';

var option = {
  headers:new HttpHeaders({'Content-Type':'application/json'
  })
}

const BASE_URL = 'http://localhost:88';
@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  userNum:string;
  constructor(private _http:HttpClient) {
    this.userNum = localStorage.getItem('userNum');
   }
   getUserbyUserNum(userNum){
     var url = BASE_URL + '/user?userNum='+userNum;
     return this._http.get(url);
   }
  getCompanyList(){
    var url = BASE_URL + '/withs';
    return this._http.get(url);
  }
  getPlanList(){
    var url = BASE_URL + '/plans';
    return this._http.get(url);
  }
  getReviewList(){
    var url = BASE_URL + '/reviews';
    return this._http.get(url);
  }
  getTipList(){
    var url = BASE_URL + '/tips';
    return this._http.get(url);
  }

  getReply(reply:Reply){
    var url = BASE_URL + '/replybyboard';
    return this._http.post(url, reply);
  }

  writeReply(reply:Reply){
    var url = BASE_URL + '/reply';
    return this._http.post(url, reply);
  }

  getCompanyByNum(CompanyNum){
    var url = BASE_URL + '/with?withNum='+CompanyNum;
    return this._http.get(url);
  }

  getTipByNum(tipNum){
    var url = BASE_URL + '/tip?tipNum='+tipNum;
    return this._http.get(url);
  }

  getReviewByNum(rvNum){
    var url = BASE_URL + '/review?rvNum='+rvNum;
    return this._http.get(url);
  }

  getPlanByNum(planNum){
    var url = BASE_URL + '/plan?planNum='+planNum;
    return this._http.get(url);
  }
  getRatingbyRvNum(rvNum){
    var url = BASE_URL + '/reviewRating?rvNum='+rvNum;
    return this._http.get(url);
  }

  insertTip(tips){
    var jtips = JSON.stringify(tips);
    var url = BASE_URL+'/tip';
    return this._http.post(url, jtips, option);
  }
  insertCompany(company){
    var jCompany = JSON.stringify(company);
    var url = BASE_URL + '/with';
    return this._http.post(url, jCompany, option);
  }
  insertReview(review){
    var jReview = JSON.stringify(review);
    var url = BASE_URL + '/review';
    return this._http.post(url, jReview, option);
  }
  insertPlan(plan){
    var jPlan = JSON.stringify(plan);
    var url = BASE_URL + '/plan';
    return this._http.post(url, jPlan, option);
  }
  
  modCompany(company){
    var jCompany = JSON.stringify(company);
    var url = BASE_URL+'/with';
    return this._http.put(url, jCompany, option);
  }
  modReview(review){
    var jReview =JSON.stringify(review);
    var url = BASE_URL+'/review';
    return this._http.put(url, jReview, option);

  }
  modTip(tip){
    var jTip = JSON.stringify(tip);
    var url = BASE_URL+'/tip';
    return this._http.put(url, jTip, option);
  }

  modPlan(plan){
    var jPlan = JSON.stringify(plan);
    var url = BASE_URL+'/plan';
    return this._http.put(url, jPlan, option);
  }

  delCompany(companyNum){
    var url = BASE_URL+'/with?withNum='+companyNum+'&userNum='+ this.userNum;
    return this._http.delete(url);
  }
  delTip(tipNum){
    var url = BASE_URL+'/tip?tipNum='+tipNum+'&userNum='+this.userNum;
    return this._http.delete(url);
  }
  
  delPlan(planNum){
    var url = BASE_URL+'/plan?planNum='+planNum +'&userNum='+this.userNum;
    return this._http.delete(url);
  }
  delReview(rvNum){
    var url = BASE_URL+'/review?rvNum='+rvNum + '&userNum='+this.userNum;
    return this._http.delete(url)
  }

  reviewLike(rvNum){
  var review = {'rvNum':rvNum};
  var jReview = JSON.stringify(review);
  var url = BASE_URL + '/reviewLike';
  return this._http.put(url, jReview, option);
  }

  insertSp(rating){
    var url = BASE_URL + '/sp';
    var jRating = JSON.stringify(rating);
    return this._http.post(url, jRating, option);

  }

}