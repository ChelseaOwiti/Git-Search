import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Repo} from './repo';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor( private http: HttpClient) { }
  //getting github data
  getUser(userName){
    return this.http.get<User>(environment.apiUrl + userName + "?access_token=" + environment.key);
  }
  getRepo(userName){
    return this.http.get<Repo>(environment.apiUrl + userName + '/repo' + "?access_token+" + environment.key);
  }
}
