import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { ServerInfo } from 'src/app/model/model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  servers: Observable<ServerInfo[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getServers();
  }

  getServers() {
    this.servers = this.apiService.getServers();
  }

}
