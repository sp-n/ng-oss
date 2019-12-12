import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servername: string = '';
  serverview: boolean = false;
  serverList = ['server1','server2'];
  constructor() {
   }
  ngOnInit() {
  }
onCreateServer(){
this.serverview = true;
this.serverList.push(this.servername);
}
onClear(){
  this.servername = '';
  this.serverview = false;
}
}
