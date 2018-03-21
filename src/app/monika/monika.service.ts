import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MonikaService {
  randomNum: number = Math.floor(Math.random() * 1000) + 1 ;
  api_key:string = 'b8cc3545-d265-413c-9a80-1b82057096cb';
  constructor(private http: HttpClient) { }

  getMeme(){
    return this.http.get('http://version1.api.memegenerator.net//Instance_Select?instanceID='+this.randomNum+'&apiKey='+this.api_key)
  }
  getNextMeme(){
    this.randomNum += 1
    return this.http.get('http://version1.api.memegenerator.net//Instance_Select?instanceID='+this.randomNum+'&apiKey='+this.api_key)
  }
  getPrevMeme(){
    this.randomNum -= 1
    return this.http.get('http://version1.api.memegenerator.net//Instance_Select?instanceID='+this.randomNum+'&apiKey='+this.api_key)
  }
}
