import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GitserviceService } from '../gitservice.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import {Repos} from '../repo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit {

  
  

  data:any;
  repo:any;
  username:string;

  
  

  constructor(
    private gitserviceservice: GitserviceService,
    private http: HttpClient
  ) { 
    this.gitserviceservice.getUser('ChelseaOwiti').subscribe(data =>{
      this.data= data;
    });
    this.gitserviceservice.getRepo('ChelseaOwiti').subscribe(repo =>{
      this.repo = repo;
      
    });
  }

  findProfile(){
    this.gitserviceservice.updateProfile(this.username);
    this.gitserviceservice.getUser("").subscribe(User =>{
      console.log(User);
      this.data = User;

    });
    this.gitserviceservice.getRepo("").subscribe(repo =>{
      console.log(repo);
      this.repo = repo;

    })
  }
  


  ngOnInit() {
  }

}
