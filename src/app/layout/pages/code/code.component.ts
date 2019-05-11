import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeInfo } from 'src/app/model/model';
import * as _ from 'underscore';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  codes: Observable<CodeInfo[]>;

  columnNames = [
    {id: 'code', value: 'code'},
    {id: 'message', value: 'message'},
    {id: 'whoUse', value: 'who use'},
  ];

  displayedColumns: string[] = _.map(this.columnNames, x => x.id);

  constructor(private apiService: ApiService) {
    console.log(this.displayedColumns);
  }

  ngOnInit() {
    this.getCodes();
  }

  getCodes() {
    this.codes = this.apiService.getCodes();
  }

}
