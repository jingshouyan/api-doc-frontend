import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ServerInfo, MethodInfo } from 'src/app/model/model';
import * as _ from 'underscore';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  server: ServerInfo;
  methods: MethodInfo[];

  columnNames = [
    {id: 'name', value: 'field'},
    {id: 'type', value: 'type'},
    {id: 'annotations', value: 'annotations'},
    // {id: 'remark', value: 'remark'},
  ];

  displayedColumns: string[] = _.map(this.columnNames, x => x.id);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params
    .subscribe(param => this.getHero());
  }

  getHero() {
    const serverName = this.route.snapshot.paramMap.get('name');
    this.apiService.getServer(serverName)
    .subscribe(x => {
      this.server = x.serverInfo;
      this.methods = x.methodInfos;
    });
  }

}
