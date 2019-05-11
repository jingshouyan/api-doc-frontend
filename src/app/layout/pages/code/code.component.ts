import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeInfo } from 'src/app/model/model';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  codes: Observable<CodeInfo[]>;


  constructor(private apiService: ApiService) {
    console.log(apiService);
  }

  ngOnInit() {
    this.getCodes();
  }

  getCodes() {
    this.codes = this.apiService.getCodes();
  }

}
