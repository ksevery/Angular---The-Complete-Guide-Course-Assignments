import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created at this point';
  serverName: string = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  constructor() {
    setTimeout(() => { this.allowNewServer = !this.allowNewServer; }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(eventData: Event) {
    this.serverName = (<HTMLInputElement>eventData.target).value;
  }

}
