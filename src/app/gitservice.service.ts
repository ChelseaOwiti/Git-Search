import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Repo} from './repo';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  private username: string;
  private accesstoken = '6da7d12bfd64b068d6056161f5fcd87c80ea9d2a';

  constructor( private http: HttpClient) {
    this.username = "ChelseaOwiti"
   }
  //getting github data
  getUser(username){
    return this.http.get<User>(environment.apiUrl + this.username + "?access_token=" + environment.key);
  }
  getRepo(username){
    return this.http.get<Repo>(environment.apiUrl + this.username + '/repos' + "?access_token=" + environment.key)
  }
  updateProfile(username:string){
    this.username = username;
  }
}
