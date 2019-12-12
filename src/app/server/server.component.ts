import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverStatus: string = 'online';
    serverID : Number = 20;
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverID = Math.random();
    }
}