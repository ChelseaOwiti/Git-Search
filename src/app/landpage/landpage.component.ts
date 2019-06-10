import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../gitservice.service';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';

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


  ngOnInit() {
  }

}
