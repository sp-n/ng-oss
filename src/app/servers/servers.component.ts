import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  name:string = '';
  buttonenable: boolean= true; 

  constructor() {
   }
  reset() {
    this.name = '';
  }

  ngOnInit() {
  }

}
